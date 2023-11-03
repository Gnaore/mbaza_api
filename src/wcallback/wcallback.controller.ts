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

@Controller('wcallback')
export class WcallbackController {
    constructor(private wcallbackService: WcallbackService){}


    @Get()
    getall() {
        return "Le lien de retour";
    }
    
    @Post('callback')
    ajouteretour() {
        return "this.paysService.ajoutePays(userId, ajoutPaysDto)";
    }


    @Post('payementtiers')
    payementParTiers(
      @Body() payementDto: PayementDto,
    ) {
      return this.wcallbackService.payementParTiers(payementDto);
    }

    
}


