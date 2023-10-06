import { IsNotEmpty, IsEmail } from 'class-validator';
export class SignupDto {
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  readonly contact: string;
  readonly paysId: number;
  readonly role: string;
  readonly statut: boolean;
  readonly lienphoto: string;
}
