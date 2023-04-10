const express = require("express");
const app = express();

app.use(express.json());

app.post('/criar',(requeste,response) => {
    let { id, nome, matricula} = requeste.body;

    console.log(id, nome, matricula);

    response.status(200).end();
})

app.get("/info/:marca/:modelo/", (request,response) => {
    let { marca, modelo } = request.params;

    console.log(marca, modelo);

    response.status(200).end();
});

app.get("/listar",(request, response) => {
    // let nome = req.query.nome;
    // let matricula = req.query.matricula;

    let { nome, matricula} = request.query;

    console.log(nome,matricula);

    response.status(200).send("LISTANDO").end();
});



app.listen(3000, () => {
    console.log("Rodando na 3000");

});