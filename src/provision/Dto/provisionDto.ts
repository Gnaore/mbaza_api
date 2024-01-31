import { IsNotEmpty } from 'class-validator';

export class ProvisionDto {
  @IsNotEmpty()
  readonly mois: string;
  @IsNotEmpty()
  readonly annee: number;
  readonly status: boolean;
  readonly idWave: string;
  @IsNotEmpty()
  readonly locataireRef: string;
}