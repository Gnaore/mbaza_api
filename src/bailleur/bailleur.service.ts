import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { BailleurEntity } from './bailleur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AjoutBailleurDto } from './Dto/ajoutBailleurDto';
import { BanqueService } from 'src/banque/banque.service';
import { ModifBailleurDto } from './Dto/modifBailleurDto';
import { UserService } from 'src/user/user.service';
import { WcallbackEntity } from 'src/wcallback/wcallback.entity';
import { FinContratDto } from '../locataire/Dto/finContratDto';
import { ProprieteService } from 'src/propriete/propriete.service';
import { LocataireService } from 'src/locataire/locataire.service';

@Injectable()
export class BailleurService {
  constructor(
    @InjectRepository(BailleurEntity)
    private readonly bailleurRepository: Repository<BailleurEntity>,
    
    private readonly banqueService: BanqueService,
    private readonly userService: UserService,
  ) { }

  async getAll() {
    const ret = await this.bailleurRepository.find({
      relations: ['proprietes', 'banque']
    });
    return { data: ret };
  }

  async getOne(userId: number, bailleurId: number) {
    const ret = await this.bailleurRepository.findOne({
      where: { bailleurId },
      relations: {
        banque: true,
        proprietes: true,
        /* locataires: {
           propriete: true
         }*/
      }
    });
    return { data: ret };
  }


  async getOneIncludeLocataire(userId: number, bailleurId: number) {
    const ret = await this.bailleurRepository.findOne({
      where: { bailleurId },
      relations: {
        banque: true,
        proprietes: true,
        locataires: {
          propriete: true
        }
      }
    });
    return { data: ret };
  }

  async getAllpayementbyBailleur(userId: number, bailleurId: number) {
    const ret = await this.bailleurRepository.find(
      {
        relations: {
          wcallbacks: true,
          proprietes: true,
          locataires: true
        },
        where: { bailleurId: bailleurId, wcallbacks: { payment_status: 'succeeded' } },
        order: {
          wcallbacks: {
            when_completed: "DESC"
          }
        }

      });
    return { data: ret };
  }

  async getAllpayementbyCodeBailleur(userId: number, params: string) {
    let details = params.split(',')
    let details0 = details[0]
    let details1 = details[1]
    let details2 = details[2]

    let bailleurId = parseInt(details0.replace("\"", ""))
    let datedebut = (details1.replace("\"", ""))  //'2023-11-13 00:00:00'
    let dateFin = (details2.replace("\"", ""))   //'2024-11-20 23:59:59'



    const AppDataSource = new DataSource({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
    })
    const appDataSource = await AppDataSource.initialize();
    const queryRunner = await appDataSource.createQueryRunner();
    var ret = await queryRunner.manager.query(
      `SELECT * FROM Wcallback LEFT JOIN Locataire ON Wcallback.locataireRef = Locataire.locataireRef WHERE Wcallback.bailleurBailleurId = ${bailleurId}  AND when_completed BETWEEN "${datedebut}" AND "${dateFin}"`
    );
    return { data: ret };
  }
  /*
  async getAllpayementbyCodeBailleur(userId: number, bailleurCode: string) {
    const ret = await this.bailleurRepository.find(
        {
            relations: {  wcallbacks: true, proprietes: true, locataires: true},
            where: {bailleurNumero: bailleurCode,
            }
        });
    return { data: ret };
  }*/

  async getOneSimple(userId: number, bailleurId: number) {
    const ret = await this.bailleurRepository.findOne({
      where: { bailleurId },
    });
    return { data: ret };
  }

  async getOneByUserId(userId) {
    const retUser = await this.userService.getOneUser(parseInt(userId))

    if (retUser) {
      const ret = await this.bailleurRepository.findOne({
        where: { bailleurEmail: retUser.data.email },
        relations: ['banque']
      });
      return { data: ret };
    } else {
      return { data: "" };
    }

  }

  async supone(userId: any, bailleurId: number) {
    const bailleurRem = await this.bailleurRepository.findOne(
      { where: { bailleurId }, relations: {} }
    )
    const ret = await this.bailleurRepository.remove(bailleurRem);
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
      bailleurEmailHussier,
      bailleurTelHussier
    } = modifBailleurDto;

    const banqueR = await this.banqueService.getOne(userId, banqueId)

    const ret = await this.bailleurRepository.update({
      bailleurId
    },
      {
        bailleurNomPrenoms,
        bailleurTelephone,
        bailleurAdresse,
        bailleurEmail,
        bailleurDateNaissance,
        bailleurNumero,
        banque: banqueR.data,
        bailleurNumCompte,
        bailleurRevenu,
        bailleurTaux,
        bailleurPersUrgence,
        bailleurTelUrgence,
        bailleurRelationUrgence,
        bailleurlienCNI,
        bailleurLienPhoto,
        bailleurEmailHussier,
        bailleurTelHussier
      },
    );
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
      bailleurEmailHussier,
      bailleurTelHussier
    } = ajoutBailleurDto;

    //Ajout à la base

    const banqueR = await this.banqueService.getOne(userId, banqueId)

    const bailleurData = new BailleurEntity

    bailleurData.bailleurId = undefined,
      bailleurData.bailleurNomPrenoms = bailleurNomPrenoms
    bailleurData.bailleurTelephone = bailleurTelephone
    bailleurData.bailleurAdresse = bailleurAdresse
    bailleurData.bailleurEmail = bailleurEmail
    bailleurData.bailleurDateNaissance = bailleurDateNaissance
    bailleurData.bailleurNumero = bailleurNumero
    bailleurData.bailleurNumCompte = bailleurNumCompte
    bailleurData.bailleurRevenu = bailleurRevenu
    bailleurData.bailleurTaux = bailleurTaux
    bailleurData.bailleurPersUrgence = bailleurPersUrgence
    bailleurData.bailleurTelUrgence = bailleurTelUrgence
    bailleurData.bailleurRelationUrgence = bailleurRelationUrgence
    bailleurData.bailleurlienCNI = bailleurlienCNI
    bailleurData.bailleurLienPhoto = bailleurLienPhoto
    bailleurData.banque = banqueR.data
    bailleurData.bailleurEmailHussier = bailleurEmailHussier
    bailleurData.bailleurTelHussier = bailleurTelHussier

    const ret = await this.bailleurRepository.save(bailleurData);
    return { data: ret };
  }


}
