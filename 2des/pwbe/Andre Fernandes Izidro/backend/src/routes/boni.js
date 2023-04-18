const express = require("express");
const router = express.Router();


const boni = require('../controllers/boni.js');

router.post("/cadastrar", boni.cadastrar)
router.get("/listar", boni.listar)
router.put("/alterar", boni.alterar)
router.delete("/deletar/:matricula", boni.deletar)

module.exports = router;