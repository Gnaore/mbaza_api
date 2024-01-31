import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MoisEntity } from './mois.entity';
import { MoiseDto } from './Dto/moisDto';


@Injectable()
export class MoisService {

    constructor(
        @InjectRepository(MoisEntity)
        private readonly moisRepository: Repository<MoisEntity>
    ) { }

    async getAll() {
        const ret = await this.moisRepository.find({
            order:
            {
                moisNumero: 'ASC',
            },
        });
        return { data: ret };
    }

    async getAllSup(moisDonne: number) {
        //const connection = await createConnection();
        //const repository = connection.getRepository(MoisEntity);
    
        const ret = await this.moisRepository.createQueryBuilder("MoisEntity")
            .where(`moisNumero >= :mois`, { mois: moisDonne })
            .getMany();
    
       // await connection.close();
    
       return { data: ret };
    }

    async creationMois() {
        var body: MoiseDto = {moisNumero: 1, moisLibelle: 'Janvier'}
            await this.moisRepository.save(body);
           body = {moisNumero: 2, moisLibelle: 'Février'}
            await this.moisRepository.save(body);
            body = {moisNumero: 3, moisLibelle: 'Mars'}
            await this.moisRepository.save(body);
            body = {moisNumero: 4, moisLibelle: 'Avril'}
            await this.moisRepository.save(body);
            body = {moisNumero: 5, moisLibelle: 'Mai'}
            await this.moisRepository.save(body);
            body = {moisNumero: 6, moisLibelle: 'Juin'}
            await this.moisRepository.save(body);
            body = {moisNumero: 7, moisLibelle: 'Juillet'}
            await this.moisRepository.save(body);
            body = {moisNumero: 8, moisLibelle: 'Août'}
            this.moisRepository.save(body);
            body = {moisNumero: 9, moisLibelle: 'Septembre'}
            await this.moisRepository.save(body);
            body = {moisNumero: 10, moisLibelle: 'Octobre'}
            await this.moisRepository.save(body);
            body = {moisNumero: 11, moisLibelle: 'Novembre'}
            await this.moisRepository.save(body);
            body = {moisNumero: 12, moisLibelle: 'Décembre'}
            await this.moisRepository.save(body);
        }

}
