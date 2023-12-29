import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  //Methode pour configurer le transporter
  private async transporter() {
    const transport = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, //tls
      auth: {
        user: 'notificationrti@rti.ci',
        pass: 'Xuv92171',
      },
    });
    return transport;
  }

  // Pour debuguer le transporter
  async verificnx() {
    (await this.transporter()).transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
  }

  //Envoi du mail de confirmation d'inscription
  async sendSignupConfirmation(userEmail: string, password: string) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'notificationrti@rti.ci',
      to: userEmail,
      subject: "Ouverture de compte M'baaza",
      html: 'Bonjour cher abonné Mbaaza ! <hr> Votre compte vient d\'être créé avec succès. Pour accéder à votre espace bailleur, veuillez cliquer sur le lien suivant : <a href="">Accéder à mon espace</a>. Ci-dessous, vos identifiants de connexion : <hr> E-mail : <b>' + userEmail + ' </b>. <hr> Mot de passe : <b>' + password + ' </b>.Veuillez procéder à la modification de votre mot de passe après la première connexion. L\'équipe de Mbaaza vous remercie pour votre confiance. '  ,
       
    });
  }

  //Envoi du mail de demande de reset
  async sendResetPasswordConfirmation(
    userEmail: string,
    code: string,
    url: string,
  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'notificationrti@rti.ci',
      to: userEmail,
      subject: 'Demande de réinitialisation de mot de passe',
      html: `
      <a href='${url}'> Réinitialiser votre mot de passe ici ... </a>
      <p>Votre code est : ${code}</p>
      <p>Ce code expire dans 15mn </p>
      `,
    });
  }
}
