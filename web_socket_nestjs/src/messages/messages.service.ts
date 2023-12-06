import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{name:'Phong',text:'heyooo'}]
  clientToUser = {};

  create(createMessageDto: CreateMessageDto,clientId:string) {
    const message = {
      name: this.clientToUser[clientId],
      text: createMessageDto.text
    }
    this.messages.push(message as any)
    return message
  }

  findAll() {
    return this.messages;
  }

  identify(name:string,clientId:string){
    this.clientToUser[clientId] = name;

    return Object.values(this.clientToUser);
  }

  getClientName(clientId:string){
    return this.clientToUser[clientId]
  }
}
