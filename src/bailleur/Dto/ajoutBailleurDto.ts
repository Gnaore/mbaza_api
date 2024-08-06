import { IsNotEmpty } from 'class-validator';
export class AjoutBailleurDto {
  @IsNotEmpty()
  readonly bailleurNomPrenoms: string;
  @IsNotEmpty()
  readonly bailleurTelephone: string;
  @IsNotEmpty()
  readonly bailleurAdresse: string;
  @IsNotEmpty()
  readonly bailleurEmail: string;
  @IsNotEmpty()
  readonly bailleurDateNaissance: Date;
  readonly bailleurNumero: string;
  @IsNotEmpty()
  readonly banqueId: number;
  readonly bailleurNumCompte: string;
  @IsNotEmpty()
  readonly bailleurRevenu: number;
  readonly bailleurTaux: number;
  readonly bailleurPersUrgence: string;
  readonly bailleurTelUrgence: string;
  readonly bailleurRelationUrgence: string;
  @IsNotEmpty()
  readonly bailleurlienCNI: string;
  @IsNotEmpty()
  readonly bailleurLienPhoto: string;
  readonly bailleurEmailHussier: string;
  readonly bailleurTelHussier: string;
}
