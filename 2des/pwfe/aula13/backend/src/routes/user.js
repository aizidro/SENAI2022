const express = require("express");
const router = express.Router(); //Importar o cors, npm i cors
const user = require("../controllers/user")

router.post("/login", user.autenticar) //instalar o npm i mysql
router.put("/alterar", user.alterar)
router.get("/listar/:id", user.listar)
router.get("/endereco/:id", user.listarEndereco)
router.get("/telefones/:id", user.listarTelefones)

module.exports = router;