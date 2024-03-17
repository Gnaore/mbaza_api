import { IsNotEmpty } from 'class-validator';
export class SmsDto {

  @IsNotEmpty()
  sender: string;
  @IsNotEmpty()
  to: string;
  @IsNotEmpty()
  text: string;
  @IsNotEmpty()
  url: string;
  @IsNotEmpty()
  type: string;
  @IsNotEmpty()
  datetime: string;
}
