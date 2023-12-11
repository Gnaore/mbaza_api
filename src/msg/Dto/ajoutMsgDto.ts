import { IsNotEmpty } from 'class-validator';
export class AjoutMsgDto {
  @IsNotEmpty()
  readonly msgObjet: string;
  @IsNotEmpty()
  readonly msgMessage: string;
  @IsNotEmpty()
  readonly expediteurId: number;
  @IsNotEmpty()
  readonly destinataireId: number;

}