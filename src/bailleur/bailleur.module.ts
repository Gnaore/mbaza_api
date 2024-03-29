import { Module } from '@nestjs/common';
import { BailleurController } from './bailleur.controller';
import { BailleurService } from './bailleur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BailleurEntity } from './bailleur.entity';
import { BanqueModule } from 'src/banque/banque.module';
import { UserModule } from 'src/user/user.module';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { ProprieteService } from 'src/propriete/propriete.service';

@Module({
  imports: [TypeOrmModule.forFeature([BailleurEntity]), BanqueModule, UserModule],
  controllers: [BailleurController],
  providers: [BailleurService],
  exports: [BailleurService]
})
export class BailleurModule {}
