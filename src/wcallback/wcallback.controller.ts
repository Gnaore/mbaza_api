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

@Controller('wcallback')
export class WcallbackController {

    @Get()
    getall() {
        return "Le lien de retour";
    }
    
    @Post('callback')
    ajouteretour() {
        return "this.paysService.ajoutePays(userId, ajoutPaysDto)";
    }
    
}


