import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FitnessModule } from './fitness-module/fitness.module';
import { DatabaseModule } from './database.module/mongoose.module';
import { CloudinaryModule } from './cloudinary.module/cloudinary.module';

@Module({
  imports: [FitnessModule, DatabaseModule, CloudinaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
