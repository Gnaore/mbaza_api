import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PayementDto } from './Dto/payementDto';
import { WcallbackService } from './wcallback.service';
import { CallbackDto } from './Dto/callbackDto';

@Controller('wcallback')
export class WcallbackController {
  constructor(private wcallbackService: WcallbackService) { }
 

  @Get()
  getall() {
    return "Le lien de retour";
  }

  @Post('callback')
  ajouteretour(@Body() callbackDto: CallbackDto) {
    return this.wcallbackService.retourPayement(callbackDto);
  }

  @Post('payementtiers')
  payementParTiers(
    @Body() payementDto: PayementDto,
  ) {
    return this.wcallbackService.payementParTiers(payementDto);
  }

}


