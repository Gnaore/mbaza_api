import { Module } from '@nestjs/common';
import { WcallbackService } from './wcallback.service';
import { WcallbackController } from './wcallback.controller';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WcallbackEntity } from './wcallback.entity';
import { BailleurModule } from 'src/bailleur/bailleur.module';

@Module({
  imports:[TypeOrmModule.forFeature([WcallbackEntity]), ProprieteModule, BailleurModule],
  controllers: [WcallbackController],
  providers: [WcallbackService]
})
export class WcallbackModule {}
