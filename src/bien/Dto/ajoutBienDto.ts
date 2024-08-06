import { IsNotEmpty } from 'class-validator';
export class AjoutBienDto {
  readonly bienId: number;
  @IsNotEmpty()
  readonly bienLibelle: string;
  @IsNotEmpty()
  readonly bienCategorie: string;
  @IsNotEmpty()
  readonly bienDescription: string;
  readonly bienSurface: number;
  readonly bienNbrePiece: number;
  @IsNotEmpty()
  readonly bienPrix: number;
  @IsNotEmpty()
  readonly bienVille: string;
  @IsNotEmpty()
  readonly bienCommuneQuartier: string;
  @IsNotEmpty()
  readonly bienAdresse: string;
  @IsNotEmpty()
  readonly bienNomBailleur: string;
  @IsNotEmpty()
  readonly bienContactBailleur: string;
  @IsNotEmpty()
  readonly bienContrat: string;
  @IsNotEmpty()
  readonly bienImage: string;
  @IsNotEmpty()
  readonly typebienId: number;
  readonly bienOqp: boolean;
}
