import { Inject, Injectable, UnauthorizedException, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequeteEntity } from './entities/requete.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddRequeteDto } from './dto/add-requete.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class RequeteService {
    constructor(
        @InjectRepository(RequeteEntity)
        private readonly requeteRepository: Repository<RequeteEntity>,
        private readonly mailerService: MailerService,
    ) { }

    private async generateRequeteCode() {
        const latestSite = await this.requeteRepository.find({
            order: { idRequete: 'DESC' },
            take: 1,
        });

        if (latestSite.length === 0) {
            return 'REQ-0001';
        }

        const latestCode = latestSite[0].codeRequete;

        const latestNumber = parseInt(latestCode.split('-')[1]);

        const newNumber = latestNumber + 1;
        const inc = newNumber.toString().padStart(4, '0');
        return `REQ-${inc}`;
    }
    async create(addRequeteDto: AddRequeteDto) {
        try {

            const codeRequeteGen = await this.generateRequeteCode();
            const {
              categorieRequete,
              typeRequete,
              infoLocalisation,
              infoCritere,
              souhait,
              nomComplet,
              numeroTelephpne,
              adresseMail,
              montantFin,
              montantDebut,
              superficie,
              bienMeubleDatefin,
              bienMeubleDatedebut,
              nombrePiece,
              nombrePlace,
            } = addRequeteDto;

            

            const existingRequete = await this.requeteRepository.findOne({
                where: { codeRequete: codeRequeteGen },
            });

            if (existingRequete) {
                throw new Error('Entrée en double pour le demandeur et le codeRequete');
            }
            else {
                if (categorieRequete === 'LOCATION') {

                    if (typeRequete === 'RESIDENCE') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          bienMeubleDatedebut: bienMeubleDatedebut,
                          bienMeubleDatefin: bienMeubleDatefin,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          nombrePiece: nombrePiece,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne : numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailResidance(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailResidenceToMbaza(to, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                        //Pour IsbackConcepte
                        const toisBackc = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailResidenceToMbazaIsbackConcepte(toisBackc, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requete, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    }
                    else if (typeRequete === 'SALLE DE RECEPTION' || typeRequete === 'ESPACE PISCINE') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          bienMeubleDatedebut: bienMeubleDatedebut,
                          bienMeubleDatefin: bienMeubleDatefin,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          nombrePlace: nombrePlace,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailReceptepicine(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePlace);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailDuoToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                        // Pour IsbackConcepte
                        const toisback = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailDuoToMbazaIsbackConcepte(toisback, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requete, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    } else if (typeRequete === 'MAISON DUPLEX' || typeRequete === 'APPARTEMENT' || typeRequete === 'CHALET') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          nombrePiece: nombrePiece,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailTrio(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailTrioToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, montantDebut, montantFin);
                        
                        //Pour isback
                        const toisbac = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailTrioToMbazaIsbackConcepte(toisbac, emailSubjects, codeRequeteGen,nomComplet,numeroTelephpne,categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, montantDebut, montantFin);
                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requetes, // Retourne le requetur et sa requete
                            count: 1,

                        }

                    }
                    else if (typeRequete === 'TERRAIN') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          superficie: superficie,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailTerrain(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailTerrainToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie, montantDebut, montantFin);

                        const toisback = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailTerrainToMbazaIsbackConcepte(toisback, emailSubjects, codeRequeteGen,nomComplet,numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie, montantDebut, montantFin);


                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requetes, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    }
                    else {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMail(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailToMbaza(to, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);
                        
                        // Pour isback

                        const toisback = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailToMbazaIsbackConcepte(toisback, emailSubject, codeRequeteGen,nomComplet,numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait);

                        
                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requetes, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    }
                }
                else {

                    // if (typeRequete === 'RESIDENCE') {
                    //     const requete = this.requeteRepository.create({
                    //         codeRequete: codeRequeteGen,
                    //         categorieRequete: categorieRequete,
                    //         typeRequete: typeRequete,
                    //         montantDebut: montantDebut,
                    //         montantFin: montantFin,
                    //         nombrePiece: nombrePiece,
                    //         infoLocalisation: infoLocalisation,
                    //         infoCritere: infoCritere,
                    //         souhait: souhait,
                    //         requeteur: requeteur
                    //     });
                    //     const requetes = this.requeteRepository.save(requete);
                    //     // Envoyer un email au requeteur
                    //     const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                    //     await this.mailerService.sendMailResidance(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                    //     //await this.mailerService.sendMail(email, emailSubject, emailText);
                    //     const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                    //     const to = 'biensimmobiliers@mbaaza.com'
                    //     await this.mailerService.sendEmailResidenceToMbaza(to, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                    //     //Pour IsbackConcepte
                    //     const toisBackc = 'isbackconcept@mbaaza.com'
                    //     await this.mailerService.sendEmailResidenceToMbazaIsbackConcepte(toisBackc, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                    //     return {
                    //         statusCode: 200,
                    //         message: 'Opération terminée avec succès',
                    //         data: requete, // Retourne le requetur et sa requete
                    //         count: 1,

                    //     }
                    //  }

                    // else if (typeRequete === 'SALLE DE RECEPTION' || typeRequete === 'ESPACE PISCINE') {
                    //     const requete = this.requeteRepository.create({
                    //         codeRequete: codeRequeteGen,
                    //         categorieRequete: categorieRequete,
                    //         typeRequete: typeRequete,
                    //         montantDebut: montantDebut,
                    //         montantFin: montantFin,
                    //         nombrePlace: nombrePlace,
                    //         infoLocalisation: infoLocalisation,
                    //         infoCritere: infoCritere,
                    //         souhait: souhait,
                    //         requeteur: requeteur
                    //     });
                    //     const requetes = this.requeteRepository.save(requete);
                    //     // Envoyer un email au requeteur
                    //     const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                    //     await this.mailerService.sendMailReceptepicine(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePlace);

                    //     //await this.mailerService.sendMail(email, emailSubject, emailText);
                    //     const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                    //     const to = 'biensimmobiliers@mbaaza.com'
                    //     await this.mailerService.sendEmailDuoToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                    //     // Pour IsbackConcepte
                    //     const toisback = 'isbackconcept@mbaaza.com'
                    //     await this.mailerService.sendEmailDuoToMbazaIsbackConcepte(toisback, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, bienMeubleDatedebut, bienMeubleDatefin, montantDebut, montantFin);

                    //     return {
                    //         statusCode: 200,
                    //         message: 'Opération terminée avec succès',
                    //         data: requete, // Retourne le requetur et sa requete
                    //         count: 1,

                    //     }
                    // } 
                    if (typeRequete === 'MAISON DUPLEX' || typeRequete === 'APPARTEMENT' || typeRequete === 'CHALET') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          nombrePiece: nombrePiece,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailTrio(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailTrioToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, montantDebut, montantFin);

                        //Pour isback
                        const toisbac = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailTrioToMbazaIsbackConcepte(toisbac, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece, montantDebut, montantFin);
                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requete, // Retourne le requetur et sa requete
                            count: 1,

                        }

                    }
                    else if (typeRequete === 'TERRAIN') {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          superficie: superficie,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMailTerrain(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailTerrainToMbaza(to, emailSubjects, codeRequeteGen, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie, montantDebut, montantFin);

                        const toisback = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailTerrainToMbazaIsbackConcepte(toisback, emailSubjects, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, superficie, montantDebut, montantFin);


                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requete, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    }
                    else {
                        const requete = this.requeteRepository.create({
                          codeRequete: codeRequeteGen,
                          categorieRequete: categorieRequete,
                          typeRequete: typeRequete,
                          montantDebut: montantDebut,
                          montantFin: montantFin,
                          infoLocalisation: infoLocalisation,
                          infoCritere: infoCritere,
                          //souhait: souhait,
                          nomComplet: nomComplet,
                          numeroTelephpne: numeroTelephpne,
                          adresseMail: adresseMail,
                        });
                        const requetes = this.requeteRepository.save(requete);
                        // Envoyer un email au requeteur
                        const emailSubject = `Demande à propos d'un bien ${categorieRequete}`;

                        await this.mailerService.sendMail(adresseMail, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        //await this.mailerService.sendMail(email, emailSubject, emailText);
                        const emailSubjects = `Demande à propos d'un bien ${categorieRequete}`;

                        const to = 'biensimmobiliers@mbaaza.com'
                        await this.mailerService.sendEmailToMbaza(to, emailSubject, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait, nombrePiece);

                        // Pour isback

                        const toisback = 'isbackconcept@mbaaza.com'
                        await this.mailerService.sendEmailToMbazaIsbackConcepte(toisback, emailSubject, codeRequeteGen, nomComplet, numeroTelephpne, categorieRequete, typeRequete, infoLocalisation, infoCritere, souhait);


                        return {
                            statusCode: 200,
                            message: 'Opération terminée avec succès',
                            data: requete, // Retourne le requetur et sa requete
                            count: 1,

                        }
                    }
                }
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                message: error.message,
                data: null,
                count: 0,
            };
        }
    }

    async findRequeteByRequeteurId(idRequete: number) {
        try {

            if (!idRequete) {
              throw new UnauthorizedException(
                `Le requeteur n'est pas renseigné`,
              );
            } else {
              const requete = this.requeteRepository.findOneBy({
                idRequete,
              });
              return {
                statusCode: 200,
                message: 'Opération terminée avec succès',
                data: requete, // Retourne le requetur et sa requete
                count: 1,
              };
            }
        } catch (error) {
            return {
                statusCode: 500,
                message: error.message,
                data: null,
                count: 0,
            };
        }

    }

    async getOneByEmail(email: string) {
        const ret = await this.requeteRepository.findOne({
          where: { adresseMail: email },
        });
        return { data: ret };
    }
}
