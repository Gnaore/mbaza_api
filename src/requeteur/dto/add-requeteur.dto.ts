import { IsEmail, IsNotEmpty } from "class-validator";

export class AddRequeteurDto {
    @IsNotEmpty()
    nomComplet: string;
    @IsNotEmpty()
    numeroTelephpne: string;
    @IsNotEmpty()
    @IsEmail()
    adresseMail: string;
}