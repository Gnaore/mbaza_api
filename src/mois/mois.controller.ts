import { AuthGuard } from '@nestjs/passport';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MoisService } from './mois.service';

@Controller('mois')
export class MoisController {

  constructor(private moisService: MoisService) {}

  @Get('all')
  getAll() {
    return this.moisService.getAll();
  }

  @Get('create')
  creationMois() {
    return this.moisService.creationMois();
  }

  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) moisDonne: number) {
    return this.moisService.getAllSup(moisDonne);
  }



}
