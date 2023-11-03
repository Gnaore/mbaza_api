import { Injectable } from '@nestjs/common';
import { PayementDto } from './Dto/payementDto';
import axios from 'axios';


@Injectable()
export class WcallbackService {


    // Dans votre service ou contrôleur
    async payementParTiers(payementDto: PayementDto) {
        try {
            const headers = {
                // Les en-têtes que vous souhaitez inclure dans la requête POST
                'Authorization': 'wave_ci_prod_PA5WLkmrmQFnB4KFiW4MIZNVIN51qM86Lhctic9fGunvsA2ddFpMqXKEnVpMFmTLomFwOeBpWnWmmp2DlTyEYBhCEXhQrtX3ig', // Exemple d'en-tête d'authentification
                'Content-Type': 'application/json', // Exemple d'en-tête de type de contenu
            };

            const response = await axios.post('https://api.wave.com/v1/checkout/sessions', payementDto, { headers: headers });
            return response.data;
        } catch (error) {
            // Gérez les erreurs ici
            throw new Error('Erreur lors de la requête HTTP : ' + error.message);
        }
    }

}

/*
async ajouteLocataire(userId: number, ajoutLocataireDto: AjoutLocataireDto) {
    const {
        locataireId,
        locataireBanque,
        locataireDatenais,
        locataireEmail,
        locataireEmailgarant,
        locataireNationalite,
        locataireNbrecharge,
        locataireNom,
        locataireNomgarant,
        locatairePhoto,
        locataireProfession,
        locataireRef,
        locataireSalaire,
        locataireSituationmatri,
        locataireTel,
        locataireTelgarant,
        locataireTypecontrat,
        bailleurId,
        proprieteCode
    } = ajoutLocataireDto;

    //Creation de la reference
    const index = locataireNom.substring(0, 2);
    const codeotp = speakeasy.totp({
        secret: this.configService.get('OTP_CODE'),
        digits: 6,
        encoding: 'base32',
    });
    const reference = codeotp + index;

    //Ajout à la base
    const bail = await this.bailleurService.getOne(userId, bailleurId)
    const prop = await this.proprieteService.getOneByCode(userId, proprieteCode)

    let locataireE = new LocataireEntity
    locataireE = {
        locataireId: undefined,
        locataireBanque,
        locataireDatenais,
        locataireEmail,
        locataireEmailgarant,
        locataireNationalite,
        locataireNbrecharge,
        locataireNom,
        locataireNomgarant,
        locatairePhoto,
        locataireProfession,
        locataireRef: reference,
        locataireSalaire,
        locataireSituationmatri,
        locataireTel,
        locataireTelgarant,
        locataireTypecontrat,
        bailleur: bail.data,
        propriete: prop.data
    }
    const ret = await this.locataireRepository.save(locataireE);
    return { data: ret };
}*/