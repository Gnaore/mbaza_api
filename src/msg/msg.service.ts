import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MsgEntity } from './msg.entity';
import { Repository } from 'typeorm';
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

    async allMsgEnvoye(userId: number, expediteurId: number) {
        const ret = await this.msgRepository.find({
            where: { expediteurId },
        });
        return { data: ret };
    }

    async allMsgRecu(userId: number, destinataireId: number) {
        const ret = await this.msgRepository.find({
            where: { destinataireId },
        });
        return { data: ret };
    }

    async ajouteMsg(userId: number, ajoutMsgDto: AjoutMsgDto) {
        const { msgObjet, msgMessage, expediteurId, destinataireId } = ajoutMsgDto;


        //Ajout à la base
        const msgData = new MsgEntity
        msgData.msgId = undefined
        msgData.destinataireId = destinataireId
        msgData.expediteurId = expediteurId
        msgData.msgMessage = msgMessage
        msgData.msgObjet = msgObjet
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
