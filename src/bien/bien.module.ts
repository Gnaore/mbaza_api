import { Module } from '@nestjs/common';
import { BienService } from './bien.service';
import { BienController } from './bien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienEntity } from './bien.entity';
import { TypebienModule } from 'src/typebien/typebien.module';

@Module({
  imports: [TypeOrmModule.forFeature([BienEntity]), TypebienModule],
  controllers: [BienController],
  providers: [BienService],
})
export class BienModule {}
