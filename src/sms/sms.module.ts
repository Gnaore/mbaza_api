import { Global, Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { AppService } from 'src/app.service';
import { SmsController } from './sms.controller';

@Module({
  providers: [SmsService],
  exports: [SmsService],
  controllers: [SmsController]
})
export class SmsModule {}
