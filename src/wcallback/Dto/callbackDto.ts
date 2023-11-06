import { IsNotEmpty } from 'class-validator';
import { CallbackDataDto } from './callbackDataDto';

export class CallbackDto {
  @IsNotEmpty()
  readonly id: string;
  @IsNotEmpty()
  readonly type: string;
  @IsNotEmpty()
  readonly data: CallbackDataDto;
}