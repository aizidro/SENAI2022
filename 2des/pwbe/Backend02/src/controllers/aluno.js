const criar = (req, res) => {
    res.send("criar").status(200).end();
};
const listar = (req,res) => {
    res.send("listar").status(200).end();
};

const atualizar = (req,res) => {
    res.send("atualizar").status(200).end();
};

const apagar = (req,res) => {
    res.send("apagar").status(200).end();
};

module.exports = {
    criar,
    listar,
    atualizar,
    apagar
}

    
