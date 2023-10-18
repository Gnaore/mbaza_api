import { IsNotEmpty} from "class-validator";
export class AjoutPaysDto {
     paysId: number;
    @IsNotEmpty()
     codePays: string;
    @IsNotEmpty()
     libellePays: string;
}