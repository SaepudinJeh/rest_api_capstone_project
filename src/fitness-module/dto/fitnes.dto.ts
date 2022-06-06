import { IsNotEmpty } from 'class-validator';

export class FitnessDto {
  @IsNotEmpty()
  name: string;

  image: any;

  @IsNotEmpty()
  description: string;
}
