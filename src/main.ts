import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, 
      forbidNonWhitelisted: true,
      whitelist: true
    }),
  )
  await app.listen(PORT, () => console.log("Server listening on PORT", PORT));
}
bootstrap();
