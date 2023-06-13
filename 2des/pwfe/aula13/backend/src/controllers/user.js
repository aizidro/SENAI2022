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
    
                //delete usuario.senha;
    
                res.status(200).json(usuario).end();
            }
        }else {
            res.status(401).json(err).end();
        }
    });
}

const alterar = (req, res) => {

    const {email,senha,nome,cpf,nascimento,id} = req.body

    let query = `UPDATE users SET email = '${email}', senha = password('${senha}'), nome = '${nome}', cpf = '${cpf}', nascimento = '${nascimento}' WHERE id = ${id}`;

    con.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })}

    const listar = (req, res) => {
        const {id} = req.params
        let query = `SELECT * FROM users WHERE id = ${id}`
        con.query(query, (err, result) => {
            if (err == null) {
                res.json(result).status(200).end();
            } else {
                res.json(err).status(400).end();
            }
        })}

        const listarEndereco = (req, res) => {
            const {id} = req.params
            let query = `SELECT * FROM endereco WHERE id_users = ${id}`
            con.query(query, (err, result) => {
                if (err == null) {
                    res.json(result).status(200).end();
                } else {
                    res.json(err).status(400).end();
                }
            })}

            const listarTelefones = (req, res) => {
                const {id} = req.params
                let query = `SELECT * FROM telefones WHERE id_users = ${id}`
                con.query(query, (err, result) => {
                    if (err == null) {
                        res.json(result).status(200).end();
                    } else {
                        res.json(err).status(400).end();
                    }
                })}

                const alterarEnd = (req, res) => {

                    const { id_users,  cep,  numero, complemento } = req.body
                
                    let query = `UPDATE endereco SET cep = '${cep}', numero = '${numero}', complemento = '${complemento}' WHERE id_users = ${id_users}`;
                
                    con.query(query, (err, result) => {
                        if (err == null) {
                            res.json(result).status(200).end();
                        } else {
                            res.json(err).status(400).end();
                        }
                    })}
        

    module.exports = {
        autenticar,
        alterar,
        listar,
        listarEndereco,
        listarTelefones,
        alterarEnd
    }