import { IsNotEmpty } from 'class-validator';

export class PayementWaveDto {
  @IsNotEmpty()
  readonly amount: string;
  @IsNotEmpty()
  readonly currency: string;
  @IsNotEmpty()
  readonly error_url: string;
  @IsNotEmpty()
  readonly success_url: string;
}