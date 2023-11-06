import { Module } from '@nestjs/common';
import { WcallbackService } from './wcallback.service';
import { WcallbackController } from './wcallback.controller';
import { ProprieteModule } from 'src/propriete/propriete.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WcallbackEntity } from './wcallback.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WcallbackEntity]), ProprieteModule],
  controllers: [WcallbackController],
  providers: [WcallbackService]
})
export class WcallbackModule {}
