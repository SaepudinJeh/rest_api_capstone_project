import { Module } from '@nestjs/common';
import { FitnessController } from './controllers/fitness.controller';
import { FitnessService } from './services/fitness.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Fitness, FitnessSchema } from './schemas/fitness.schema';
import { CloudinaryModule } from 'src/cloudinary.module/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Fitness.name, schema: FitnessSchema }]),
    CloudinaryModule,
  ],
  controllers: [FitnessController],
  providers: [FitnessService],
})
export class FitnessModule {}
