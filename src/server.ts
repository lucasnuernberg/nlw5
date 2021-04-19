import express, { response } from "express";

const app = express();

/*

* GET -> BUSCAS
* POST -> CRIAÇÃO
* PUT -> ALTERAÇÃO
* DELETE -> DELETAR
* PATCH -> ALTERAÇÃO ESPECÍFICA

*/

app.get("/", (resquest, response) => {
    return response.json({
        nome: "Lucas"
    })
});

app.post("/users", (request, response) => {
    return response.json({usuario: "salvo"})
})

app.listen(3333, ()=> {console.log('Server is running 3333')});