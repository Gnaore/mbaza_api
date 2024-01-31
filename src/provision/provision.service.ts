import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvisionDto } from './Dto/provisionDto';
import { ProvisionEntity } from './provision.entity';


@Injectable()
export class ProvisionService {

    constructor(
        @InjectRepository(ProvisionEntity)
        private provisionRepository: Repository<ProvisionEntity>
    ) { }


    async save(userId: any, provisionDto: ProvisionDto[]) {
        provisionDto.forEach(async oneprovisionDto => {
            const { mois, annee, status, idWave, locataireRef } = oneprovisionDto
            const ret = await this.provisionRepository.save(oneprovisionDto)
        });
      }

}