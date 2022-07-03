import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());

  const configSwagger = new DocumentBuilder()
    .addServer('http://localhost:3000')
    .setTitle('Fitness API')
    .setDescription('The API Fitness')
    .setVersion('1.0.1')
    .addTag('Fitness', 'API')
    .build();

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, documentSwagger);

  app.useGlobalPipes(new ValidationPipe());

  const port: number = parseInt(`${process.env.PORT}`) || 3000;

  await app.listen(port);
}
bootstrap();
