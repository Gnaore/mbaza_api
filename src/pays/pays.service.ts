import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { AjoutPaysDto } from './Dto/ajoutPaysDto';

@Injectable()
export class PaysService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async ajoutePays(userId: number, ajoutPaysDto: AjoutPaysDto) {
    const { paysId, libellePays, codePays } = ajoutPaysDto;

    //Ajout à la base
    const ret = await this.prismaService.pays.create({
      data: {
        codePays,
        libellePays,
      },
    });

    return { data: ret };
  }

  async modifiPays(userId: number, ajoutPaysDto: AjoutPaysDto) {
    const { paysId, libellePays, codePays } = ajoutPaysDto;
    const ret = await this.prismaService.pays.update({
      where: { paysId },
      data: {
        libellePays,
        codePays,
      },
    });
    return { data: ret };
  }

  async supone(userId: any, paysId: number) {
    const ret = await this.prismaService.pays.delete({ where: { paysId } });
    return { data: ret };
  }

  async getAll() {
    const ret = await this.prismaService.pays.findMany({
      orderBy: [
        {
          libellePays: 'asc',
        },
      ],
    });
    return { data: ret };
  }

  async getOne(userId: number, paysId: number) {
    const ret = await this.prismaService.pays.findUnique({
      where: { paysId },
    });
    return { data: ret };
  }
}
