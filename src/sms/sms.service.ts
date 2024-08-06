import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SmsDto } from './Dto/smsDto';
import axios from 'axios';
import { SmsDataDto } from './Dto/smsDataDto';

@Injectable()
export class SmsService {
    constructor(private configService: ConfigService) { }

    // Dans votre service ou contrôleur
    async envoiSms(smsDto: SmsDto) {

        try {
            let username = this.configService.get('SMS_USERNAME')
            let password = this.configService.get('SMS_PASSWORD')


            const { sender, to, text, url, type, datetime } = smsDto
            //  let dataSms = new SmsDataDto
            //  dataSms = { username, password, sender, to, text, url, type, datetime }
           
            // Création d'un nouvel objet FormData
            var formData = new FormData();
            // Ajouter des champs au FormData
            formData.append('username', username);
            formData.append('password', password);
            formData.append('sender', sender);
            formData.append('to', to);
            formData.append('text', text);
            formData.append('url', url);
            formData.append('type', type);
            formData.append('datetime', datetime);
            //return JSON.stringify(formData);

            const response = await axios.post('https://rapidinfos.com/api/api_http.php', formData);

            //return JSON.stringify(formData);
            return JSON.stringify(response.data);

        } catch (error) {
            // Gérez les erreurs ici
            throw new Error('Erreur lors de la requête HTTP : ' + error.message);
        }
    }

}
