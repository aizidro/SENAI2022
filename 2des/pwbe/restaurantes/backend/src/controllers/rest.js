const con = require("../dao/connect")
const autenticar = (req, res) => {
    const {email, senha} = req.body;

    let query = `SELECT * FROM cliente WHERE email =  '${email}' AND senha = '${senha}'`;

con.query(query, (err,response) => {
    if(err == undefined) {
        if(response.length == 0) {
            res.status(401).json({"msg":"Matricula ou Senha Invalidos"}).end();
        }else {
            let corretor = response[0];

            delete corretor.senha;

            res.status(200).json(corretor).end();
        }
    }else {
        res.status(401).json(err).end();
    }
});
}

const listar = (req, res) => {
    let query = 'SELECT * FROM vw_restaurante'
    con.query(query, (err,response) => {
        if(err == null) {
            res.status(200).json(response).end()
        }else {
            res.status(401).json(err).end();
        }
    })
}



module.exports = {
autenticar,
listar
}