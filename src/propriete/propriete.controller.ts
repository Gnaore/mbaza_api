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
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProprieteService } from './propriete.service';
import { AjoutProprieteDto } from './Dto/ajoutProprieteDto';
import { ModifProprieteDto } from './Dto/modifProprieteDto';

@Controller('propriete')
export class ProprieteController {
  constructor(private readonly proprieteService: ProprieteService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.proprieteService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(
    @Param('id', ParseIntPipe) proprieteId: number,
    @Req() request: Request,
  ) {
    const userId = request.user['userId'];
    return this.proprieteService.getOne(userId, proprieteId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('bybailleur/:id')
  getAllpropbyBailleur(
    @Param('id', ParseIntPipe) bailleurId: number,
    @Req() request: Request,
  ) {
    const userId = request.user['userId'];
    return this.proprieteService.getAllpropbyBailleur(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajoutePropriete(
    @Req() request: Request,
    @Body() ajoutProprieteDto: AjoutProprieteDto,
  ) {
    const userId = request.user['userId'];
    return this.proprieteService.ajoutePropriete(userId, ajoutProprieteDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifiPropriete(
    @Req() request: Request,
    @Body() modifProprieteDto: ModifProprieteDto,
  ) {
    const userId = request.user['userId'];
    return this.proprieteService.modifiPropriete(userId, modifProprieteDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) proprieteId: number,
  ) {
    const userId = request.user['userId'];
    return this.proprieteService.supone(userId, proprieteId);
  }
}
