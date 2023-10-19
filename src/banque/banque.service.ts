import { Injectable } from '@nestjs/common';
import { AjoutBanqueDto } from './Dto/ajoutBanqueDto';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { BanqueEntity } from './banque.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaysEntity } from 'src/pays/pays.entity';
import { PaysService } from 'src/pays/pays.service';

@Injectable()
export class BanqueService {
  constructor(
    @InjectRepository(BanqueEntity)
    private readonly banqueRepository: Repository<BanqueEntity>,
    private  paysService: PaysService,
    private readonly configService: ConfigService,
  ) { }

   async ajouteBanque(userId: number, ajoutBanqueDto: AjoutBanqueDto) {
     const { banqueId, libelleBanque, sigleBanque, paysId, contactBanque } =
       ajoutBanqueDto;
 
     //Creation du code Banque
     const index = libelleBanque.substring(0, 2);
     const codeotp = speakeasy.totp({
       secret: this.configService.get('OTP_CODE'),
       digits: 6,
       encoding: 'base32',
     });
     const code = codeotp + index;

     //recherche du pays
     const paysR = await this.paysService.getOne(userId, paysId)

     //Ajout à la base
     const banqueData = new BanqueEntity
     banqueData.banqueId = undefined
     banqueData.contactBanque = contactBanque
     banqueData.libelleBanque = libelleBanque
     banqueData.sigleBanque = sigleBanque
     banqueData.pays = paysR.data
     banqueData.banqueCode = code
     const ret = await this.banqueRepository.save(banqueData);
 
     return { data: ret };
   }

   async modifiBanque(userId: number, ajoutBanqueDto: AjoutBanqueDto) {
    
     const { banqueId, libelleBanque, sigleBanque, paysId, contactBanque } =
       ajoutBanqueDto;
       const paysR = await this.paysService.getOne(userId, paysId)
     const ret = await this.banqueRepository.update({banqueId}, {
      libelleBanque,
      sigleBanque,
      contactBanque,
      pays: paysR.data
     });
     return { data: ret };
   }
  

   async supone(userId: any, banqueId: number) {
    const banqueS = await this.banqueRepository.find({where: {banqueId}})
     const ret = await this.banqueRepository.remove(banqueS);
     return { data: ret };
   }
 

  async getOne(userId: number, banqueId: number) {
    const ret = await this.banqueRepository.find({
      where: { banqueId },
      relations: ['pays'],
      select: {
        pays: {
          paysId: true,
          libellePays: true,
          codePays:true
        }
      }
    });
    return { data: ret };
  }

  async getAll() {
    const ret = await this.banqueRepository.find({
      relations: ['pays'],
      select: {
        pays: {
          paysId: true,
          libellePays: true,
          codePays:true
        }
      }
    });
    return { data: ret };
  }
}
