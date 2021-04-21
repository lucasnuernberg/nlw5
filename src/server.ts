import express from "express";

import "./database"; // cria a conexão

import { routes } from "./routes"

const app = express();

app.use(express.json())

app.use(routes);

/*

* GET -> BUSCAS
* POST -> CRIAÇÃO
* PUT -> ALTERAÇÃO
* DELETE -> DELETAR
* PATCH -> ALTERAÇÃO ESPECÍFICA

*/

app.listen(3333, ()=> {console.log('Server is running 3333')});