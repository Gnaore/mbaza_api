import { AuthGuard } from '@nestjs/passport';
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
import { Request } from 'express';
import { DemandeService } from './demande.service';
import { AjoutDemandeDto } from './Dto/ajoutDemandeDto';

@Controller('demande')
export class DemandeController {
  constructor(private readonly demandeService: DemandeService) {}

  @Get('all')
  getAll() {
    return this.demandeService.getAll();
  }

  @Get('allLu')
  getAllLu() {
    return this.demandeService.getAllLu();
  }

  @Get('allNonLu')
  getAllNonLu() {
    return this.demandeService.getAllNonLu();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(
    @Req() request: Request,
    @Param('id', ParseIntPipe) demandeId: number,
  ) {
    const userId = request.user['userId'];
    return this.demandeService.getOne(userId, demandeId);
  }

  @Post('create')
  ajouteBien(@Body() ajoutDemandeDto: AjoutDemandeDto) {
    return this.demandeService.ajouteDemande(ajoutDemandeDto);
  }
  /*
  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  marquelu(@Req() request: Request, @Body() ajoutDemandeDto: AjoutDemandeDto) {
    const userId = request.user['userId'];
    return this.demandeService.marquelu(userId, ajoutDemandeDto);
  }*/

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) demandeId: number,
  ) {
    const userId = request.user['userId'];
    return this.demandeService.supone(userId, demandeId);
  }
}
