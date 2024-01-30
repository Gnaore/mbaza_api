import { IsNotEmpty } from 'class-validator';

export class PayementDto {
  @IsNotEmpty()
  readonly amount: string;
  @IsNotEmpty()
  readonly currency: string;
  @IsNotEmpty()
  readonly error_url: string;
  @IsNotEmpty()
  readonly success_url: string;
  @IsNotEmpty()
  readonly proprieteId: number;
  @IsNotEmpty()
  readonly locataireRef: string;
  @IsNotEmpty()
  readonly mois: string;
  @IsNotEmpty()
  readonly annee: string;
  @IsNotEmpty()
  readonly nomLocataire: string;
  @IsNotEmpty()
  readonly emailBailleur: string;

}