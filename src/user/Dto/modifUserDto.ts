import { IsNotEmpty, IsEmail} from "class-validator";
export class ModifUserDto {
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
    @IsNotEmpty()
    readonly userId: number;
}