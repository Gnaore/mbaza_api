import { IsNotEmpty} from "class-validator";
export class AjoutBanqueDto {
     banqueId: number;
    @IsNotEmpty()
     libelleBanque: string;
    @IsNotEmpty()
     sigleBanque: string;
    @IsNotEmpty()
    paysId: number;
    @IsNotEmpty()
     contactBanque: string;
     banqueCode: string;
}