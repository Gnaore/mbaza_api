import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MsgEntity } from './msg.entity';
import { DataSource, EntityManager, Repository, createQueryBuilder, getConnection } from 'typeorm';
import { AjoutMsgDto } from './Dto/ajoutMsgDto';
import { LuMsgDto } from './Dto/luMsgDto';

@Injectable()
export class MsgService {
    constructor(
        @InjectRepository(MsgEntity)
        private readonly msgRepository: Repository<MsgEntity>
    ) { }




    async allMsg() {
        const ret = await this.msgRepository.find({
            order:
            {
                msgDate: 'DESC',
            },

        });
        return { data: ret };
    }


    ////BAILLEUR VERS LOCATAIRE -------------------
    async allMsgEnvoye(userId: number, expediteurId: number) {
        const AppDataSource = new DataSource({
            type: 'mariadb',
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
            "SELECT * FROM Msg LEFT JOIN Locataire ON Msg.destinataireId = Locataire.locataireId WHERE Msg.expediteurId = " + expediteurId
        );
        return { data: ret };
    }
    async allMsgRecu(userId: number, destinataireId: number) {
        const AppDataSource = new DataSource({
            type: 'mariadb',
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
            "SELECT * FROM Msg LEFT JOIN Locataire ON Msg.expediteurId = Locataire.locataireId WHERE Msg.destinataireId = " + destinataireId
        );
        return { data: ret };
    }
    ///FIN BAILLEUR VERS LOCATAIRE ----------------


        ////  LOCATAIRE VERS BAILLEUR-------------------
        async allMsgEnvoyeLocatire(userId: number, expediteurId: number) {
            const AppDataSource = new DataSource({
                type: 'mariadb',
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
                "SELECT * FROM Msg LEFT JOIN Bailleur ON Msg.destinataireId = Bailleur.bailleurId WHERE expediteurId = " + expediteurId
            );
            return { data: ret };
        }
        async allMsgRecuLocatire(userId: number, destinataireId: number) {
            const AppDataSource = new DataSource({
                type: 'mariadb',
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
                "SELECT * FROM `Msg` LEFT JOIN Bailleur ON Msg.expediteurId = Bailleur.bailleurId WHERE `destinataireId` = " + destinataireId
            );
            return { data: ret };
        }
        ///FIN LOCATAIRE VERS BAILLEUR ----------------


    async ajouteMsg(userId: number, ajoutMsgDto: AjoutMsgDto) {
        const { msgObjet, msgMessage, expediteurId, destinataireId, msgLienpj } = ajoutMsgDto;


        //Ajout à la base
        const msgData = new MsgEntity
        msgData.msgId = undefined
        msgData.destinataireId = destinataireId
        msgData.expediteurId = expediteurId
        msgData.msgMessage = msgMessage
        msgData.msgObjet = msgObjet
        msgData.msgLienpj = msgLienpj
        const ret = await this.msgRepository.save(msgData);

        return { data: ret };
    }


    async marquLuMsg(userId: number, luMsgDto: LuMsgDto) {

        const { msgId, msgLu } = luMsgDto;

        const ret = await this.msgRepository.update({ msgId }, {
            msgLu
        });
        return { data: ret };
    }

    async allMsgNonLu(userId: number, destinataireId: number) {
        const ret = await this.msgRepository.count({
            where: {
                destinataireId,
                msgLu: false
            },
        });
        return { data: ret };
    }

}
