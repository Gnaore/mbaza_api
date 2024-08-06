import { Module } from '@nestjs/common';
import { RequeteurController } from './requeteur.controller';
import { RequeteurService } from './requeteur.service';
import { RequeteurEntity } from './entities/requeteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RequeteurEntity])],
  controllers: [RequeteurController],
  providers: [RequeteurService],
  exports: [RequeteurService]
})
export class RequeteurModule { }
