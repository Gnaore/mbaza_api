import { IsNotEmpty } from 'class-validator';

export class ProvisionRelanceDto {
  @IsNotEmpty()
  readonly mois: string;
  @IsNotEmpty()
  readonly annee: number;
  @IsNotEmpty()
  readonly locataireRef: string;
  @IsNotEmpty()
  readonly relance: Date;
}