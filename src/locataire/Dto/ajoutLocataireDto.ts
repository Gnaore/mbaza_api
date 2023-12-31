import { IsNotEmpty } from 'class-validator';
export class AjoutLocataireDto {
  readonly locataireId: number;
  readonly locataireRef: string;
  @IsNotEmpty()
  readonly locataireNom: string;
  @IsNotEmpty()
  readonly locataireDatenais: Date;
  @IsNotEmpty()
  readonly locataireNationalite: string;
  @IsNotEmpty()
  readonly locataireTel: string;
  @IsNotEmpty()
  readonly locataireEmail: string;
  @IsNotEmpty()
  readonly locataireSituationmatri: string;
  @IsNotEmpty()
  readonly proprieteCode: string;
  @IsNotEmpty()
  readonly bailleurId: number;
  
  readonly locataireNbrecharge: number;
  readonly locataireTypecontrat: string;
  readonly locataireProfession: string;
  readonly locataireSalaire: number;
  readonly locataireBanque: string;
  readonly locataireNomgarant: string;
  readonly locataireTelgarant: string;
  readonly locataireEmailgarant: string;
  readonly locatairePhoto: string;

}