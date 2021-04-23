import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/*

* TIPOS DE PARAMETROS
* Routes Params => Paramentros de rotas
* Query Params => Filtros e buscas
* Body Params => 

*/

routes.put("/settings/:username", settingsController.update);
routes.get("/settings/:username", settingsController.findByUsername);
routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };