import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enforce global security, logging, and compliance middleware here
  await app.listen(3000);
}
bootstrap();
