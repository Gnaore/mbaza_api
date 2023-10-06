import { Module } from '@nestjs/common';
import { TypebienController } from './typebien.controller';
import { TypebienService } from './typebien.service';

@Module({
  controllers: [TypebienController],
  providers: [TypebienService]
})
export class TypebienModule {}
