import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from './Dto/signupDto';
import * as bcrypt from 'bcrypt';
import { MailerService } from 'src/mailer/mailer.service';
import { SigninDto } from './Dto/signinDto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { ResetPasswordDemandDto } from './Dto/resetPasswordDemandDto';
import * as speakeasy from 'speakeasy';
import { ResetPasswordConfirmationDto } from './Dto/resetPasswordConfirmationDto';
import { ModifUserDto } from './Dto/modifUserDto';
import { ModifStatutUserDto } from './Dto/modifStatutUserDto';
import { DeleteAccountDto } from './Dto/deleteAccountDto';

@Injectable()
export class UserService {
   
    
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private mailerService: MailerService,
        private configService: ConfigService,
        private  jwtService: JwtService) { }

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

    async signin(signinDto: SigninDto) {
        // ** Vérifi si l'utulisateur existe
        const { email, password } = signinDto;
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) throw new NotFoundException("L'utilisateur n'existe pas");
        // ** Comparaison du mot de passe
        const pass = await bcrypt.compare(password, user.password);
        if (pass == false)
          throw new UnauthorizedException("Le mot de passe n'est pas correct");
        // ** verifi si user est desactivé
        if (user.statut == false)
          throw new UnauthorizedException(
            "Votre compte a été désactivé, contactez l'administrateur",
          );
        // ** delivre le jeton
        const payload = {
          sub: user.userId,
          email: user.email,
        };
        const token = await this.jwtService.sign(payload, {
          expiresIn: '12h',
          secret: this.configService.get('SECRET_KEY'),
        });
        return {
          token,
          user: {
            username: user.username,
            useremail: user.email,
            userrole: user.role,
            userId: user.userId
          },
        };
      }

      async resetPasswordDemand(resetPasswordDemandDto: ResetPasswordDemandDto) {
        const { email } = resetPasswordDemandDto;
        // ** Verifi si l'utilisateur existe
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
          return { 
            data: 
            {
              success: false,
              msg : 'L\'utilisateur n\'existe pas'
            }
        }
      }
        //throw new NotFoundException("L'utilisateur n'existe pas");
        // ** Modification
        const code = speakeasy.totp({
          secret: this.configService.get('OTP_CODE'),
          digits: 5,
          step: 60 * 15,
          encoding: 'base32',
        });
        const url = 'http://localhost:3000/user/reset-pasword-confirmation';
        await this.mailerService.sendResetPasswordConfirmation(
          user.email,
          code,
          url,
        );
        return { 
          data: 
          {
            success: true,
            msg : 'Un mail de réinitialisation vous a été envoyé'
          }
          
         };
      }
    
      async resetPasswordConfirmation(
        resetPasswordConfirmationDto: ResetPasswordConfirmationDto,
      ) {
        const { email, password, code } = resetPasswordConfirmationDto;
        // ** Verifi si l'utilisateur existe
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user) {
          return { 
            data: 
            {
              success: false,
              msg : 'L\'utilisateur n\'existe pas'
            }
        }
      }
        // ** Modification
    
        const match = speakeasy.totp.verify({
          secret: this.configService.get('OTP_CODE'),
          token: code,
          digits: 5,
          step: 60 * 15,
          encoding: 'base32',
        });
        if (!match) throw new UnauthorizedException('Code invalide');
        const hash = await bcrypt.hash(password, 10);
        await this.userRepository.update({ email },  { password: hash });
        return { data: {
          success: true,
          msg : "Mot de passe mise à jour"
        }
        };
      }
    
      async deleteAccount(userId: number, deleteAccountDto: DeleteAccountDto) {
        const { password } = deleteAccountDto;
        const user = await this.userRepository.findOne({
          where: { userId },
        });
        if (!user) throw new NotFoundException("L'utilisateur n'existe pas");
    
        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new NotFoundException("Le MDP n'est pas correct");
    
        await this.userRepository.remove(user);
        return { data: 'Suppression terminée' };
      }
    
      async getOneUser(userId: number) {
        const ret = await this.userRepository.findOne({ where: { userId } });
        return { data: ret };
      }
    
      async modifuser(userIdG: any, modifUserDto: ModifUserDto) {
        const {
          username,
          email,
          contact,
          paysId,
          role,
          statut,
          lienphoto,
          userId,
        } = modifUserDto;
        const ret = await this.userRepository.update({ userId }, modifUserDto );
        return { data: ret };
      }
    
      async modifstatut(userIdG: any, modifStatutUserDto: ModifStatutUserDto) {
        const { statut, userId } = modifStatutUserDto;
        const ret = await this.userRepository.update({ userId } , {statut: !statut});
        return { data: ret };
      }
}
