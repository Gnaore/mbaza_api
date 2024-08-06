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
  readonly idWaveCallback: string;
  readonly amount: string;
  readonly when_completed: Date;
  readonly nummois: number;
  readonly relance: Date
}