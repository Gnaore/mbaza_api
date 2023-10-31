import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // pour Gerer le CORS qui block la communication entre site distant
  app.useGlobalPipes(new ValidationPipe()); //Pour gerer la validation
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
