import { AjoutTypebienDto } from './Dto/ajoutTypebienDto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { TypebienEntity } from './typebien.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TypebienService {
  constructor(
    @InjectRepository(TypebienEntity)
    private readonly typebienRepository: Repository<TypebienEntity>,
    private readonly configService: ConfigService,
  ) {}

  async ajouteTypebien(userId: number, ajoutTypebienDto: AjoutTypebienDto) {
    const { typebienId, libelleTypebien } = ajoutTypebienDto;

    //Ajout à la base
    const typebienData = new AjoutTypebienDto()
    typebienData.libelleTypebien =  libelleTypebien
    typebienData.typebienId = undefined
    const ret = await this.typebienRepository.save(typebienData);
    return { data: ret };
  }

  async modifiTypebien(userId: number, ajoutTypebienDto: AjoutTypebienDto) {
    const { typebienId, libelleTypebien } = ajoutTypebienDto;
    const ret = await this.typebienRepository.update( { typebienId } ,{libelleTypebien} );
    return { data: ret };
  }

  async supone(userId: any, typebienId: number) {
    const typebien = await this.typebienRepository.findOne({where: {typebienId}})
    if (!typebien){
      return {
        data: {
          "success":"false",
          "msg":"Le type bien n'a pas ete trouve"
        }
      }
    }
    const ret = await this.typebienRepository.remove(typebien);
    return { data: ret };
  }

  async getAll() {
    const ret = await this.typebienRepository.find({
      order: 
        {
          libelleTypebien: "ASC",
        }
    });
    return { data: ret };
  }

  async getOne(userId: number, typebienId: number) {
    const ret = await this.typebienRepository.findOne({
      where: { typebienId },
    });
    return { data: ret };
  }
}
