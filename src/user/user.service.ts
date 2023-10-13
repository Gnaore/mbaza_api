import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from './Dto/signupDto';
import * as bcrypt from 'bcrypt';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private mailerService: MailerService ) { }

    async getAllUsers() {
        const ret = await this.userRepository.find();
        return { data: ret }
    }

    async signup(signupDto: SignupDto) {
        //generation du mdp
        var generator = require('generate-password');
        var password = generator.generate({
            length: 10,
            numbers: true,
        });

        const { email, username, contact, paysId, role, lienphoto } = signupDto;

        //Vérifier si l'utilisateur est dejà inscrit
        const user = await this.userRepository.findOne({ where: { email } });
        if (user) throw new ConflictException("L'utilisateur existe déjà");

        //Hasher le mot de passe
        const hash = await bcrypt.hash(password, 10);

        //Enregistrer l'utilisateur dans la base de données
        var userData = new SignupDto()
        userData.email = email
        userData.username = username
        userData.password = hash
        userData.contact = contact
        userData.paysId = paysId
        userData.role = role
        userData.lienphoto = lienphoto

        await this.userRepository.save(userData);
        //Envoyer un email de confirmation
        await this.mailerService.sendSignupConfirmation(email, password);
        //Retourner une reponse de succes
        return { data: 'Utilisateur créé avec succès' };
    }
}
