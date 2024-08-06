import { IsNotEmpty } from 'class-validator';
import { LocataireEntity } from 'src/locataire/locataire.entity';

export class ProvisionRelanceDto {
  @IsNotEmpty()
  readonly mois: string;
  @IsNotEmpty()
  readonly annee: number;
  @IsNotEmpty()
  readonly locataire: LocataireEntity;
  @IsNotEmpty()
  readonly relance: Date;
}