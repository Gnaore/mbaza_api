import { Injectable } from '@nestjs/common';
import { AjoutBienDto } from './Dto/ajoutBienDto';
import * as speakeasy from 'speakeasy';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { BienEntity } from './bien.entity';
import { Repository } from 'typeorm';
import { TypebienService } from 'src/typebien/typebien.service';

@Injectable()
export class BienService {
  constructor(
    @InjectRepository(BienEntity)
    private readonly bienRepository: Repository<BienEntity>,
    private typebienService: TypebienService,
    private readonly configService: ConfigService,
  ) { }

  async ajouteBien(userId: number, ajoutBienDto: AjoutBienDto) {
    const {
      bienId,
      bienAdresse,
      bienCategorie,
      bienCommuneQuartier,
      bienContactBailleur,
      bienContrat,
      bienDescription,
      bienImage,
      bienLibelle,
      bienNbrePiece,
      bienNomBailleur,
      bienPrix,
      bienSurface,
      bienVille,
      typebienId,
      bienOqp,
    } = ajoutBienDto;

    //Creation de la reference
    const index = bienNomBailleur.substring(0, 2);
    const codeotp = speakeasy.totp({
      secret: this.configService.get('OTP_CODE'),
      digits: 6,
      encoding: 'base32',
    });
    const reference = codeotp + index;

    //Ajout à la base
    const typebienRec = await this.typebienService.getOne(userId, typebienId)
    const ret = await this.bienRepository.save({
      bienId: undefined,
      bienAdresse,
      bienCategorie,
      bienCommuneQuartier,
      bienContactBailleur,
      bienContrat,
      bienDescription,
      bienImage,
      bienLibelle,
      bienNbrePiece,
      bienNomBailleur,
      bienPrix,
      bienSurface,
      bienVille,
      typebien: typebienRec.data,
      bienReference: reference,
      bienOqp
    });
    return { data: ret };
  }

  async modifiBien(userId: number, ajoutBienDto: AjoutBienDto) {
    const {
      bienId,
      bienAdresse,
      bienCategorie,
      bienCommuneQuartier,
      bienContactBailleur,
      bienContrat,
      bienDescription,
      bienImage,
      bienLibelle,
      bienNbrePiece,
      bienNomBailleur,
      bienPrix,
      bienSurface,
      bienVille,
      typebienId,
      bienOqp
    } = ajoutBienDto;
    const typebienRec = await this.typebienService.getOne(userId, typebienId)
    const ret = await this.bienRepository.update(
      { bienId },
      {
        bienAdresse,
        bienCategorie,
        bienCommuneQuartier,
        bienContactBailleur,
        bienContrat,
        bienDescription,
        bienImage,
        bienLibelle,
        bienNbrePiece,
        bienNomBailleur,
        bienPrix,
        bienSurface,
        bienVille,
        typebien: typebienRec.data,
        bienOqp
      },
    );
    return { data: ret };
  }

  async supone(userId: any, bienId: number) {
    const bienSup = await this.bienRepository.findOne({ where: { bienId } })
    const ret = await this.bienRepository.remove(bienSup);
    return { data: ret };
  }

  async getAll() {
    const ret = await this.bienRepository.find({
      relations: {
        typebien: true
      },
      order: { bienLibelle: 'ASC' }
    });
    return { data: ret };
  }

  async getOne(userId: number, bienId: number) {
    const ret = await this.bienRepository.findOne({
      where: { bienId },
      relations: {typebien: true}
    });
    return { data: ret };
  }
}
