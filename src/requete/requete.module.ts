import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequeteEntity } from './entities/requete.entity';
import { RequeteController } from './requete.controller';
import { RequeteService } from './requete.service';
import { RequeteurModule } from 'src/requeteur/requeteur.module';


@Module({
    imports: [TypeOrmModule.forFeature([RequeteEntity]),RequeteurModule],
    controllers: [RequeteController],
    providers: [RequeteService],
    exports: [RequeteService]
})
export class RequeteModule {}
