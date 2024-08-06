import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RequeteurEntity } from './entities/requeteur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddRequeteurDto } from './dto/add-requeteur.dto';

@Injectable()
export class RequeteurService {
    constructor(
        @InjectRepository(RequeteurEntity)
        private readonly requeteurRepository: Repository<RequeteurEntity>
    ) { }

    async create(addRequeteurDto: AddRequeteurDto){
        try{
            const { nomComplet, numeroTelephpne, adresseMail } = addRequeteurDto;
            const requeteur = await this.requeteurRepository.create(addRequeteurDto);

            const requeteurs = this.requeteurRepository.save(requeteur);
            return {
              statusCode: 200,
              message: 'Opération terminée avec succès',
              data: requeteurs, // Retourne le requetur et sa requete
              count: 1,
            };
        }
        catch(error){
            return {
                statusCode: 500,
                message: error.message,
                data: null,
                count: 0,
            };
        }

    }

    async read(){

        try{
            const requeteurs = await this.requeteurRepository.find();
            return {
                statusCode: 200,
                message: 'Opération terminée avec succès',
                data: requeteurs, // Retourne le requetur et sa requete
                count: requeteurs.length,
            }
        }
        catch (error) {
            return {
                statusCode: 500,
                message: error.message,
                data: null,
                count: 0,
            };
        }
    }

}
