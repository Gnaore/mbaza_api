import { Injectable } from '@nestjs/common';
import { AjoutLocataireDto } from './Dto/ajoutLocataireDto';
import { Repository } from 'typeorm';
import { LocataireEntity } from './locataire.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BailleurService } from 'src/bailleur/bailleur.service';
import { ProprieteService } from 'src/propriete/propriete.service';
import { FinContratDto } from './Dto/finContratDto';
import { UserService } from 'src/user/user.service';
import { ProvisionService } from 'src/provision/provision.service';


@Injectable()
export class LocataireService {

    constructor(
        @InjectRepository(LocataireEntity)
        private readonly locataireRepository: Repository<LocataireEntity>,
        private bailleurService: BailleurService,
        private proprieteService: ProprieteService,
        private readonly userService: UserService,
        private provisionService: ProvisionService
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
            relations: { bailleur: true, propriete: true },
            where: { locataireId },
        });
        return { data: ret };
    }

    async getlocatairesbyBailleur(userId: number, bailleurId: number) {
        const ret = await this.locataireRepository.find({
            relations: { bailleur: true },
            where: { bailleur: { bailleurId } },
        });
        return { data: ret };
    }

    async getOneByReference(ref: string) {
        const ret = await this.locataireRepository.findOne({
            relations: { bailleur: true, propriete: true },
            where: { locataireRef: ref },
        });
        return { data: ret };
    }

    async getProvision(locataireRef: string) {
        const ret = await this.locataireRepository.findOne({
            where: { locataireRef: locataireRef },
        });
        if (ret) {
            return await this.provisionService.getProvisionByRefLocataire(ret.locataireId);
        } else {
            return { data: "Impossible de retrouver les infos du Locataire" }
        }

    }


    async getOneByEmail(email: string) {
        const ret = await this.locataireRepository.findOne({
            relations: {
                bailleur: true, propriete: {
                    typebien: true
                }
            },
            where: { locataireEmail: email },
        });
        return { data: ret };
    }



    async ajouteLocataire(userId: number, ajoutLocataireDto: AjoutLocataireDto) {
        const {
            locataireId,
            locataireBanque,
            locataireDatenais,
            locataireDateentre,
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
            proprieteCode,
            locataireQrcode,
            provisions,
            locataireCaution
        } = ajoutLocataireDto;

        //Creation de la reference
        /*const index = locataireNom.substring(0, 2);
        const codeotp = speakeasy.totp({
            secret: this.configService.get('OTP_CODE'),
            digits: 6,
            encoding: 'base32',
        });

        const indexCorrige = index.replace(new RegExp(' ', 'g'), 'L')

        const reference = codeotp + indexCorrige;*/

        //Ajout à la base
        const bail = await this.bailleurService.getOne(userId, bailleurId)
        const prop = await this.proprieteService.getOneByCode(userId, proprieteCode)

        let locataireE = new LocataireEntity
        locataireE = {
            locataireId: undefined,
            locataireBanque,
            locataireDatenais,
            locataireDateentre,
            locataireEmail,
            locataireEmailgarant,
            locataireNationalite,
            locataireNbrecharge,
            locataireNom,
            locataireNomgarant,
            locatairePhoto,
            locataireQrcode,
            locataireProfession,
            locataireRef,
            locataireSalaire,
            locataireSituationmatri,
            locataireTel,
            locataireTelgarant,
            locataireTypecontrat,
            locataireCaution,
            bailleur: bail.data,
            propriete: prop.data,
            provisions: undefined,
            createdAt: undefined,
            deletedAt: undefined,
            updatedAt: undefined
        }
        const ret = await this.locataireRepository.save(locataireE);
        if (ret) {
            const proploe = this.proprieteService.modifiProprieteloue(proprieteCode)
            const prov = this.provisionService.save(userId, provisions, ret)
        }
        return { data: ret };
    }



    async modifiLocataire(userId: number, ajoutLocataireDto: AjoutLocataireDto) {
        const {
            locataireId,
            locataireBanque,
            locataireDatenais,
            locataireDateentre,
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
            proprieteCode,
            locataireCaution
        } = ajoutLocataireDto;
        const ret = await this.locataireRepository.update({ locataireRef }, {
            locataireBanque,
            locataireDatenais,
            locataireDateentre,
            locataireEmail,
            locataireEmailgarant,
            locataireNationalite,
            locataireNbrecharge,
            locataireNom,
            locataireNomgarant,
            locatairePhoto,
            locataireProfession,
            locataireSalaire,
            locataireSituationmatri,
            locataireTel,
            locataireTelgarant,
            locataireTypecontrat,
            locataireCaution
        });
        return {
            data:
            {
                success: true,
                msg: ret
            }
        };
    }
    /* 
         async supone(userId: any, locataireId: number) {
             const ret = await this.prismaService.locataire.delete({
                 where: { locataireId },
             });
             return { data: ret };
         }*/


    /*    async fincontrat(locataireRef: any ) {
            const ret = await this.locataireRepository.update({ locataireRef }, { propriete: null, bailleur: null });
            return { data: ret };
          }*/


    async fincontrat(userId: number, finContratDto: FinContratDto) {
        const {
            locataireRef,
            locataireEmail,
            proprieteCode,
        } = finContratDto;

        //Modif user
        const userR = await this.userService.modifstatutfincontrat(locataireEmail)
        if (userR) {
            //Modif propriete
            const propeieteR = await this.proprieteService.modifstatutfincontrat(proprieteCode)
            if (propeieteR) {
                const ret = await this.locataireRepository.update({ locataireRef }, { propriete: null, bailleur: null, locataireEmail: null });
                return {
                    data:
                    {
                        success: true,
                        msg: ret
                    }

                };
            } else {
                return {
                    data:
                    {
                        success: false,
                        msg: "Impossible de mettre les infos de la propriété à jour"
                    }

                };
            }
        } else {
            return {
                data:
                {
                    success: false,
                    msg: "Impossible de mettre les infos de l'utilisateur à jour"
                }

            };
        }


    }


}
