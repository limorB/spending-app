/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // Enable CORS if needed
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(4000); // Set backend to run on port 4000
}
bootstrap();
