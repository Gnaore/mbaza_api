import { IsNotEmpty } from 'class-validator';
export class AjoutDemandeDto {
  readonly demandeId: number;
  @IsNotEmpty()
  readonly demandeBesoin: string;
  @IsNotEmpty()
  readonly demandeNomprenoms: string;
  @IsNotEmpty()
  readonly demandeTel: string;
  @IsNotEmpty()
  readonly demandeEmail: string;
  @IsNotEmpty()
  readonly demandeMessage: string;
}
