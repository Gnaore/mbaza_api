import { Module } from '@nestjs/common';
import { LocataireController } from './locataire.controller';
import { LocataireService } from './locataire.service';

@Module({
  controllers: [LocataireController],
  providers: [LocataireService]
})
export class LocataireModule {}
