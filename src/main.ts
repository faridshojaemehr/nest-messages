import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    MessagesModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, '0.0.0.0');
  console.log(`Application running on address ${await app.getUrl()}`);
}
bootstrap();
