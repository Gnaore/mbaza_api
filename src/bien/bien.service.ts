import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaserv/prisma.service';
import { AjoutBienDto } from './Dto/ajoutBienDto';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BienService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async ajouteBien(userId: number, ajoutBienDto: AjoutBienDto) {
    const {
      bienId,
      bienAdresse,
      bienCategorie,
      bienCommuneQuartier,
      bienContactBailleur,
      bienContrat,
      bienDescription,
      bienImage,
      bienLibelle,
      bienNbrePiece,
      bienNomBailleur,
      bienPrix,
      bienSurface,
      bienVille,
      typebienId,
    } = ajoutBienDto;

    //Creation de la reference
    const index = bienNomBailleur.substring(0, 2);
    const codeotp = speakeasy.totp({
      secret: this.configService.get('OTP_CODE'),
      digits: 6,
      encoding: 'base32',
    });
    const reference = codeotp + index;

    //Ajout à la base
    const ret = await this.prismaService.bien.create({
      data: {
        bienId: undefined,
        bienAdresse,
        bienCategorie,
        bienCommuneQuartier,
        bienContactBailleur,
        bienContrat,
        bienDescription,
        bienImage,
        bienLibelle,
        bienNbrePiece,
        bienNomBailleur,
        bienPrix,
        bienSurface,
        bienVille,
        typebienId,
        bienReference: reference,
      },
    });
    return { data: ret };
  }

  async modifiBien(userId: number, ajoutBienDto: AjoutBienDto) {
    const {
      bienId,
      bienAdresse,
      bienCategorie,
      bienCommuneQuartier,
      bienContactBailleur,
      bienContrat,
      bienDescription,
      bienImage,
      bienLibelle,
      bienNbrePiece,
      bienNomBailleur,
      bienPrix,
      bienSurface,
      bienVille,
      typebienId,
    } = ajoutBienDto;
    const ret = await this.prismaService.bien.update({
      where: { bienId },
      data: {
        bienAdresse,
        bienCategorie,
        bienCommuneQuartier,
        bienContactBailleur,
        bienContrat,
        bienDescription,
        bienImage,
        bienLibelle,
        bienNbrePiece,
        bienNomBailleur,
        bienPrix,
        bienSurface,
        bienVille,
        typebienId,
      },
    });
    return { data: ret };
  }

  async supone(userId: any, bienId: number) {
    const ret = await this.prismaService.bien.delete({
      where: { bienId },
    });
    return { data: ret };
  }

  async getAll() {
    const ret = await this.prismaService.bien.findMany({
      include: {
        typebien: {},
      },
      orderBy: [
        {
          bienLibelle: 'asc',
        },
      ],
    });
    return { data: ret };
  }

  async getOne(userId: number, bienId: number) {
    const ret = await this.prismaService.bien.findUnique({
      where: { bienId },
    });
    return { data: ret };
  }
}
