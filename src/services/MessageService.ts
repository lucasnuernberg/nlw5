import { MessageRepository } from "../repositories/MessagesRepository";
import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";

interface IMessageCreate {
    admin_id?: string, // ?: mostra que é opcional
    text: string,
    user_id: string
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessageRepository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate) {

        
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id

        });

        await this.messagesRepository.save(message)

        return message

    }

    async listByUser(user_id: string) {
        
        const list = await this.messagesRepository.find({
            //find traz uma lista
            where: {user_id},
            relations: ["user"],
            

        });

        return list;
    }
}

export { MessagesService }