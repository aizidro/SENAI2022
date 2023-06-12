const express = require("express");
const router = express.Router(); //Importar o cors, npm i cors
const user = require("../controllers/user")

router.post("/login", user.autenticar) //instalar o npm i mysql

module.exports = router;