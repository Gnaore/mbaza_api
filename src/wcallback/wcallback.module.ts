import { Module } from '@nestjs/common';
import { WcallbackService } from './wcallback.service';
import { WcallbackController } from './wcallback.controller';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WcallbackEntity } from './wcallback.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';
import { MailerModule } from 'src/mailer/mailer.module';
import { LocataireEntity } from 'src/locataire/locataire.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WcallbackEntity]),TypeOrmModule.forFeature([LocataireEntity]), ProprieteModule, BailleurModule, MailerModule],
  controllers: [WcallbackController],
  providers: [WcallbackService]
})
export class WcallbackModule {}
