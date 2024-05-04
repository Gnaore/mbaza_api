import { Injectable } from '@nestjs/common';
import { PayementDto } from './Dto/payementDto';
import axios from 'axios';
import { CallbackDto } from './Dto/callbackDto';
import { WcallbackEntity } from './wcallback.entity';
import { ProprieteService } from 'src/propriete/propriete.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PayementWaveDto } from './Dto/payementWaveDto';
import { MailerService } from 'src/mailer/mailer.service';
import { LocataireEntity } from 'src/locataire/locataire.entity';
import { ProprieteEntity } from 'src/propriete/propriete.entity';
import { ProvisionEntity } from 'src/provision/provision.entity';
import { ProvisionDto } from 'src/provision/Dto/provisionDto';
import { SmsService } from 'src/sms/sms.service';
import { LocataireService } from 'src/locataire/locataire.service';
import { BailleurService } from 'src/bailleur/bailleur.service';
import { format } from 'date-fns';

@Injectable()
export class WcallbackService {
  constructor(
    @InjectRepository(WcallbackEntity)
    private wcallbackRepository: Repository<WcallbackEntity>,
    private mailerService: MailerService,
    private smsService: SmsService,
    private proprieteService: ProprieteService,
    @InjectRepository(LocataireEntity)
    private locataireRepository: Repository<LocataireEntity>,
    @InjectRepository(ProvisionEntity)
    private provisionRepository: Repository<ProvisionEntity>,
  ) {}

  // Dans votre service ou contrôleur
  async payementParTiers(payementDto: PayementDto) {
    const currentAPI =
      'wave_ci_prod_PA5WLkmrmQFnB4KFiW4MIZNVIN51qM86Lhctic9fGunvsA2ddFpMqXKEnVpMFmTLomFwOeBpWnWmmp2DlTyEYBhCEXhQrtX3ig';
    const {
      amount,
      currency,
      error_url,
      success_url,
      proprieteId,
      locataireRef,
      mois,
      loyer_annee,
      nomlocataire,
      emailBailleur,
    } = payementDto;
    let dataPayement = new PayementWaveDto();
    dataPayement = { amount, currency, error_url, success_url };
    try {
      const headers = {
        // Les en-têtes que vous souhaitez inclure dans la requête POST
        Authorization: `Bearer ${currentAPI.toString()}`,
        // 'Content-Type': 'application/json', // Exemple d'en-tête de type de contenu
      };

      const response = await axios.post(
        'https://api.wave.com/v1/checkout/sessions',
        dataPayement,
        { headers: headers },
      );

      if (response) {
        const payPropiete = await this.proprieteService.getOne(1, proprieteId);

        let payement = new WcallbackEntity();
        payement = {
          id: undefined,
          idWave: response.data.id,
          amount: response.data.amount,
          checkout_status: response.data.checkout_status,
          currency: response.data.currency,
          payment_status: response.data.payment_status,
          wave_launch_url: response.data.wave_launch_url,
          when_completed: response.data.when_completed,
          when_created: response.data.when_created,
          when_expires: response.data.when_expires,
          locataireRef: locataireRef,
          propriete: payPropiete.data,
          idWaveCallback: '',
          loyer_mois: mois,
          loyer_annee: loyer_annee,
          nomlocataire: nomlocataire,
          emailBailleur: emailBailleur,
          bailleur: payPropiete.data.bailleur,
        };

        const ret = await this.wcallbackRepository.save(payement);
      }

      return JSON.stringify(response.data);
    } catch (error) {
      // Gérez les erreurs ici
      throw new Error('Erreur lors de la requête HTTP : ' + error.message);
    }
  }

  formatDate(): string {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    return formattedDate || '';
  }

  async retourPayement(callbackDto: CallbackDto) {
    var vamount = '';
    const { type, data } = callbackDto;
    const {
      id,
      amount,
      checkout_status,
      client_reference,
      currency,
      error_url,
      payment_status,
      success_url,
      wave_launch_url,
      when_completed,
      when_expires,
    } = callbackDto.data;

    var ret: any;
    ret = await this.wcallbackRepository.update(
      { idWave: id },
      {
        checkout_status,
        payment_status,
        when_completed,
        idWaveCallback: callbackDto.id,
      },
    );

    vamount = amount;

    if (ret.affected == '1' && payment_status == 'succeeded') {
      const callback = await this.wcallbackRepository.findOne({
        where: { idWave: id },
      });

      if (callback) {
        await this.mailerService.sendPaiementConfirmation(
          callback.emailBailleur,
          vamount,
          callback.locataireRef,
          callback.loyer_mois,
          callback.nomlocataire,
          callback.loyer_annee,
        );

        const locataire = await this.getOneByReference(callback.locataireRef);
        var provisionDTO = new ProvisionDto();
        provisionDTO = {
          mois: callback.loyer_mois,
          annee: callback.loyer_annee,
          status: true,
          idWave: callback.idWave,
          locataireRef: callback.locataireRef,
          idWaveCallback: callback.idWaveCallback,
          amount: callback.amount,
          when_completed: callback.when_completed,
          nummois: 0,
          relance: null,
        };
        if (locataire) {
          await this.updateProvision(provisionDTO, locataire.data.locataireId);

          let text = `Votre réçu \n Cher Locataire, le paiement de votre loyer a été effectué avec succes. \n Ref. paiement : ${callback.idWave} \n Montant :  ${callback.amount} \n Mois : ${callback.loyer_mois}\n Année: ${callback.loyer_annee}\n Votre quittance de loyer est disponible sur la plateform, Mbaaza vous remercie de votre fidélité`;
          var boby = {
            sender: 'MBAAZA',
            to: locataire.data.locataireTel,
            text: text,
            url: 'mbaaza.com',
            type: 'unicode',
            datetime: this.formatDate(),
          };
          await this.smsService.envoiSms(boby);
        }
      }
    }

    return { data: ret };
  }

  async getAllpayement() {
    const ret = await this.wcallbackRepository.find({
      relations: { bailleur: true, propriete: true },
    });
    return { data: ret };
  }

  async getAllpayementParLocataire(userId: number, ref: string) {
    const ret = await this.wcallbackRepository.find({
      relations: { bailleur: true, propriete: true },
      where: { locataireRef: ref, payment_status: 'succeeded' },
    });
    return { data: ret };
  }

  async updateProvision(provisionDto: ProvisionDto, locataireId: number) {
    const {
      mois,
      annee,
      status,
      idWave,
      locataireRef,
      idWaveCallback,
      amount,
      when_completed,
      nummois,
    } = provisionDto;
    // const provision = await this.provisionRepository.findOne({where: {mois: mois, annee:annee}})
    const ret = await this.provisionRepository.update(
      { mois: mois, annee: annee, locataire: { locataireId } },
      {
        status,
        idWave,
        idWaveCallback,
        amount,
        when_completed,
      },
    );
  }

  async getOneByReference(ref: string) {
    const ret = await this.locataireRepository.findOne({
      relations: { bailleur: true, propriete: true },
      where: { locataireRef: ref },
    });
    return { data: ret };
  }
}
