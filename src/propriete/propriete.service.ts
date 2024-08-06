import { Injectable } from '@nestjs/common';
import { ModifProprieteDto } from './Dto/modifProprieteDto';
import { AjoutProprieteDto } from './Dto/ajoutProprieteDto';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { ProprieteEntity } from './propriete.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BailleurService } from 'src/bailleur/bailleur.service';
import { TypebienService } from 'src/typebien/typebien.service';

@Injectable()
export class ProprieteService {
  constructor(
    @InjectRepository(ProprieteEntity)
    private proprieteRepository: Repository<ProprieteEntity>,
    private configService: ConfigService,
    private bailleurService: BailleurService,
    private typebienService: TypebienService
  ) {}

  async getAll() {
    const ret = await this.proprieteRepository.find({
      relations:{
        bailleur: true,
        typebien: true
      } ,
      order: {
        proprieteAdresse: 'ASC',
      }
    });
    return { data: ret };
  }

  async getOne(userId: number, proprieteId: number) {
    const ret = await this.proprieteRepository.findOne({ 
      where: {proprieteId},
      relations:{
        bailleur: true,
        typebien: true
      } 
    });
    return { data: ret };
  }

  async getOneByCode(userId: number, proprieteCode: string) {
    const ret = await this.proprieteRepository.findOne({
      relations: {
        bailleur: true,
        typebien: true,
        locataire: true
      },
      where: { 
        proprieteCode
      },
      order:{
        typebien:{
          libelleTypebien: 'ASC'
        },
        proprieteCode: 'ASC',
        bailleur:{
          bailleurNomPrenoms: 'ASC'
        }
      }
    });
    return { data: ret };
  }

  async getAllpropbyBailleur(userId: number, bailleurId: number) {
    const ret = await this.proprieteRepository.find({
      relations: {
        bailleur: true,
        typebien: true
      },
      where: {bailleur:{bailleurId}},
      order:{
        typebien:{libelleTypebien: 'ASC'},
        proprieteAnnee: 'ASC'
      }
    });
    return { data: ret };
  }


  
  async getAllpropDispobyBailleur(userId: number, bailleurId: number) {
    const ret = await this.proprieteRepository.find({
      relations: {
        bailleur: true,
        typebien: true
      },
      where: {bailleur:{bailleurId}, proprieteStatu: "Disponible" },
      order:{
        typebien:{libelleTypebien: 'ASC'},
        proprieteAnnee: 'ASC'
      }
    });
    return { data: ret };
  }

  async supone(userId: any, proprieteId: number) {
    try {
      const propeieteRem = await this.proprieteRepository.findOne({where:{proprieteId}})
      const ret = await this.proprieteRepository.remove(propeieteRem);
      return { data: ret };
    } catch (error) {
      return { data: error };
    }
   
  }

  async modifiPropriete(userId: number, modifProprieteDto: ModifProprieteDto) {
    const {
      proprieteId,
      proprieteAdresse,
      proprieteAnnee,
      proprieteSurface,
      proprieteNbrEtage,
      proprieteNbrChambre,
      proprieteNbreSalleBain,
      proprieteDescription,
      proprieteStatu,
      proprietePrix,
      proprietePret,
      proprieteJardin,
      proprietePiscine,
      proprieteGarage,
      proprieteBalcon,
      proprieteChemine,
      proprieteClimatisation,
      proprieteEquipement,
      proprieteequipementdetails,
      proprieteLongitude,
      proprieteLatitude,
      proprieteQuartier,
      proprieteLienPhoto,
      bailleurId,
      typebienId,
    } = modifProprieteDto;
    const bailleurRec = await this.bailleurService.getOne(userId, bailleurId)
    const typebienRec = await this.typebienService.getOne(userId, typebienId)
    const ret = await this.proprieteRepository.update({proprieteId},
      {
       proprieteAdresse,
       proprieteAnnee,
       proprieteSurface,
       proprieteNbrEtage,
       proprieteNbrChambre,
       proprieteNbreSalleBain,
       proprieteDescription,
       proprieteStatu,
       proprietePrix,
       proprietePret,
       proprieteJardin,
       proprietePiscine,
       proprieteGarage,
       proprieteBalcon,
       proprieteChemine,
       proprieteClimatisation,
       proprieteEquipement,
       proprieteequipementdetails,
       proprieteLongitude,
       proprieteLatitude,
       proprieteQuartier,
       proprieteLienPhoto,
       bailleur: bailleurRec.data,
       typebien: typebienRec.data
     }
    );
    return { data: ret };
  }

  async modifiProprieteloue(proprieteCode: string) {
    const ret = await this.proprieteRepository.update({proprieteCode},
      {
       proprieteStatu: "Loue"
     }
    );
    return { data: ret };
  }

  async ajoutePropriete(userId: number, ajoutProprieteDto: AjoutProprieteDto) {
    const {
      proprieteAdresse,
      proprieteAnnee,
      proprieteSurface,
      proprieteNbrEtage,
      proprieteNbrChambre,
      proprieteNbreSalleBain,
      proprieteDescription,
      proprieteStatu,
      proprietePrix,
      proprietePret,
      proprieteJardin,
      proprietePiscine,
      proprieteGarage,
      proprieteBalcon,
      proprieteChemine,
      proprieteClimatisation,
      proprieteEquipement,
      proprieteequipementdetails,
      proprieteLongitude,
      proprieteLatitude,
      proprieteQuartier,
      proprieteLienPhoto,
      bailleurId,
      typebienId,
    } = ajoutProprieteDto;

    const codeotp = speakeasy.totp({
      secret: this.configService.get('OTP_CODE'),
      digits: 5,
      encoding: 'base32',
    });
    const propCode = `B-${bailleurId}` + '-' + codeotp;

    //Ajout à la base
    const bailleurRec = await this.bailleurService.getOne(userId, bailleurId)
    const typebienRec = await this.typebienService.getOne(userId, typebienId)

    const ret = await this.proprieteRepository.save({
        proprieteId: undefined,
        proprieteCode: propCode,
        proprieteAdresse,
        proprieteAnnee,
        proprieteSurface,
        proprieteNbrEtage,
        proprieteNbrChambre,
        proprieteNbreSalleBain,
        proprieteDescription,
        proprieteStatu,
        proprietePrix,
        proprietePret,
        proprieteJardin,
        proprietePiscine,
        proprieteGarage,
        proprieteBalcon,
        proprieteChemine,
        proprieteClimatisation,
        proprieteEquipement,
        proprieteequipementdetails,
        proprieteLongitude,
        proprieteLatitude,
        proprieteQuartier,
        proprieteLienPhoto,
        bailleur:bailleurRec.data,
        typebien: typebienRec.data
    });
    return { data: ret };
  }


  async modifstatutfincontrat(proprieteCode: any ) {
    const ret = await this.proprieteRepository.update({ proprieteCode }, { proprieteStatu: 'Disponible' });
    return { data: ret };
  }

}
