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
import { LocataireService } from './locataire.service';
import { AjoutLocataireDto } from './Dto/ajoutLocataireDto';

@Controller('locataire')
export class LocataireController {

  constructor(private readonly locataireService: LocataireService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.locataireService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) locataireId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.locataireService.getOne(userId, locataireId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getbyBailleur(@Param('id', ParseIntPipe) bailleurId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.locataireService.getlocatairesbyBailleur(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajouteLocataire(@Req() request: Request, @Body() ajoutLocataireDto: AjoutLocataireDto) {
    const userId = request.user['userId'];
    return this.locataireService.ajouteLocataire(userId, ajoutLocataireDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifiLocataire(@Req() request: Request, @Body() ajoutLocataireDto: AjoutLocataireDto) {
    const userId = request.user['userId'];
    return this.locataireService.modifiLocataire(userId, ajoutLocataireDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(@Req() request: Request, @Param('id', ParseIntPipe) locataireId: number) {
    const userId = request.user['userId'];
    return this.locataireService.supone(userId, locataireId);
  }
}
