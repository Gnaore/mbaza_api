import { IsNotEmpty} from "class-validator";
export class AjoutPaysDto {
    readonly paysId: number;
    @IsNotEmpty()
    readonly codePays: string;
    @IsNotEmpty()
    readonly libellePays: string;
}