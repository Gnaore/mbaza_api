import { Module } from '@nestjs/common';
import { LocataireController } from './locataire.controller';
import { LocataireService } from './locataire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocataireEntity } from './locataire.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { UserModule } from 'src/user/user.module';
import { ProvisionModule } from 'src/provision/provision.module';

@Module({
  imports: [TypeOrmModule.forFeature([LocataireEntity]), BailleurModule, ProprieteModule, UserModule, ProvisionModule],
  controllers: [LocataireController],
  providers: [LocataireService]
})
export class LocataireModule {}
