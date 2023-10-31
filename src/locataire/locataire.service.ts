import { Injectable } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { AjoutLocataireDto } from './Dto/ajoutLocataireDto';
import { Repository } from 'typeorm';
import { LocataireEntity } from './locataire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BailleurService } from 'src/bailleur/bailleur.service';
import { ProprieteController } from 'src/propriete/propriete.controller';
import { ProprieteService } from 'src/propriete/propriete.service';


@Injectable()
export class LocataireService {

    constructor(
        @InjectRepository(LocataireEntity)
        private readonly locataireRepository: Repository<LocataireEntity>,
        private bailleurService: BailleurService,
        private proprieteService: ProprieteService,
        private readonly configService: ConfigService,
    ) { }


 /*   async getlocatairesbyBailleur(userId: any, bailleurId: number) {
        const RetB = await this.bailleurService.getOne(userId, bailleurId)

        const ret = await this.locataireRepository.find(
            {
                relations: {propriete: true},
                where: {bailleur: RetB.data}
            }
            );
        return { data: RetB };
    }*/

    async getAll() {
        const ret = await this.locataireRepository.find({
            relations: {
                bailleur: true,
                propriete: true,
            },
            order: 
                {
                    locataireNom: 'ASC',
                },
            
        });
        return { data: ret };
    }

    async getOne(userId: number, locataireId: number) {
        const ret = await this.locataireRepository.findOne({
            relations: {bailleur: true, propriete: true},
            where: { locataireId },
        });
        return { data: ret };
    }

    async getOneByReference(ref: string) {
        const ret = await this.locataireRepository.findOne({
            relations: {bailleur: true, propriete: true},
            where: { locataireRef: ref },
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
const bail = await this.bailleurService.getOne(userId, bailleurId)
const prop = await this.proprieteService.getOneByCode(userId, proprieteCode)

        let locataireE = new LocataireEntity
        locataireE = {
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
            bailleur: bail.data,
            propriete: prop.data
        }
        const ret = await this.locataireRepository.save(locataireE);
        return { data: ret };
    }
/*
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




    */
}
