import { Module } from '@nestjs/common';
import { LocataireController } from './locataire.controller';
import { LocataireService } from './locataire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocataireEntity } from './locataire.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';
import { ProprieteModule } from 'src/propriete/propriete.module';

@Module({
  imports: [TypeOrmModule.forFeature([LocataireEntity]), BailleurModule, ProprieteModule],
  controllers: [LocataireController],
  providers: [LocataireService]
})
export class LocataireModule {}
