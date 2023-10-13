import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { AjoutLocataireDto } from './Dto/ajoutLocataireDto';


@Injectable()
export class LocataireService {

  /*  constructor(
        private readonly prismaService: PrismaService,
        private readonly configService: ConfigService,
    ) { }


    async getlocatairesbyBailleur(userId: any, bailleurId: number) {
        const ret = await this.prismaService.locataire.findMany({
            where: { bailleurId },
        });
        return { data: ret };
    }

    async ajouteLocataire(userId: number, ajoutLocataireDto: AjoutLocataireDto) {
        const {
            locataireId,
            locataireBanque,
            locataireDatenais,
            locataireEmail,
            locataireEmailgarant,
            locataireNationalite,
            locataireNbrecharge,
            locataireNom,
            locataireNomgarant,
            locatairePhoto,
            locataireProfession,
            locataireRef,
            locataireSalaire,
            locataireSituationmatri,
            locataireTel,
            locataireTelgarant,
            locataireTypecontrat,
            bailleurId,
            proprieteCode
        } = ajoutLocataireDto;

        //Creation de la reference
        const index = locataireNom.substring(0, 2);
        const codeotp = speakeasy.totp({
            secret: this.configService.get('OTP_CODE'),
            digits: 6,
            encoding: 'base32',
        });
        const reference = codeotp + index;

        //Ajout à la base
        const ret = await this.prismaService.locataire.create({
            data: {
                locataireId: undefined,
                locataireBanque,
                locataireDatenais,
                locataireEmail,
                locataireEmailgarant,
                locataireNationalite,
                locataireNbrecharge,
                locataireNom,
                locataireNomgarant,
                locatairePhoto,
                locataireProfession,
                locataireRef: reference,
                locataireSalaire,
                locataireSituationmatri,
                locataireTel,
                locataireTelgarant,
                locataireTypecontrat,
                bailleurId,
                proprieteCode
            },
        });
        return { data: ret };
    }

    async modifiLocataire(userId: number, ajoutLocataireDto: AjoutLocataireDto) {
        const {
            locataireId,
            locataireBanque,
            locataireDatenais,
            locataireEmail,
            locataireEmailgarant,
            locataireNationalite,
            locataireNbrecharge,
            locataireNom,
            locataireNomgarant,
            locatairePhoto,
            locataireProfession,
            locataireRef,
            locataireSalaire,
            locataireSituationmatri,
            locataireTel,
            locataireTelgarant,
            locataireTypecontrat,
            bailleurId,
            proprieteCode
        } = ajoutLocataireDto;
        const ret = await this.prismaService.locataire.update({
            where: { locataireId },
            data: {
                locataireBanque,
                locataireDatenais,
                locataireEmail,
                locataireEmailgarant,
                locataireNationalite,
                locataireNbrecharge,
                locataireNom,
                locataireNomgarant,
                locatairePhoto,
                locataireProfession,
                locataireRef,
                locataireSalaire,
                locataireSituationmatri,
                locataireTel,
                locataireTelgarant,
                locataireTypecontrat,
                bailleurId,
                proprieteCode
            },
        });
        return { data: ret };
    }

    async supone(userId: any, locataireId: number) {
        const ret = await this.prismaService.locataire.delete({
            where: { locataireId },
        });
        return { data: ret };
    }

    async getAll() {
        const ret = await this.prismaService.locataire.findMany({
            include: {
                bailleur: {},
                propriete: {},
            },
            orderBy: [
                {
                    locataireNom: 'asc',
                },
            ],
        });
        return { data: ret };
    }

    async getOne(userId: number, locataireId: number) {
        const ret = await this.prismaService.locataire.findUnique({
            where: { locataireId },
        });
        return { data: ret };
    }*/
}
