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
import { BailleurService } from './bailleur.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AjoutBailleurDto } from './Dto/ajoutBailleurDto';
import { ModifBailleurDto } from './Dto/modifBailleurDto';

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
}
