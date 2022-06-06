import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle('Fitness API')
    .setDescription('The API Fitness')
    .setVersion('0.0.1')
    .addTag('Fitness', 'API')
    .build();

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, documentSwagger);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
