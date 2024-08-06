import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { AppService } from 'src/app.service';

@Injectable()
export class MailerService {


  //Methode pour configurer le transporter
  /* private async transporter() {
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
   }*/
  /*   //Methode pour configurer le transporter
     private async transporter() {
       const transport = nodemailer.createTransport({
         host: "smtp.office365.com",
         port: 587,
         secure: false, //tls
         auth: {
           user: "info@mbaaza.com",
           pass: "Xpr!2kIP",
         },
       });
       return transport;
     }
     */

  //Methode pour configurer le transporter
  private async transporter() {
    const transport = nodemailer.createTransport({
      host: "mail.mbaaza.com",
      port: 465,
      secure: true, //tls
      auth: {
        user: "info@mbaaza.com",
        pass: "z;TZ~j}OBy",
      },
    });
    return transport;
  }


  // Pour debuguer le transporter
  async verificnx() {
    (await this.transporter()).transporter.verify(function (error, success) {
      if (error) {
        console.log("PROBLEME AU NIVEAU DE L'ENVOI " + error);
      } else {
        console.log('Message envoyé');
      }
    });
  }

  //Envoi du mail de confirmation d'inscription
  async sendSignupConfirmation(userEmail: string, password: string, roleuser: string) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: userEmail,
      subject: "Ouverture de compte M'baaza User",
      html:
        "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" +
        "<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>" +
        '<head>' +
        "  <meta charset='UTF-8'>" +
        "  <meta content='width=device-width, initial-scale=1' name='viewport'>" +
        "  <meta content='telephone=no' name='format-detection'>" +
        '  <title>Courrier Utilisateur</title><!--[if (mso 16)]>' +
        "    <style type='text/css'>" +
        '    a {text-decoration: none;}' +
        '    </style>' +
        '    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>' +
        '<xml>' +
        '    <o:OfficeDocumentSettings>' +
        '    <o:AllowPNG></o:AllowPNG>' +
        '    <o:PixelsPerInch>96</o:PixelsPerInch>' +
        '    </o:OfficeDocumentSettings>' +
        '</xml>' +
        '<![endif]-->' +
        "  <style type='text/css'>" +
        '#outlook a {' +
        '  padding:0;' +
        '}' +
        '.ExternalClass {' +
        ' width:100%;' +
        '}' +
        '.ExternalClass,' +
        '.ExternalClass p,' +
        '.ExternalClass span,' +
        '.ExternalClass font,' +
        '.ExternalClass td,' +
        '.ExternalClass div {' +
        'line-height:100%;' +
        '}' +
        '.es-button {' +
        'mso-style-priority:100!important;' +
        'text-decoration:none!important;' +
        '}' +
        'a[x-apple-data-detectors] {' +
        'color:inherit!important;' +
        'text-decoration:none!important;' +
        'font-size:inherit!important;' +
        'font-family:inherit!important;' +
        'font-weight:inherit!important;' +
        ' line-height:inherit!important;' +
        '}' +
        ' .es-desk-hidden {' +
        '   display:none;' +
        '   float:left;' +
        '  overflow:hidden;' +
        ' width:0;' +
        '  max-height:0;' +
        '  line-height:0;' +
        '   mso-hide:all;' +
        '  }' +
        "  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }" +
        ' @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }' +
        '  </style>' +
        '   </head>' +
        "   <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>" +
        "    <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>" +
        "        <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>" +
        "        <v:fill type='tile' color='#cccccc'></v:fill>" +
        '       </v:background>' +
        '     <![endif]-->' +
        "   <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>" +
        "     <tr style='border-collapse:collapse'>" +
        "      <td valign='top' style='padding:0;Margin:0'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        "             <tr style='border-collapse:collapse'>" +
        "              <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td style='padding:0;Margin:0'>" +
        "                       <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr class='links' style='border-collapse:collapse'>" +
        "                          <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "       <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>" +
        "                       <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher Utilisateur,</p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Bravo ! Votre compte MBAAZA a été créé avec succès et nous sommes ravis de vous compter parmi nos utilisateurs. Vous êtes maintenant prêt à utiliser l'application en tant que : <strong>" +
        roleuser +
        " </strong> .</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Vos identifiants de connexion sont&nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:14px'><strong>E-mail :  " +
        userEmail +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:red;font-size:14px'><strong>Mot de Passe :  " +
        password +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre demanande serra traiter dans les prochain 72 h. Suite à celà nous vous recontacterons pous la finalisation.&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#0000cd;font-size:14px'><a  href='http://app.mbaaza.com' target='_blank'>[Cliquez ici pour vous connecter]</a></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Une fois connecté, vous pourrez accéder à votre menu personnalisé, où vous pourrez mener vos actions.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à nous contacter. Notre équipe d'assistance est là pour vous aider à tout moment.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Bienvenue dans la communauté MBAAZA !</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Cordialement,</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>L'équipe Mbaaza</p></td>" +
        '                      </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>" +
        "            <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        "                  <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>" +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;display:none'></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;font-size:0'>" +
        "                       <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table><!--[if mso]></td></tr></table><![endif]--></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table></td>' +
        '     </tr>' +
        '   </table>' +
        '  </div>' +
        ' </body>' +
        '</html>',
    });
  }

  //Envoi du mail de confirmation d'inscription
  async sendSignupConfirmationBailleur(userEmail: string, password: string) {

    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: userEmail,
      subject: "Ouverture de compte M'baaza Bailleur",
      html:
        "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" +
        "<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>" +
        '<head>' +
        "  <meta charset='UTF-8'>" +
        "  <meta content='width=device-width, initial-scale=1' name='viewport'>" +
        "  <meta content='telephone=no' name='format-detection'>" +
        '  <title>Courrier Bailleur</title><!--[if (mso 16)]>' +
        "    <style type='text/css'>" +
        '    a {text-decoration: none;}' +
        '    </style>' +
        '    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>' +
        '<xml>' +
        '    <o:OfficeDocumentSettings>' +
        '    <o:AllowPNG></o:AllowPNG>' +
        '    <o:PixelsPerInch>96</o:PixelsPerInch>' +
        '    </o:OfficeDocumentSettings>' +
        '</xml>' +
        '<![endif]-->' +
        "  <style type='text/css'>" +
        '#outlook a {' +
        '  padding:0;' +
        '}' +
        '.ExternalClass {' +
        ' width:100%;' +
        '}' +
        '.ExternalClass,' +
        '.ExternalClass p,' +
        '.ExternalClass span,' +
        '.ExternalClass font,' +
        '.ExternalClass td,' +
        '.ExternalClass div {' +
        'line-height:100%;' +
        '}' +
        '.es-button {' +
        'mso-style-priority:100!important;' +
        'text-decoration:none!important;' +
        '}' +
        'a[x-apple-data-detectors] {' +
        'color:inherit!important;' +
        'text-decoration:none!important;' +
        'font-size:inherit!important;' +
        'font-family:inherit!important;' +
        'font-weight:inherit!important;' +
        ' line-height:inherit!important;' +
        '}' +
        ' .es-desk-hidden {' +
        '   display:none;' +
        '   float:left;' +
        '  overflow:hidden;' +
        ' width:0;' +
        '  max-height:0;' +
        '  line-height:0;' +
        '   mso-hide:all;' +
        '  }' +
        "  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }" +
        ' @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }' +
        '  </style>' +
        '   </head>' +
        "   <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>" +
        "    <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>" +
        "        <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>" +
        "        <v:fill type='tile' color='#cccccc'></v:fill>" +
        '       </v:background>' +
        '     <![endif]-->' +
        "   <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>" +
        "     <tr style='border-collapse:collapse'>" +
        "      <td valign='top' style='padding:0;Margin:0'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        "             <tr style='border-collapse:collapse'>" +
        "              <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td style='padding:0;Margin:0'>" +
        "                       <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr class='links' style='border-collapse:collapse'>" +
        "                          <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "       <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>" +
        "                       <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher bailleur,</p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Bravo ! Votre compte MBAAZA a été créé avec succès et nous sommes ravis de vous compter parmi nos utilisateurs. Vous êtes maintenant prêt à suivre vos biens immobiliers de manière efficace et pratique grâce à notre plateforme.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Vos identifiants de connexion sont&nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:14px'><strong>E-mail :  " +
        userEmail +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:red;font-size:14px'><strong>Mot de Passe :  " +
        password +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Vous pouvez modifier le mot de passe à votre convenance quand vous le souhaitez.&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#0000cd;font-size:14px'><a  href='https://mbaaza.com' target='_blank'>[Cliquez ici pour vous connecter]</a></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Une fois connecté, vous pourrez accéder à votre tableau de bord personnalisé, où vous pourrez suivre tous vos biens immobiliers,&nbsp;&nbsp;consulter des rapports financiers et bien plus encore.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à nous contacter. Notre équipe d'assistance est là pour vous aider à tout moment.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Bienvenue dans la communauté MBAAZA !</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Cordialement,</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>L'équipe Mbaaza</p></td>" +
        '                      </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>" +
        "            <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        "                  <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>" +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;display:none'></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;font-size:0'>" +
        "                       <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table><!--[if mso]></td></tr></table><![endif]--></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table></td>' +
        '     </tr>' +
        '   </table>' +
        '  </div>' +
        ' </body>' +
        '</html>',
    });
  }


  //Envoi du mail de confirmation d'inscription
  async sendSignupConfirmationLocataire(userEmail: string, password: string, locataireQrcode: any) {
    this.verificnx();
    const lien = AppService.urlg + locataireQrcode;

    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: userEmail,
      subject: "Ouverture de compte M'baaza Locataire",
      html:
        "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" +
        "<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>" +
        '<head>' +
        "  <meta charset='UTF-8'>" +
        "  <meta content='width=device-width, initial-scale=1' name='viewport'>" +
        "  <meta content='telephone=no' name='format-detection'>" +
        '  <title>Courrier Bailleur</title><!--[if (mso 16)]>' +
        "    <style type='text/css'>" +
        '    a {text-decoration: none;}' +
        '    </style>' +
        '    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>' +
        '<xml>' +
        '    <o:OfficeDocumentSettings>' +
        '    <o:AllowPNG></o:AllowPNG>' +
        '    <o:PixelsPerInch>96</o:PixelsPerInch>' +
        '    </o:OfficeDocumentSettings>' +
        '</xml>' +
        '<![endif]-->' +
        "  <style type='text/css'>" +
        '#outlook a {' +
        '  padding:0;' +
        '}' +
        '.ExternalClass {' +
        ' width:100%;' +
        '}' +
        '.ExternalClass,' +
        '.ExternalClass p,' +
        '.ExternalClass span,' +
        '.ExternalClass font,' +
        '.ExternalClass td,' +
        '.ExternalClass div {' +
        'line-height:100%;' +
        '}' +
        '.es-button {' +
        'mso-style-priority:100!important;' +
        'text-decoration:none!important;' +
        '}' +
        'a[x-apple-data-detectors] {' +
        'color:inherit!important;' +
        'text-decoration:none!important;' +
        'font-size:inherit!important;' +
        'font-family:inherit!important;' +
        'font-weight:inherit!important;' +
        ' line-height:inherit!important;' +
        '}' +
        ' .es-desk-hidden {' +
        '   display:none;' +
        '   float:left;' +
        '  overflow:hidden;' +
        ' width:0;' +
        '  max-height:0;' +
        '  line-height:0;' +
        '   mso-hide:all;' +
        '  }' +
        "  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }" +
        ' @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }' +
        '  </style>' +
        '   </head>' +
        "   <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>" +
        "    <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>" +
        "        <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>" +
        "        <v:fill type='tile' color='#cccccc'></v:fill>" +
        '       </v:background>' +
        '     <![endif]-->' +
        "   <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>" +
        "     <tr style='border-collapse:collapse'>" +
        "      <td valign='top' style='padding:0;Margin:0'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        "             <tr style='border-collapse:collapse'>" +
        "              <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td style='padding:0;Margin:0'>" +
        "                       <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr class='links' style='border-collapse:collapse'>" +
        "                          <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "       <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>" +
        "                       <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher Locataire,</p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Félicitations ! Votre compte MBAAZA a été créé avec succès et nous sommes ravis de vous compter parmi nos utilisateurs. Grâce à notre plateforme, vous pourrez gérer facilement vos paiements de loyer et communiquer efficacement avec votre bailleur.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Vos identifiants de connexion sont&nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:14px'><strong>E-mail :  " +
        userEmail +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:red;font-size:14px'><strong>Mot de Passe :  " +
        password +
        " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Vous pouvez modifier le mot de passe à votre convenance quand vous le souhaitez.&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#0000cd;font-size:14px'><a  href='https://mbaaza.com' target='_blank'>[Cliquez ici pour vous connecter]</a></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'> vous pourrez accéder à votre espace personnel où vous pourrez consulter votre historique de paiements, télécharger des quittances, communiquer avec votre bailleur et bien plus encore.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Si vous avez des questions ou rencontrez des difficultés, n'hésitez pas à nous contacter. Notre équipe d'assistance est là pour vous aider à tout moment.</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Bienvenue dans la communauté MBAAZA !</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Cordialement,</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>L'équipe Mbaaza</p></td>" +
        '                      </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table>' +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>" +
        "            <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='" +
        lien +
        "' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='" +
        lien +
        "' alt='" +
        lien +
        "' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        "                  <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>" +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;display:none'></td>" +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        "               </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>" +
        '                     </tr>' +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;font-size:0'>" +
        "                       <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        '                         </tr>' +
        '                       </table></td>' +
        '                     </tr>' +
        '                   </table></td>' +
        '                 </tr>' +
        '               </table><!--[if mso]></td></tr></table><![endif]--></td>' +
        '             </tr>' +
        '           </table></td>' +
        '         </tr>' +
        '       </table></td>' +
        '     </tr>' +
        '   </table>' +
        '  </div>' +
        ' </body>' +
        '</html>',
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
      from: 'info@mbaaza.com',
      to: userEmail,
      subject: 'Demande de réinitialisation de mot de passe',
      html: "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" +
        "<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>" +
        "<head>" +
        "  <meta charset='UTF-8'>" +
        "  <meta content='width=device-width, initial-scale=1' name='viewport'>" +
        "  <meta content='telephone=no' name='format-detection'>" +
        "  <title>Courrier Réinitialisation de mot de passe</title><!--[if (mso 16)]>" +
        "    <style type='text/css'>" +
        "    a {text-decoration: none;}" +
        "    </style>" +
        "    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        "<xml>" +
        "    <o:OfficeDocumentSettings>" +
        "    <o:AllowPNG></o:AllowPNG>" +
        "    <o:PixelsPerInch>96</o:PixelsPerInch>" +
        "    </o:OfficeDocumentSettings>" +
        "</xml>" +
        "<![endif]-->" +
        "  <style type='text/css'>" +
        "#outlook a {" +
        "  padding:0;" +
        "}" +
        ".ExternalClass {" +
        " width:100%;" +
        "}" +
        ".ExternalClass," +
        ".ExternalClass p," +
        ".ExternalClass span," +
        ".ExternalClass font," +
        ".ExternalClass td," +
        ".ExternalClass div {" +
        "line-height:100%;" +
        "}" +
        ".es-button {" +
        "mso-style-priority:100!important;" +
        "text-decoration:none!important;" +
        "}" +
        "a[x-apple-data-detectors] {" +
        "color:inherit!important;" +
        "text-decoration:none!important;" +
        "font-size:inherit!important;" +
        "font-family:inherit!important;" +
        "font-weight:inherit!important;" +
        " line-height:inherit!important;" +
        "}" +
        " .es-desk-hidden {" +
        "   display:none;" +
        "   float:left;" +
        "  overflow:hidden;" +
        " width:0;" +
        "  max-height:0;" +
        "  line-height:0;" +
        "   mso-hide:all;" +
        "  }" +
        "  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }" +
        " @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }" +
        "  </style>" +
        "   </head>" +
        "   <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>" +
        "    <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>" +
        "        <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>" +
        "        <v:fill type='tile' color='#cccccc'></v:fill>" +
        "       </v:background>" +
        "     <![endif]-->" +
        "   <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>" +
        "     <tr style='border-collapse:collapse'>" +
        "      <td valign='top' style='padding:0;Margin:0'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td style='padding:0;Margin:0'>" +
        "                       <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr class='links' style='border-collapse:collapse'>" +
        "                          <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table>" +
        "       <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>" +
        "                       <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Salut,</p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'> Nous avons reçu une demande de réinitialisation de votre mot de passe" +
        "                      </tr>" +
        "                      <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>trouvez ci-dessous votre code de réinitialisation &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code : <strong>" + code + " </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:red;font-size:14px'><strong> Ce code expire dans 1mn </strong></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'><br></p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>" +
        "                      </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table>" +
        "       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>" +
        "            <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                  <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;display:none'></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;font-size:0'>" +
        "                       <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td></tr></table><![endif]--></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table></td>" +
        "     </tr>" +
        "   </table>" +
        "  </div>" +
        " </body>" +
        "</html>",
    });
  }


  //Envoi du mail de paiement
  async sendPaiementConfirmation(
    bailleurEmail: string,
    amount: string,
    locataireRef: string,
    loyer_mois: string,
    locataireNom: string,
    loyer_annee: number
  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: bailleurEmail,
      subject: 'Payement de loyer',
      html: "<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>" +
        "<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>" +
        "<head>" +
        "  <meta charset='UTF-8'>" +
        "  <meta content='width=device-width, initial-scale=1' name='viewport'>" +
        "  <meta content='telephone=no' name='format-detection'>" +
        "  <title>Payement de loyer</title><!--[if (mso 16)]>" +
        "    <style type='text/css'>" +
        "    a {text-decoration: none;}" +
        "    </style>" +
        "    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        "<xml>" +
        "    <o:OfficeDocumentSettings>" +
        "    <o:AllowPNG></o:AllowPNG>" +
        "    <o:PixelsPerInch>96</o:PixelsPerInch>" +
        "    </o:OfficeDocumentSettings>" +
        "</xml>" +
        "<![endif]-->" +
        "  <style type='text/css'>" +
        "#outlook a {" +
        "  padding:0;" +
        "}" +
        ".ExternalClass {" +
        " width:100%;" +
        "}" +
        ".ExternalClass," +
        ".ExternalClass p," +
        ".ExternalClass span," +
        ".ExternalClass font," +
        ".ExternalClass td," +
        ".ExternalClass div {" +
        "line-height:100%;" +
        "}" +
        ".es-button {" +
        "mso-style-priority:100!important;" +
        "text-decoration:none!important;" +
        "}" +
        "a[x-apple-data-detectors] {" +
        "color:inherit!important;" +
        "text-decoration:none!important;" +
        "font-size:inherit!important;" +
        "font-family:inherit!important;" +
        "font-weight:inherit!important;" +
        " line-height:inherit!important;" +
        "}" +
        " .es-desk-hidden {" +
        "   display:none;" +
        "   float:left;" +
        "  overflow:hidden;" +
        " width:0;" +
        "  max-height:0;" +
        "  line-height:0;" +
        "   mso-hide:all;" +
        "  }" +
        "  @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }" +
        " @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }" +
        "  </style>" +
        "   </head>" +
        "   <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>" +
        "    <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>" +
        "        <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>" +
        "        <v:fill type='tile' color='#cccccc'></v:fill>" +
        "       </v:background>" +
        "     <![endif]-->" +
        "   <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>" +
        "     <tr style='border-collapse:collapse'>" +
        "      <td valign='top' style='padding:0;Margin:0'>" +
        "       <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td style='padding:0;Margin:0'>" +
        "                       <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr class='links' style='border-collapse:collapse'>" +
        "                          <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table>" +
        "       <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>" +
        "             <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>" +
        "               <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>" +
        "                       <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher Bailleur,</p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'> Ceci est une notification de payement de loyer ." +
        "                      </tr>" +
        "                      <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Trouvez ci-dessous les informations sur le payement &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Reférence du locataire : <strong>" + locataireRef +
        "                         </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et Prénoms : <strong>" + locataireNom +
        "                         </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Montant : <strong>" + amount +
        "                         </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Pour le mois de : <strong>" + loyer_mois + " " + loyer_annee + " </strong></p>" +
        "                      </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table>" +
        "       <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>" +
        "         <tr style='border-collapse:collapse'>" +
        "          <td align='center' style='padding:0;Margin:0'>" +
        "           <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>" +
        "            <tr style='border-collapse:collapse'>" +
        "              <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                  <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='center' style='padding:0;Margin:0;display:none'></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->" +
        "               <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>" +
        "                 <tr style='border-collapse:collapse'>" +
        "                  <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>" +
        "                   <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>" +
        "                     </tr>" +
        "                     <tr style='border-collapse:collapse'>" +
        "                      <td align='left' style='padding:0;Margin:0;font-size:0'>" +
        "                       <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>" +
        "                         <tr style='border-collapse:collapse'>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                          <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>" +
        "                         </tr>" +
        "                       </table></td>" +
        "                     </tr>" +
        "                   </table></td>" +
        "                 </tr>" +
        "               </table><!--[if mso]></td></tr></table><![endif]--></td>" +
        "             </tr>" +
        "           </table></td>" +
        "         </tr>" +
        "       </table></td>" +
        "     </tr>" +
        "   </table>" +
        "  </div>" +
        " </body>" +
        "</html>",
    });
  }

  // Envoie de mail au requerent(e)
  async sendMail(
    to: string,
    subject: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number

  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                   &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>s : <strong> ${nombrePiece} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    });
  }
  async sendMailResidance(
    to: string,
    subject: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number

  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                   &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    });
  }

  async sendMailReceptepicine(
    to: string,
    subject: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePlace: number

  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                   &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de places : <strong> ${nombrePlace} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    });
  }

  async sendMailTrio(
    to: string,
    subject: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number

  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                   &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    });
  }
  async sendMailTerrain(
    to: string,
    subject: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    superfice: number

  ) {
    this.verificnx();
    (await this.transporter()).sendMail({
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                   &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Superficie : <strong> ${superfice} m2
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://wa.me/message/2JI6VKPXYRW3N1" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    });
  }

  //Envoie de mail à Mbaaza pour Forworder au Commerçiaux

  async sendEmailResidenceToMbaza(
    to: 'biensimmobiliers@mbaaza.com',
    codeRequeteGen: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number,
    bienMeubleDatedebut: Date,
    bienMeubleDatefin: Date,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: 'Traitement de démande',
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA par jour
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Jour d'entrée  : <strong> ${bienMeubleDatedebut}, Jour de sortie ${bienMeubleDatefin}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailDuoToMbaza(
    to: 'biensimmobiliers@mbaaza.com',
    emailSubjects: string,
    codeRequeteGen: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePlace: number,
    bienMeubleDatedebut: Date,
    bienMeubleDatefin: Date,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de places : <strong> ${nombrePlace}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA par jour
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Jour d'entrée  : <strong> ${bienMeubleDatedebut}, Jour de sortie ${bienMeubleDatefin}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailTrioToMbaza(
    to: 'biensimmobiliers@mbaaza.com',
    emailSubjects: string,
    codeRequeteGen: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailTerrainToMbaza(
    to: string,
    emailSubjects: string,
    codeRequeteGen: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    superficie: number,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Superfice : <strong> ${superficie} m2
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailToMbaza(
    to: 'biensimmobiliers@mbaaza.com',
    codeRequeteGen: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: 'Traitement de démande',
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  // Envoyer à IsbackConcepte

  async sendEmailResidenceToMbazaIsbackConcepte(
    to: 'isbackconcept@mbaaza.com',
    subject: string,
    codeRequeteGen: string,
    nomRequeteur: string,
    contactRequeteur: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number,
    bienMeubleDatedebut: Date,
    bienMeubleDatefin: Date,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et prénoms du requerant : <strong> ${nomRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N° de teléphone du requerant : <strong> ${contactRequeteur}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA par jour
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Jour d'entrée  : <strong> ${bienMeubleDatedebut}, Jour de sortie ${bienMeubleDatefin}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailDuoToMbazaIsbackConcepte(
    to: 'isbackconcept@mbaaza.com',
    emailSubjects: string,
    codeRequeteGen: string,
    nomRequeteur: string,
    contactRequeteur: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePlace: number,
    bienMeubleDatedebut: Date,
    bienMeubleDatefin: Date,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                      </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et prénoms du requerant : <strong> ${nomRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N° de teléphone du requerant : <strong> ${contactRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de places : <strong> ${nombrePlace}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} à ${montantFin} FCFA par jour.
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Jour d'entrée  : <strong> ${bienMeubleDatedebut}, Jour de sortie ${bienMeubleDatefin}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailTrioToMbazaIsbackConcepte(
    to: string,
    emailSubjects: string,
    codeRequeteGen: string,
    nomRequeteur: string,
    contactRequeteur: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    nombrePiece: number,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                      </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et prénoms du requerant : <strong> ${nomRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N° de teléphone du requerant : <strong> ${contactRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nombre de pièces : <strong> ${nombrePiece}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook'  src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'>+<a href="https://www.facebook.com/Mbaazasolution?mibextid=ZbWKwL"></a></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailTerrainToMbazaIsbackConcepte(
    to: string,
    emailSubjects: string,
    codeRequeteGen: string,
    nomRequeteur: string,
    contactRequeteur: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',
    superficie: number,
    montantDebut: number,
    montantFin: number
  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: emailSubjects,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Chers commerciaux et agences immobilières partenaires,</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons une nouvelle opportunité immobilière à traiter dans un délai de 72 heures.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous comptons sur votre expertise et votre détermination pour trouver le bien correspondant aux critères de notre client.
                              </tr>
                              <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Votre professionnalisme et votre réactivité seront essentiels pour atteindre notre objectif.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                      </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et prénoms du requerant : <strong> ${nomRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N° de teléphone du requerant : <strong> ${contactRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Carégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Superfice : <strong> ${superficie} m2
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cout budjetaire allant de  : <strong> ${montantDebut} F CFA à ${montantFin} F CFA
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Merci pour votre engagement et votre efficacité.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Cordialement.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  async sendEmailToMbazaIsbackConcepte(
    to: string,
    subject: string,
    codeRequeteGen: string,
    nomRequeteur: string,
    contactRequeteur: string,
    categorieRequete: string,
    typeRequete: string,
    infoLocalisation: string,
    infoCritere: string,
    souhait: string = '',

  ) {

    const mailOptions = {
      from: 'info@mbaaza.com',
      to: to,
      subject: subject,
      html: ` <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
        <html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='fr' style='padding:0;Margin:0'>
        <head>
          <meta charset='UTF-8'>
          <meta content='width=device-width, initial-scale=1' name='viewport'>
          <meta content='telephone=no' name='format-detection'>
          <title>Payement de loyer</title><!--[if (mso 16)]>
            <style type='text/css'> 
           a {text-decoration: none;}
          </style>
           <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>" +
        <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type='text/css'>
        #outlook a {
          padding:0;
        }
        .ExternalClass {
         width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
        line-height:100%;
        }
        .es-button {
        mso-style-priority:100!important;
        text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
        color:inherit!important;
        text-decoration:none!important;
        font-size:inherit!important;
        font-family:inherit!important;
        font-weight:inherit!important;
         line-height:inherit!important;
        }
         .es-desk-hidden {
           display:none;
           float:left;
          overflow:hidden;
         width:0;
          max-height:0;
          line-height:0;
           mso-hide:all;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class='gmail-fix'] { display:none!important } .es-m-txt-c { text-align:center!important } .es-m-txt-r { text-align:right!important } .es-m-txt-l { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; padding:10px 0px 10px 0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social td { display:inline-block!important } table.es-social { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
         @media screen and (max-width:384px) {.mail-message-content { width:414px!important } }
          </style>
           </head>
           <body style='width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0'>
            <div dir='ltr' class='es-wrapper-color' lang='fr' style='background-color:#CCCCCC'><!--[if gte mso 9]>
                <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
                <v:fill type='tile' color='#cccccc'></v:fill>
               </v:background>
             <![endif]-->
           <table class='es-wrapper' width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#CCCCCC'>
             <tr style='border-collapse:collapse'>
              <td valign='top' style='padding:0;Margin:0'>
               <table cellpadding='0' cellspacing='0' class='es-header' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-header-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:580px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt='Smart home logo' title='Smart home logo' width='109' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr style='border-collapse:collapse'>
                      <td style='padding:0;Margin:0;padding-left:5px;padding-right:5px;background-color:#4a7eb0' bgcolor='#4a7eb0' align='left'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:590px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td style='padding:0;Margin:0'>
                               <table class='es-menu' width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr class='links' style='border-collapse:collapse'>
                                  <td style='Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0' width='100%' bgcolor='transparent' align='center'><a style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#ffffff;font-size:14px' href='https://viewstripo.email'></a></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table class='es-content' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-content-body' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px' cellspacing='0' cellpadding='0' bgcolor='#ffffff' align='center' role='none'>
                     <tr style='border-collapse:collapse'>
                      <td align='left' style='Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px'>
                       <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                         <tr style='border-collapse:collapse'>
                          <td valign='top' align='center' style='padding:0;Margin:0;width:520px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><h1 style='Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#333333'>Bienvenue chez MBAAZA</h1></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-top:5px;padding-bottom:20px;font-size:0'>
                               <table width='5%' height='100%' cellspacing='0' cellpadding='0' border='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td style='padding:0;Margin:0;border-bottom:2px solid #999999;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px'></td>
                                 </tr>
                               </table></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px'>Cher(e) requérant(e),</p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                                <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Nous avons bien pris en compte votre demande de recherche de bien chez MBAAZA et sommes enchantés de vous compter parmi nos requêteurs.
                              </tr>
                              <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px'>Voici un récapitulatif de vos critères de recherche :
                                      &nbsp;&nbsp;:&nbsp;</p><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Code requête : <strong> ${codeRequeteGen}
                                      </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nom et prénoms du requerant : <strong> ${nomRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N° de teléphone du requerant : <strong> ${contactRequeteur}
                                   </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Catégorie : <strong> ${categorieRequete}
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Type de bien : <strong> ${typeRequete} 
                           
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Localisation souhaitée :${infoLocalisation} <strong> 
                                 </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Critères de choix : <strong> ${infoCritere}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Préférence  : <strong> ${souhait}   </strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous vous invitons à nous contacter pour toute question ou demande supplémentaire. Notre équipe est là pour vous aider à trouver le bien parfait correspondant à vos attentes.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>N'hésitez pas à rejoindre notre communauté WhatsApp en cliquant sur le lien ci-dessous.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'><a href="https://chat.whatsapp.com/LftVANSyEUpFAyyofkxFpQ" target="_blank" class="link">
                                  [Cliquez ici pour rejoindre notre communauté WhatsApp]
                                  </a></strong></p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Nous restons à votre entière disposition pour toute demande ou information complémentaire.</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>Bien à vous,</p>
                                </strong></p> <p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ff8c00;font-size:20px'>L'équipe de MBAAZA </strong></p>
                              </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table>
               <table cellpadding='0' cellspacing='0' class='es-footer' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top'>
                 <tr style='border-collapse:collapse'>
                  <td align='center' style='padding:0;Margin:0'>
                   <table class='es-footer-body' cellspacing='0' cellpadding='0' align='center' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#EFEFEF;width:600px'>
                    <tr style='border-collapse:collapse'>
                      <td align='left' style='padding:20px;Margin:0'><!--[if mso]><table style='width:560px' cellpadding='0' cellspacing='0'><tr><td style='width:194px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:174px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-p0l' align='left' style='padding:0;Margin:0;padding-bottom:10px;font-size:0px'><a href='https://www.mbaaza.com' target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px'><img src='https://www.mbaaza.com/assets/img/logo.png' alt width='103' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></a></td>
                             </tr>
                           </table></td>
                          <td class='es-hidden' style='padding:0;Margin:0;width:20px'></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:173px'><![endif]-->
                       <table class='es-left' cellspacing='0' cellpadding='0' align='left' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td align='center' style='padding:0;Margin:0;display:none'></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td><td style='width:20px'></td><td style='width:173px'><![endif]-->
                       <table class='es-right' cellspacing='0' cellpadding='0' align='right' role='none' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right'>
                         <tr style='border-collapse:collapse'>
                          <td class='es-m-p0r es-m-p20b' align='center' style='padding:0;Margin:0;width:173px'>
                           <table width='100%' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                             <tr style='border-collapse:collapse'>
                              <td esdev-links-color='#333333' align='left' class='es-m-txt-с es-m-txt-l' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>+225 07 79 706 401<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td class='es-m-txt-с' esdev-links-color='#333333' align='left' style='padding:0;Margin:0;padding-bottom:10px'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#333333;font-size:14px'>info@mbaaza.com<br></p></td>
                             </tr>
                             <tr style='border-collapse:collapse'>
                              <td align='left' style='padding:0;Margin:0;font-size:0'>
                               <table class='es-table-not-adapt es-social' cellspacing='0' cellpadding='0' role='presentation' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px'>
                                 <tr style='border-collapse:collapse'>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Twitter' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png' alt='Tw' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Facebook' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png' alt='Fb' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0;padding-right:10px'><img title='Youtube' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png' alt='Yt' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                  <td valign='top' align='center' style='padding:0;Margin:0'><img title='Vkontakte' src='https://ebsnlnd.stripocdn.email/content/assets/img/social-icons/circle-colored/vk-circle-colored.png' alt='Vk' width='24' height='24' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic'></td>
                                 </tr>
                               </table></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table><!--[if mso]></td></tr></table><![endif]--></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
          </div>
         </body>
        </html>`,
    };

    try {
      const transport = await this.transporter();
      await transport.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

}
