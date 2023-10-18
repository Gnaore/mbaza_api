import { TypebienService } from './typebien.service';
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
import { AjoutTypebienDto } from './Dto/ajoutTypebienDto';

@Controller('typebien')
export class TypebienController {
  constructor(private readonly typebienService: TypebienService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAll(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.typebienService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/:id')
  getOne(
    @Param('id', ParseIntPipe) typebienId: number,
    @Req() request: Request,
  ) {
    const userId = request.user['userId'];
    return this.typebienService.getOne(userId, typebienId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajouteTypebien(
    @Req() request: Request,
    @Body() ajoutTypebienDto: AjoutTypebienDto,
  ) {
    const userId = request.user['userId'];
    return this.typebienService.ajouteTypebien(userId, ajoutTypebienDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('modif')
  modifiTypebien(
    @Req() request: Request,
    @Body() ajoutTypebienDto: AjoutTypebienDto,
  ) {
    const userId = request.user['userId'];
    return this.typebienService.modifiTypebien(userId, ajoutTypebienDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('sup/:id')
  delete(
    @Req() request: Request,
    @Param('id', ParseIntPipe) typebienId: number,
  ) {
    const userId = request.user['userId'];
    return this.typebienService.supone(userId, typebienId);
  }
}
