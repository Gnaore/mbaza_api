import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ProvisionDto } from './Dto/provisionDto';
import { ProvisionService } from './provision.service';


@Controller('provision')
export class ProvisionController {
  constructor(private provisionService: ProvisionService) { }
 

  @UseGuards(AuthGuard('jwt'))
  @Post('saveProvision')
  payementParTiers(
    @Req() request: Request,
    @Body() provisionDto: ProvisionDto[],
    @Body() locataireRef: string,
  ) {
    const userId = request.user['userId'];
    return this.provisionService.save(userId, provisionDto, locataireRef );
  }


}


