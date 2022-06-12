import { ApiProperty } from '@nestjs/swagger';

export class UpdateFitnessDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: String, format: 'binary' })
  image: string;

  @ApiProperty({ type: String })
  description: string;
}
