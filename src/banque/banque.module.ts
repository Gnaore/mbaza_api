import { Module } from '@nestjs/common';
import { BanqueController } from './banque.controller';
import { BanqueService } from './banque.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaysEntity } from 'src/pays/pays.entity';
import { BanqueEntity } from './banque.entity';
import { PaysModule } from 'src/pays/pays.module';
import { PaysService } from 'src/pays/pays.service';

@Module({
  imports:[TypeOrmModule.forFeature([BanqueEntity]), PaysModule ],
  controllers: [BanqueController],
  providers: [BanqueService]
})
export class BanqueModule {}
