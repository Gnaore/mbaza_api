import { IsNotEmpty, IsEmail} from "class-validator";
export class ModifStatutUserDto {
    @IsNotEmpty()
    readonly statut: boolean;
    @IsNotEmpty()
    readonly userId: number;
}