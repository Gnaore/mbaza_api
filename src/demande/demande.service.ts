import { Injectable } from '@nestjs/common';
import { DemandeEntity } from './demande.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { AjoutDemandeDto } from './Dto/ajoutDemandeDto';

@Injectable()
export class DemandeService {
  constructor(
    @InjectRepository(DemandeEntity)
    private readonly demandeRepository: Repository<DemandeEntity>,
    private readonly configService: ConfigService,
  ) {}

  async ajouteDemande(ajouteDemandeDto: AjoutDemandeDto) {
    const {
      demandeId,
      demandeBesoin,
      demandeNomprenoms,
      demandeEmail,
      demandeTel,
      demandeMessage,
    } = ajouteDemandeDto;

    //Creation de la date
    const demandeDate = new Date();

    //Ajout à la base
    const ret = await this.demandeRepository.save({
      demandeId: undefined,
      demandeBesoin,
      demandeNomprenoms,
      demandeEmail,
      demandeTel,
      demandeMessage,
      demandeDate: demandeDate,
      demandelu: 0,
    });
    return { data: ret };
  }

  async modifiBien(userId: number, ajouteDemandeDto: AjoutDemandeDto) {
    const {
      demandeId,
      demandeBesoin,
      demandeNomprenoms,
      demandeEmail,
      demandeTel,
      demandeMessage,
    } = ajouteDemandeDto;

    const ret = await this.demandeRepository.update(
      { demandeId },
      {
        demandelu: 1,
      },
    );
    return { data: ret };
  }

  async supone(userId: any, demandeId: number) {
    const demandeSup = await this.demandeRepository.findOne({
      where: { demandeId },
    });
    const ret = await this.demandeRepository.remove(demandeSup);
    return { data: ret };
  }

  async getAll() {
    const ret = await this.demandeRepository.find({
      order: { demandeDate: 'ASC' },
    });
    return { data: ret };
  }
  async getAllLu() {
    const ret = await this.demandeRepository.find({
      where: { demandelu: 1 },
      order: { demandeDate: 'ASC' },
    });
    return { data: ret };
  }
  async getAllNonLu() {
    const ret = await this.demandeRepository.find({
      where: { demandelu: 0 },
      order: { demandeDate: 'ASC' },
    });
    return { data: ret };
  }

  async getOne(userId: number, demandeId: number) {
    const ret = await this.demandeRepository.findOne({
      where: { demandeId },
    });
    return { data: ret };
  }
}
