import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { BailleurService } from './bailleur.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AjoutBailleurDto } from './Dto/ajoutBailleurDto';
import { ModifBailleurDto } from './Dto/modifBailleurDto';
import { FinContratDto } from '../locataire/Dto/finContratDto';

@Controller('bailleur')
export class BailleurController {
  constructor(private readonly bailleurService: BailleurService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.bailleurService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(
    @Param('id', ParseIntPipe) bailleurId: number,
    @Req() request: Request,
  ) {
    const userId = request.user['userId'];
    return this.bailleurService.getOne(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/includePropr/:id')
  getOneIncluderop(
    @Param('id', ParseIntPipe) bailleurId: number,
    @Req() request: Request,
  ) {
    const userId = request.user['userId'];
    return this.bailleurService.getOneIncludeLocataire(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('web/:id')
  getOneByUserId(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.bailleurService.getOneByUserId(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajoutebailleur(
    @Req() request: Request,
    @Body() ajoutBailleurDto: AjoutBailleurDto,
  ) {
    const userId = request.user['userId'];
    return this.bailleurService.ajouteBailleur(userId, ajoutBailleurDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifibailleur(
    @Req() request: Request,
    @Body() modifBailleurDto: ModifBailleurDto,
  ) {
    const userId = request.user['userId'];
    return this.bailleurService.modifiBailleur(userId, modifBailleurDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) bailleurId: number,
  ) {
    const userId = request.user['userId'];
    return this.bailleurService.supone(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('allpayementbyBailleur/:id')
  allpayementbyBailleur(
    @Req() request: Request,
    @Param('id', ParseIntPipe) bailleurId: number,) {
    const userId = request.user['userId'];
    return this.bailleurService.getAllpayementbyBailleur(userId, bailleurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('allpayementbyCodeBailleur/:params')
  allpayementbyCodeBailleur(
    @Req() request: Request,
    @Param('params') params: string) {
    const userId = request.user['userId'];
    return this.bailleurService.getAllpayementbyCodeBailleur(userId, params);
  }


  
}
