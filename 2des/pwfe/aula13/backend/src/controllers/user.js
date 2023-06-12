const con = require("../dao/connect")

const autenticar = (req, res) => {
const {email,senha} = req.body // ele vai pegar os elementos do email e da senha 
let query = `SELECT * FROM users WHERE email = '${email}' AND senha = password('${senha}')`;   // con esta pegando do banco de dados query é a msg que ele vai enviar

    con.query(query, (err,response) => {
        if(err == undefined) {
            if(response.length == 0) { // length ve o tamanho da resposta o banco de dados sempre vai retornar uma resposta mesmo que seja 0 ent se a resposrta for zero ele vai retornar matricula ou senha invalida
                res.status(401).json({"msg":"Matricula ou Senha Invalidos"}).end();
            }else {
                let usuario = response[0];
    
                delete usuario.senha;
    
                res.status(200).json(usuario).end();
            }
        }else {
            res.status(401).json(err).end();
        }
    });
}
        

    module.exports = {autenticar}