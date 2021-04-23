import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";

interface IConnectionCreate {
    admin_id?: string, // ?: mostra que é opcional
    id?: string,
    user_id: string,
    socket_id: string
}

class ConnectionsService {
    private connectionsRepository: Repository<Connection>;

    constructor() {
        this.connectionsRepository = getCustomRepository(ConnectionsRepository);
    }

    async create({ admin_id, socket_id, user_id, id }: IConnectionCreate) {

        
        const connection = this.connectionsRepository.create({
            admin_id,
            socket_id,
            user_id,
            id

        });

        await this.connectionsRepository.save(connection)

        return connection

    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionsRepository.findOne({
            user_id
        })
        return connection;
    }

    async listByUser(user_id: string) {
        
        const list = await this.connectionsRepository.find({
            //find traz uma lista
            where: {user_id},
            relations: ["user"],
            

        });

        return list;
    }
}

export { ConnectionsService }