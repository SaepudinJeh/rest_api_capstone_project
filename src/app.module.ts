import { Module } from '@nestjs/common';
import { FitnessModule } from './fitness-module/fitness.module';
import { DatabaseModule } from './database.module/mongoose.module';
import { CloudinaryModule } from './cloudinary.module/cloudinary.module';

@Module({
  imports: [FitnessModule, DatabaseModule, CloudinaryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
