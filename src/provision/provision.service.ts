import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvisionDto } from './Dto/provisionDto';
import { ProvisionEntity } from './provision.entity';
import { log } from 'console';
import { LocataireService } from 'src/locataire/locataire.service';


@Injectable()
export class ProvisionService {

    constructor(
        @InjectRepository(ProvisionEntity)
        private provisionRepository: Repository<ProvisionEntity>,
        private locataireService: LocataireService
    ) { }


    async save(userId: any, provisionDto: ProvisionDto[], locataireRef: string) {
        const locataire = await this.locataireService.getOneByReference(locataireRef)

        provisionDto.forEach(async oneprovisionDto => {
            const { mois, annee, status, idWave, locataireRef } = oneprovisionDto
            const body  = {
                mois: mois, 
                annee: annee, 
                status: status, 
                idWave: idWave, 
                locataire : locataire.data
            }
            const ret = await this.provisionRepository.save(body)
        });

    }

}