const con = require('../dao/connect')

const cadastrar = (req, res) => {
    const {matricula,nomeCompleto,data_admissao,salario,data_Pagto,desempenho} = req.body;
    let string = `INSERT INTO funcionario VALUE('${matricula}','${nomeCompleto}','${ data_admissao}',${salario},'${data_Pagto}',${desempenho})`;
    // A mensagem que será enviada para o banco de dados
    con.query(string,(err, result) =>{
        if(err == null)
        res.status(201).end()
        else
        res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let string = "SELECT * FROM funcionario" 
    con.query(string,(err, result) =>{
        if(err == null)
        res.json(result).end()
    })
}

const alterar  = (req, res) => {
    
     const {matricula,nomeCompleto,data_admissao,salario,data_Pagto,desempenho} = req.body; 
     let string = `UPDATE funcionario SET matricula=${matricula}, nome_completo='${nomeCompleto}', data_admissao='${data_admissao}', salario=${salario}, data_Pagto=${data_Pagto},desempenho=${desempenho}`
     con.query(string,(err, result) =>{
        if(err == null){
            if(result.affectedRows > 0){
                res.json(result).end()
                return
            }
            res.send("não encontrado")
            return
        }
        res.json(err).end()
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar
}