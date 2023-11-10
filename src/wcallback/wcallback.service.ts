import { Injectable } from '@nestjs/common';
import { PayementDto } from './Dto/payementDto';
import axios from 'axios';
import { CallbackDto } from './Dto/callbackDto';
import { WcallbackEntity } from './wcallback.entity';
import { ProprieteService } from 'src/propriete/propriete.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PayementWaveDto } from './Dto/payementWaveDto';
import { BailleurService } from 'src/bailleur/bailleur.service';


@Injectable()
export class WcallbackService {

    constructor(
        @InjectRepository(WcallbackEntity)
        private wcallbackRepository: Repository<WcallbackEntity>,
        private proprieteService: ProprieteService
    ) { }


    // Dans votre service ou contrôleur
    async payementParTiers(payementDto: PayementDto) {
        const currentAPI = "wave_ci_prod_PA5WLkmrmQFnB4KFiW4MIZNVIN51qM86Lhctic9fGunvsA2ddFpMqXKEnVpMFmTLomFwOeBpWnWmmp2DlTyEYBhCEXhQrtX3ig";
        const { amount, currency, error_url, success_url, proprieteId, locataireRef, mois } = payementDto
        let dataPayement = new PayementWaveDto
        dataPayement = { amount, currency, error_url, success_url }
        try {
            const headers = {
                // Les en-têtes que vous souhaitez inclure dans la requête POST
                Authorization: `Bearer ${currentAPI.toString()}`,
                // 'Content-Type': 'application/json', // Exemple d'en-tête de type de contenu
            };

            const response = await axios.post('https://api.wave.com/v1/checkout/sessions', dataPayement, { headers: headers });

            if (response) {

                const payPropiete = await this.proprieteService.getOne(1, proprieteId)

                let payement = new WcallbackEntity
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
                    idWaveCallback: "",
                    loyer_mois: mois,
                    bailleur: payPropiete.data.bailleur
                }

                const ret = await this.wcallbackRepository.save(payement);

            }

            return JSON.stringify(response.data);


        } catch (error) {
            // Gérez les erreurs ici
            throw new Error('Erreur lors de la requête HTTP : ' + error.message);
        }
    }


    async retourPayement(callbackDto: CallbackDto) {
        const {
            type,
            data,
        } = callbackDto
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
            when_expires
        } = callbackDto.data

        const ret = await this.wcallbackRepository.update({ idWave: id }, {
            checkout_status,
            payment_status,
            when_completed,
            idWaveCallback: callbackDto.id
        })

        return { data: ret }

    }

}