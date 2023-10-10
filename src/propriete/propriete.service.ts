import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaserv/prisma.service';
import { ModifProprieteDto } from './Dto/modifProprieteDto';
import { AjoutProprieteDto } from './Dto/ajoutProprieteDto';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProprieteService {
  constructor(
    private prismaService: PrismaService,
    private configService: ConfigService,
  ) {}

  async getAll() {
    const ret = await this.prismaService.propriete.findMany({
      include: {
        bailleur: {},
        typebien: {},
      },
      orderBy: [{ typebienId: 'asc' }],
    });
    return { data: ret };
  }

  async getOne(userId: number, proprieteId: number) {
    const ret = await this.prismaService.propriete.findUnique({
      where: { proprieteId },
      include: {
        bailleur: {},
        typebien: {},
      },
    });
    return { data: ret };
  }

  async getAllpropbyBailleur(userId: number, bailleurId: number) {
    const ret = await this.prismaService.propriete.findMany({
      where: {
        bailleurId,
      },
      include: {
        typebien: {},
      },
      orderBy: [{ proprieteAnnee: 'asc' }],
    });
    return { data: ret };
  }

  async supone(userId: any, proprieteId: number) {
    const ret = await this.prismaService.propriete.delete({
      where: { proprieteId },
    });
    return { data: ret };
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
    const ret = await this.prismaService.propriete.update({
      where: { proprieteId },
      data: {
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
      },
    });
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
    const ret = await this.prismaService.propriete.create({
      data: {
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
        bailleurId,
        typebienId,
      },
    });
    return { data: ret };
  }
}
