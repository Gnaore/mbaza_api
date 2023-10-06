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
import { AjoutBienDto } from './Dto/ajoutBienDto';
import { BienService } from './bien.service';

@Controller('bien')
export class BienController {
  constructor(private readonly bienService: BienService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.bienService.getAll();
  }

  @Get('allweb')
  getAllweb() {
    return this.bienService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) bienId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.bienService.getOne(userId, bienId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajouteBien(@Req() request: Request, @Body() ajoutBienDto: AjoutBienDto) {
    const userId = request.user['userId'];
    return this.bienService.ajouteBien(userId, ajoutBienDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifiBien(@Req() request: Request, @Body() ajoutBienDto: AjoutBienDto) {
    const userId = request.user['userId'];
    return this.bienService.modifiBien(userId, ajoutBienDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(@Req() request: Request, @Param('id', ParseIntPipe) bienId: number) {
    const userId = request.user['userId'];
    return this.bienService.supone(userId, bienId);
  }
}
