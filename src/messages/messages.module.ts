import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { MessagesRepository } from './repositories/messages.repository';
import { MessagesService } from './services/messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
