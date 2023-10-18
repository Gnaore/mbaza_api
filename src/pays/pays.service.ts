import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AjoutPaysDto } from './Dto/ajoutPaysDto';
import { Repository } from 'typeorm';
import { PaysEntity } from './pays.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaysService {
  constructor(
    @InjectRepository(PaysEntity)
    private readonly paysRepository: Repository<PaysEntity>,
    private readonly configService: ConfigService,
  ) {}

  async ajoutePays(userId: number, ajoutPaysDto: AjoutPaysDto) {
    const { paysId, libellePays, codePays } = ajoutPaysDto;

    const paysData = new AjoutPaysDto()
    paysData.paysId = undefined
    paysData.codePays = codePays
    paysData.libellePays = libellePays

    //Ajout à la base
    const ret = await this.paysRepository.save(paysData);

    return { data: ret };
  }

  async modifiPays(userId: number, ajoutPaysDto: AjoutPaysDto) {
    const { paysId, libellePays, codePays } = ajoutPaysDto;
    const ret = await this.paysRepository.update({ paysId } , {
      libellePays,
      codePays,
    } );
    return { data: ret };
  }

  async supone(userId: any, paysId: number) {
    const pays = await this.paysRepository.findOne({where: {paysId}})
    if (!pays) throw new NotFoundException("L'utilisateur n'existe pas");
    const ret = await this.paysRepository.remove(pays);
    return { data: ret };
  }

  async getAll() {
    const ret = await this.paysRepository.find(
      {
        order:{ libellePays: "ASC" }
      });
    return { data: ret };
  }

  async getOne(userId: number, paysId: number) {
    const ret = await this.paysRepository.findOne({ where: { paysId } });
    return { data: ret };
  }
}
