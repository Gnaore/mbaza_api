import { Module } from '@nestjs/common';
import { WcallbackService } from './wcallback.service';
import { WcallbackController } from './wcallback.controller';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WcallbackEntity } from './wcallback.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';
import { MailerModule } from 'src/mailer/mailer.module';
import { LocataireEntity } from 'src/locataire/locataire.entity';
import { ProvisionEntity } from 'src/provision/provision.entity';
import { SmsService } from 'src/sms/sms.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WcallbackEntity]),
    TypeOrmModule.forFeature([LocataireEntity]),
    TypeOrmModule.forFeature([ProvisionEntity]),
    ProprieteModule,
    BailleurModule,
    MailerModule,
  ],
  controllers: [WcallbackController],
  providers: [WcallbackService, SmsService],
})
export class WcallbackModule {}
