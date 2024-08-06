import { IsNotEmpty, IsEmail } from 'class-validator';
export class SignupDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  contact: string;
  paysId: number;
  role: string;
  statut: boolean;
  lienphoto: string;
  password: string;
  bailleurId: number;
  locataireQrcode : string;

}
