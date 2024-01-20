import { Module } from '@nestjs/common';
import { PaysController } from './pays.controller';
import { PaysService } from './pays.service';
import { PaysEntity } from './pays.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PaysEntity])],
  controllers: [PaysController],
  providers: [PaysService],
  exports: [PaysService]
})
export class PaysModule {}
