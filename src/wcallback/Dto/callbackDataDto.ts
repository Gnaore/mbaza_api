import { IsNotEmpty } from 'class-validator';

export class CallbackDataDto {
  @IsNotEmpty()
  readonly id: string;
  @IsNotEmpty()
  readonly amount: string;
  @IsNotEmpty()
  readonly checkout_status: string;
  @IsNotEmpty()
  readonly client_reference: string;
  @IsNotEmpty()
  readonly currency: string;
  @IsNotEmpty()
  readonly error_url: string;
  @IsNotEmpty()
  readonly payment_status: string;
  @IsNotEmpty()
  readonly success_url: string;
  @IsNotEmpty()
  readonly wave_launch_url: string;
  @IsNotEmpty()
  readonly when_completed: string;
  @IsNotEmpty()
  readonly when_created: string;
  @IsNotEmpty()
  readonly when_expires: string;
}