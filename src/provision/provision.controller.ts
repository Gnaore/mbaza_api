import {
  Body,
  Controller,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProvisionDto } from './Dto/provisionDto';
import { ProvisionService } from './provision.service';
import { LocataireEntity } from 'src/locataire/locataire.entity';
import { ProvisionRelanceDto } from './Dto/provisionRelanceDto';


@Controller('provision')
export class ProvisionController {
  constructor(private provisionService: ProvisionService) { }
 

  @UseGuards(AuthGuard('jwt'))
  @Post('saveProvision')
  payementParTiers(
    @Req() request: Request,
    @Body() provisionDto: ProvisionDto[],
    @Body() locataire: LocataireEntity,
  ) {
    const userId = request.user['userId'];
    return this.provisionService.save(userId, provisionDto, locataire );
  }

  @UseGuards(AuthGuard('jwt'))
  @Put('relance')
  relance(
    @Req() request: Request,
    @Body() provisionRelanceDto: ProvisionRelanceDto,
  ) {
    const userId = request.user['userId'];
    return this.provisionService.updateRelance(userId, provisionRelanceDto );
  }


}


