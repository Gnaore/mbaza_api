import { Body, Controller, Get, Post } from '@nestjs/common';
import { RequeteurService } from './requeteur.service';
import { AddRequeteurDto } from './dto/add-requeteur.dto';

@Controller('requeteur')
export class RequeteurController {
    constructor(private readonly requeteurService: RequeteurService) { }

    @Get()
    read(){
        return this.requeteurService.read();
    }

    @Post()
    create(@Body() addRequeteurDto: AddRequeteurDto) {
        return this.requeteurService.create(addRequeteurDto);
    }

}
