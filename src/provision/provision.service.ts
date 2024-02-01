import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvisionDto } from './Dto/provisionDto';
import { ProvisionEntity } from './provision.entity';
import { log } from 'console';


@Injectable()
export class ProvisionService {

    constructor(
        @InjectRepository(ProvisionEntity)
        private provisionRepository: Repository<ProvisionEntity>
    ) { }


    async save(userId: any, provisionDto: ProvisionDto[]) {
        console.log(provisionDto);
        
        provisionDto.forEach(async oneprovisionDto => {
            console.log(oneprovisionDto);
            
            const { mois, annee, status, idWave, locataireRef } = oneprovisionDto
            const ret = await this.provisionRepository.save(oneprovisionDto)
        });
      }

}