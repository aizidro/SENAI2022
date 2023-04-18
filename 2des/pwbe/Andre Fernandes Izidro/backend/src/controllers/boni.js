const con = require('../dao/connect')

const cadastrar = (req, res) => {
    const { matricula, nomeCompleto, data_admissao, salario, data_Pagto, desempenho } = req.body;
    let string = `INSERT INTO funcionario VALUE('${matricula}','${nomeCompleto}','${data_admissao}',${salario},'${data_Pagto}',${desempenho})`;
    // A mensagem que será enviada para o banco de dados
    con.query(string, (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let string = "SELECT * FROM funcionario"
    con.query(string, (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {

    const { matricula, nome_completo, data_admissao, salario, data_pagto, desempenho } = req.body;
    let string = `UPDATE funcionario SET nome_completo='${nome_completo}', data_admissao='${data_admissao}', salario=${salario}, data_pagto='${data_pagto}',desempenho=${desempenho} WHERE matricula = '${matricula}'`
    con.query(string, (err, result) => {
        if (err == null) {
            if (result.affectedRows > 0) {
                res.json(result).end()
                return
            }
            res.send("não encontrado")
            return
        }
        res.json(err).end()
    })
}

const deletar = (req, res) => {
    const { matricula } = req.params
    let string = `DELETE FROM funcionario WHERE matricula = '${matricula}'`
    con.query(string, (err, result) => {
        if (err == null) {
            if (result.affectedRows > 0)
                res.status(204).end()
            else res.status(404).end()
        } else {
            res.json(err).status(400).end()
        }

    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    deletar
}