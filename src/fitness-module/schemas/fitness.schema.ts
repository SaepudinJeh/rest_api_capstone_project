import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FitnessDocument = Fitness & Document;

@Schema()
export class Fitness {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  description: string;
}

export const FitnessSchema = SchemaFactory.createForClass(Fitness);
