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
import { PaysService } from './pays.service';
import { AjoutPaysDto } from './Dto/ajoutPaysDto';

@Controller('pays')
export class PaysController {
    constructor(private readonly paysService: PaysService) {}
  
    @UseGuards(AuthGuard('jwt'))
    @Get('all')
    getAll(@Req() request: Request) {
      const userId = request.user['userId'];
      return this.paysService.getAll();
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    getOne(@Param('id', ParseIntPipe) paysId: number, @Req() request: Request) {
      const userId = request.user['userId'];
      return this.paysService.getOne(userId, paysId);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    ajouteTypebien(
      @Req() request: Request,
      @Body() ajoutPaysDto: AjoutPaysDto,
    ) {
      const userId = request.user['userId'];
      return this.paysService.ajoutePays(userId, ajoutPaysDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Put('modif')
    modifiTypebien(
      @Req() request: Request,
      @Body() ajoutPaysDto: AjoutPaysDto,
    ) {
      const userId = request.user['userId'];
      return this.paysService.modifiPays(userId, ajoutPaysDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete('sup/:id')
    delete(@Req() request: Request, @Param('id', ParseIntPipe) paysId: number) {
      const userId = request.user['userId'];
      return this.paysService.supone(userId, paysId);
    }
  }
  