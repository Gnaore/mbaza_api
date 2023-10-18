import { Module } from '@nestjs/common';
import { TypebienController } from './typebien.controller';
import { TypebienService } from './typebien.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypebienEntity } from './typebien.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TypebienEntity])],
  controllers: [TypebienController],
  providers: [TypebienService]
})
export class TypebienModule {}
