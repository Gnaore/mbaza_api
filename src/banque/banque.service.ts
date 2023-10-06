import { Injectable } from '@nestjs/common';
import { AjoutBanqueDto } from './Dto/ajoutBanqueDto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BanqueService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

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

    //Ajout à la base
    const ret = await this.prismaService.banque.create({
      data: {
        banqueCode: code,
        libelleBanque,
        sigleBanque,
        paysId,
        contactBanque,
      },
    });

    return { data: ret };
  }

  async modifiBanque(userId: number, ajoutBanqueDto: AjoutBanqueDto) {
    const { banqueId, libelleBanque, sigleBanque, paysId, contactBanque } =
      ajoutBanqueDto;
    const ret = await this.prismaService.banque.update({
      where: { banqueId },
      data: {
        sigleBanque,
        paysId,
        libelleBanque,
        contactBanque,
      },
    });
    return { data: ret };
  }

  async supone(userId: any, banqueId: number) {
    const ret = await this.prismaService.banque.delete({ where: { banqueId } });
    return { data: ret };
  }

  async getAll() {
    const ret = await this.prismaService.banque.findMany({
      include: {
        pays: {},
      },
    });
    return { data: ret };
  }

  async getOne(userId: number, banqueId: number) {
    const ret = await this.prismaService.banque.findUnique({
      where: { banqueId },
    });
    return { data: ret };
  }
}
