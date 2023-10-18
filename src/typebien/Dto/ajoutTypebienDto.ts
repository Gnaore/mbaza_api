import { IsNotEmpty } from 'class-validator';
export class AjoutTypebienDto {
   typebienId: number;
  @IsNotEmpty()
   libelleTypebien: string;
}
