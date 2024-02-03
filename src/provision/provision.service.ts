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
            const { mois, annee, status, idWave, locataireRef, idWaveCallback, amount, when_completed } = oneprovisionDto

            const body = {
                mois: mois,
                annee: annee,
                status: status,
                idWave: idWave,
                locataire: locataire,
                idWaveCallback: idWaveCallback,
                amount: amount,
                when_completed: when_completed
            }
            const ret = await this.provisionRepository.save(body)
        });

    }

    async getProvisionByRefLocataire(locataireId: number) {
        const ret = await this.provisionRepository.find({
            relations: { locataire: {} },
            where: { locataire: { locataireId } },
            order: { id: "ASC"}
        })
        return { data: ret }
    }

}