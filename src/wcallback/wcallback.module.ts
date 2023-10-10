import { Module } from '@nestjs/common';
import { WcallbackService } from './wcallback.service';
import { WcallbackController } from './wcallback.controller';

@Module({
  controllers: [WcallbackController],
  providers: [WcallbackService]
})
export class WcallbackModule {}
