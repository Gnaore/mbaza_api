import { Module } from '@nestjs/common';
import { MoisEntity } from './mois.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoisController } from './mois.controller';
import { MoisService } from './mois.service';

@Module({
    imports: [TypeOrmModule.forFeature([MoisEntity])],
    controllers: [MoisController],
    providers: [MoisService]
})
export class MoisModule {}
