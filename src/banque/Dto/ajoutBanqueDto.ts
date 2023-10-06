import { IsNotEmpty} from "class-validator";
export class AjoutBanqueDto {
    readonly banqueId: number;
    @IsNotEmpty()
    readonly libelleBanque: string;
    @IsNotEmpty()
    readonly sigleBanque: string;
    @IsNotEmpty()
    readonly paysId: number;
    @IsNotEmpty()
    readonly contactBanque: string;
}