//Impotações
const express  = require("express");

//Corpo
const raiz = (req, res) =>{
    res.send("Back end ativo!");
}

const app = express();

const interacao = (req, res) => {
    let nome = req.query.nome;
    res.send(`Olá ${nome} , seu nome possui ${nome.length} letras`);
}

//Configuração HTTP 
app.get("/",raiz);
app.get("/interacao",interacao);
//Teste no console
app.listen(3000,()=>{
    console.log("Respondendo na porta 3000.")
});

