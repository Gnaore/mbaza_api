import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvisionEntity } from './provision.entity';
import { LocataireEntity } from 'src/locataire/locataire.entity';
import { ProvisionDto } from './Dto/provisionDto';


@Injectable()
export class ProvisionService {

    constructor(
        @InjectRepository(ProvisionEntity)
        private provisionRepository: Repository<ProvisionEntity>
    ) { }



   async save(userId: any, provisionDto: ProvisionDto[], locataire: LocataireEntity) {
    
        provisionDto.forEach(async oneprovisionDto => {
            const { mois, annee, status, idWave, locataireRef } = oneprovisionDto
            
            const body  = {
                mois: mois, 
                annee: annee, 
                status: status, 
                idWave: idWave, 
                locataire : locataire
            }
            const ret = await this.provisionRepository.save(body)
        });

    }

}