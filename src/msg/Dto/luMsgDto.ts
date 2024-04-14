import { IsNotEmpty } from 'class-validator';
export class LuMsgDto {
  @IsNotEmpty()
  readonly msgId: number;
  @IsNotEmpty()
  msgLu: boolean;
}