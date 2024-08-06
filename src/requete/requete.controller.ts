import { Body, Controller, Post } from '@nestjs/common';
import { RequeteService } from './requete.service';
import { AddRequeteDto } from './dto/add-requete.dto';

@Controller('requete')
export class RequeteController {
    constructor(private readonly requeteService : RequeteService){}

    @Post()
    create(@Body() addRequeteDto: AddRequeteDto){
        return this.requeteService.create(addRequeteDto);
    }
}
