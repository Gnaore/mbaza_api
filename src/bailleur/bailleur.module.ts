import { Module } from '@nestjs/common';
import { BailleurController } from './bailleur.controller';
import { BailleurService } from './bailleur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BailleurEntity } from './bailleur.entity';
import { BanqueModule } from 'src/banque/banque.module';

@Module({
  imports: [TypeOrmModule.forFeature([BailleurEntity]), BanqueModule],
  controllers: [BailleurController],
  providers: [BailleurService],
  exports: [BailleurService]
})
export class BailleurModule {}
