import { Body, Controller, Post } from '@nestjs/common';
import { SmsDto } from './Dto/smsDto';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {

    constructor(private smsService: SmsService){}

    @Post('envoisms')
    envoisms(@Body() smsDto: SmsDto) {
      return this.smsService.envoiSms(smsDto);
    }
    
}
