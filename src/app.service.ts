import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   //EN PROD
   //static urlg = 'https://mbaza-eb3d8ec0412e.herokuapp.com/'

   static urlg = 'https://apimbaza.mbaaza.com/'

   static urlsms = 'https://rapidinfos.com/api/api_http.php'

   static ulrQrcode = 'mbaaza.com/pay-onlineqr/'

  getHello(): string {
    return 'Hello World! Tout ce passe Bien';
  }
    //**en dev mac
    //static urlg = 'http://localhost:3000/'

 
  
}
