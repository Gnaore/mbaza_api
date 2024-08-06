import { IsNotEmpty, IsOptional } from "class-validator";
import { SouhaitEnums } from "src/enums/souhaits.enums";

export class AddRequeteDto {
  @IsNotEmpty()
  nomComplet;

  @IsNotEmpty()
  numeroTelephpne;

  @IsNotEmpty()
  adresseMail;

  @IsNotEmpty()
  categorieRequete: string;

  @IsNotEmpty()
  typeRequete: string;

  @IsNotEmpty()
  infoLocalisation: string;

  @IsNotEmpty()
  infoCritere: string;

  // @IsOptional()
  // bienMeuble: boolean;

  @IsOptional()
  bienMeubleDatedebut: Date;

  @IsOptional()
  bienMeubleDatefin: Date;

  @IsOptional()
  montantDebut: number;

  @IsOptional()
  nombrePiece: number;

  @IsOptional()
  nombrePlace: number;

  @IsNotEmpty()
  montantFin: number;

  @IsOptional()
  souhait: string;

  @IsOptional()
  superficie: number;
}