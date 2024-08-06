import { Module } from '@nestjs/common';
import { ProprieteController } from './propriete.controller';
import { ProprieteService } from './propriete.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprieteEntity } from './propriete.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';
import { TypebienModule } from 'src/typebien/typebien.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProprieteEntity]), BailleurModule, TypebienModule],
  controllers: [ProprieteController],
  providers: [ProprieteService],
  exports: [ProprieteService]
})
export class ProprieteModule {}
