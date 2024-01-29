import { IsNotEmpty } from 'class-validator';
export class FinContratDto {
  @IsNotEmpty()
  readonly locataireRef: string;
  @IsNotEmpty()
  readonly locataireEmail: string;
  @IsNotEmpty()
  readonly proprieteCode: string;
}
