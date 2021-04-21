import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();

/*

* TIPOS DE PARAMETROS
* Routes Params => Paramentros de rotas
* Query Params => Filtros e buscas
* Body Params => 

*/

routes.post("/settings", settingsController.create)

export { routes };