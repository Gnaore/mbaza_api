import { Module } from '@nestjs/common';
import { MsgController } from './msg.controller';
import { MsgService } from './msg.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsgEntity } from './msg.entity';
import { AppService } from 'src/app.service';

@Module({
  imports: [TypeOrmModule.forFeature([MsgEntity])],
  controllers: [MsgController],
  providers: [MsgService, AppService]
})
export class MsgModule {}
