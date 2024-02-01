import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvisionEntity } from './provision.entity';
import { ProvisionController } from './provision.controller';
import { ProvisionService } from './provision.service';
import { LocataireModule } from 'src/locataire/locataire.module';

@Module({
    imports: [TypeOrmModule.forFeature([ProvisionEntity])],
    controllers: [ProvisionController],
    providers: [ProvisionService],
    exports: [ProvisionService],
})
export class ProvisionModule {}
