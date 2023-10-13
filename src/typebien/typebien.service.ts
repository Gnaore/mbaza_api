import { AjoutTypebienDto } from './Dto/ajoutTypebienDto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypebienService {
  /*constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async ajouteTypebien(userId: number, ajoutTypebienDto: AjoutTypebienDto) {
    const { typebienId, libelleTypebien } = ajoutTypebienDto;

    //Ajout à la base
    const ret = await this.prismaService.typebien.create({
      data: {
        libelleTypebien,
      },
    });

    return { data: ret };
  }

  async modifiTypebien(userId: number, ajoutTypebienDto: AjoutTypebienDto) {
    const { typebienId, libelleTypebien } = ajoutTypebienDto;
    const ret = await this.prismaService.typebien.update({
      where: { typebienId },
      data: {
        libelleTypebien,
      },
    });
    return { data: ret };
  }

  async supone(userId: any, typebienId: number) {
    const ret = await this.prismaService.typebien.delete({
      where: { typebienId },
    });
    return { data: ret };
  }

  async getAll() {
    const ret = await this.prismaService.typebien.findMany({
      orderBy: [
        {
          libelleTypebien: 'asc',
        },
      ],
    });
    return { data: ret };
  }

  async getOne(userId: number, typebienId: number) {
    const ret = await this.prismaService.typebien.findUnique({
      where: { typebienId },
    });
    return { data: ret };
  }*/
}
