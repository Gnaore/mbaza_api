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
      subject: "Confirmation d'inscription au concour",
      html: '<h3>Votre inscription a été pris en compte, votre mot de passe est : </h3>' + password ,
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
