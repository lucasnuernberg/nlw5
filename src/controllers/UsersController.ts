import { Request, Response } from "express";
import { UsersService } from "../services/UserService";


class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        
        const userService = new UsersService();

        const user = await userService.create(email); 

        

        try {          

            return response.json(user);

        } catch (err) {
            return response.status(400).json({
                message: err.message,
            })
        }

    }
}


export { UsersController }