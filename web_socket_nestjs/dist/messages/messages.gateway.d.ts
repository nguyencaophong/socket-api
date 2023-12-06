import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Socket, Server } from 'socket.io';
export declare class MessagesGateway {
    private readonly messagesService;
    server: Server;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto, client: Socket): Promise<{
        name: any;
        text: string;
    }>;
    findAll(): import("./entities/message.entity").Message[];
    joinRoom(name: string, client: Socket): unknown[];
    typing(isTyping: string, client: Socket): Promise<void>;
}
