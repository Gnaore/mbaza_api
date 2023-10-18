import { AuthGuard } from '@nestjs/passport';
import { AjoutBanqueDto } from './Dto/ajoutBanqueDto';
import { BanqueService } from './banque.service';
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

@Controller('banque')
export class BanqueController {
  constructor(private readonly banqueService: BanqueService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.banqueService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) banqueId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    //return this.banqueService.getOne(userId, banqueId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajouteBanque(
    @Req() request: Request,
    @Body() ajoutBanqueDto: AjoutBanqueDto,
  ) {
    const userId = request.user['userId'];
    return this.banqueService.ajouteBanque(userId, ajoutBanqueDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifiBanque(
    @Req() request: Request,
    @Body() ajoutBanqueDto: AjoutBanqueDto,
  ) {
    const userId = request.user['userId'];
    //return this.banqueService.modifiBanque(userId, ajoutBanqueDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(@Req() request: Request, @Param('id', ParseIntPipe) banqueId: number) {
    const userId = request.user['userId'];
    //return this.banqueService.supone(userId, banqueId);
  }
}
