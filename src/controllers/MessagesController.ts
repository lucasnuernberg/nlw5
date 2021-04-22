import { Request, Response } from "express";
import { MessagesService } from "../services/MessageService";


class MessagesController {
    async create(request: Request, response: Response): Promise<Response> {
        const { admin_id, text, user_id } = request.body;
        
        const messageService = new MessagesService();

        const message = await messageService.create({
            admin_id,
            text,
            user_id
        });    

        try {          

            return response.json(message);

        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }

    }

    async showByUser(request: Request, response: Response) {
        const { id } = request.params;

        const messagesService = new MessagesService();
        const list = await messagesService.listByUser(id)

        return response.json(list);
    }
}


export { MessagesController }