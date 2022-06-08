import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://capstone-project:capstone-project@cluster0.vti15lz.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class DatabaseModule {}
