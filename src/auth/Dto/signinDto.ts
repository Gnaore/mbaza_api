import { IsNotEmpty, IsEmail } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  readonly password: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
