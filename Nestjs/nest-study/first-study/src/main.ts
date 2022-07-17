import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
    // 정해진 형식외에 데이터는 받아오지 않는다.
  }))

  await app.listen(3000);
}
bootstrap();
