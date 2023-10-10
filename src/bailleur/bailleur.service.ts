import { Injectable } from '@nestjs/common';
import { AjoutBailleurDto } from './Dto/ajoutBailleurDto';
import { PrismaService } from 'src/prismaserv/prisma.service';
import { ModifBailleurDto } from './Dto/modifBailleurDto';

@Injectable()
export class BailleurService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAll() {
    const ret = await this.prismaService.bailleur.findMany({
      include: {
        Proprietes: {},
      },
      orderBy: [{ bailleurNomPrenoms: 'asc' }],
    });
    return { data: ret };
  }

  async getOne(userId: number, bailleurId: number) {
    const ret = await this.prismaService.bailleur.findUnique({
      where: { bailleurId },
      include: {
        banque: {
          include: {
            pays: {},
          },
        },
      },
    });
    return { data: ret };
  }

  async supone(userId: any, bailleurId: number) {
    const ret = await this.prismaService.bailleur.delete({
      where: { bailleurId },
    });
    return { data: ret };
  }

  async modifiBailleur(userId: number, modifBailleurDto: ModifBailleurDto) {
    const {
      bailleurId,
      bailleurNomPrenoms,
      bailleurTelephone,
      bailleurAdresse,
      bailleurEmail,
      bailleurDateNaissance,
      bailleurNumero,
      banqueId,
      bailleurNumCompte,
      bailleurRevenu,
      bailleurTaux,
      bailleurPersUrgence,
      bailleurTelUrgence,
      bailleurRelationUrgence,
      bailleurlienCNI,
      bailleurLienPhoto,
    } = modifBailleurDto;
    const ret = await this.prismaService.bailleur.update({
      where: { bailleurId },
      data: {
        bailleurNomPrenoms,
        bailleurTelephone,
        bailleurAdresse,
        bailleurEmail,
        bailleurDateNaissance,
        bailleurNumero,
        banqueId,
        bailleurNumCompte,
        bailleurRevenu,
        bailleurTaux,
        bailleurPersUrgence,
        bailleurTelUrgence,
        bailleurRelationUrgence,
        bailleurlienCNI,
        bailleurLienPhoto,
      },
    });
    return { data: ret };
  }

  async ajouteBailleur(userId: number, ajoutBailleurDto: AjoutBailleurDto) {
    const {
      bailleurNomPrenoms,
      bailleurTelephone,
      bailleurAdresse,
      bailleurEmail,
      bailleurDateNaissance,
      bailleurNumero,
      banqueId,
      bailleurNumCompte,
      bailleurRevenu,
      bailleurTaux,
      bailleurPersUrgence,
      bailleurTelUrgence,
      bailleurRelationUrgence,
      bailleurlienCNI,
      bailleurLienPhoto,
    } = ajoutBailleurDto;

    //Ajout à la base
    const ret = await this.prismaService.bailleur.create({
      data: {
        bailleurId: undefined,
        bailleurNomPrenoms,
        bailleurTelephone,
        bailleurAdresse,
        bailleurEmail,
        bailleurDateNaissance,
        bailleurNumero,
        banqueId,
        bailleurNumCompte,
        bailleurRevenu,
        bailleurTaux,
        bailleurPersUrgence,
        bailleurTelUrgence,
        bailleurRelationUrgence,
        bailleurlienCNI,
        bailleurLienPhoto,
      },
    });
    return { data: ret };
  }
}
