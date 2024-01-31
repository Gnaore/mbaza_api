import { IsNotEmpty } from 'class-validator';
export class MoiseDto {
  @IsNotEmpty()
  readonly moisNumero: number;
  @IsNotEmpty()
  readonly moisLibelle: string;
}