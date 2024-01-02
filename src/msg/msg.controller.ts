import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { MsgService } from './msg.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AjoutMsgDto } from './Dto/ajoutMsgDto';
import { LuMsgDto } from './Dto/luMsgDto';

@Controller('msg')
export class MsgController {
    
  constructor(private readonly msgService: MsgService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('all')
  getAllmsg(@Req() request: Request) {
    const userId = request.user['userId'];
    return this.msgService.allMsg();
  }
//Bailleur
  @UseGuards(AuthGuard('jwt'))
  @Get('envoye/:id')
  getAllMsgEnvoye(@Param('id', ParseIntPipe) expediteurId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.msgService.allMsgEnvoye(userId, expediteurId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('recu/:id')
  getAllMsgRecu(@Param('id', ParseIntPipe) destinataireId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.msgService.allMsgRecu(userId, destinataireId);
  }
//Fin Bailleur

//Locataire
@UseGuards(AuthGuard('jwt'))
@Get('envoyeloc/:id')
getAllMsgEnvoyeloc(@Param('id', ParseIntPipe) expediteurId: number, @Req() request: Request) {
  const userId = request.user['userId'];
  return this.msgService.allMsgEnvoyeLocatire(userId, expediteurId);
}

@UseGuards(AuthGuard('jwt'))
@Get('reculoc/:id')
getAllMsgReculoc(@Param('id', ParseIntPipe) destinataireId: number, @Req() request: Request) {
  const userId = request.user['userId'];
  return this.msgService.allMsgRecuLocatire(userId, destinataireId);
}
// Fin Locataire


  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  ajouteMsg(@Req() request: Request, @Body() ajoutMsgDto: AjoutMsgDto) {
    const userId = request.user['userId'];
    return this.msgService.ajouteMsg(userId, ajoutMsgDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('lu')
  marquLuMsg(@Req() request: Request, @Body() luMsg: LuMsgDto) {
    const userId = request.user['userId'];
    return this.msgService.marquLuMsg(userId, luMsg);
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('nonlu/:id')
  getAllMsgNonLu(@Param('id', ParseIntPipe) destinataireId: number, @Req() request: Request) {
    const userId = request.user['userId'];
    return this.msgService.allMsgNonLu(userId, destinataireId);
  }

}
