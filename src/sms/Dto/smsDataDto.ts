import { IsNotEmpty } from 'class-validator';
export class SmsDataDto {

  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
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
