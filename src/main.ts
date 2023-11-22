import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import {  MessagesModule } from "./messages/messages.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(MessagesModule,new FastifyAdapter());
  console.log(app.getUrl());
  await app.listen(3000,'0.0.0.0');

}
bootstrap();
