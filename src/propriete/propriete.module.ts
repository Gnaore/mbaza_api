import { Module } from '@nestjs/common';
import { ProprieteController } from './propriete.controller';
import { ProprieteService } from './propriete.service';

@Module({
  controllers: [ProprieteController],
  providers: [ProprieteService]
})
export class ProprieteModule {}
