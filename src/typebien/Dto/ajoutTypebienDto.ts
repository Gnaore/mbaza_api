import { IsNotEmpty } from 'class-validator';
export class AjoutTypebienDto {
  readonly typebienId: number;
  @IsNotEmpty()
  readonly libelleTypebien: string;
}
