import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FitnessDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  description: string;
}
