import { Module } from '@nestjs/common';
import { DemandeService } from './demande.service';
import { DemandeController } from './demande.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandeEntity } from './demande.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DemandeEntity])],
  providers: [DemandeService],
  controllers: [DemandeController],
})
export class DemandeModule {}
