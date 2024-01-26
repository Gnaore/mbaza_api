import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
    //**en dev mac
    //static urlg = 'http://localhost:3000/'

    //EN PROD
    static urlg = 'https://mbaza-eb3d8ec0412e.herokuapp.com/'
  
}
