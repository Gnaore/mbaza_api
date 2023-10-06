import { Module } from '@nestjs/common';
import { BailleurController } from './bailleur.controller';
import { BailleurService } from './bailleur.service';

@Module({
  controllers: [BailleurController],
  providers: [BailleurService]
})
export class BailleurModule {}
