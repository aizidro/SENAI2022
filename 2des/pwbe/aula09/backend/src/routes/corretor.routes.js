const express = require("express");

const router = express.Router();

const Corretor = require("../controllers/corretor.controllers");

router.post("/corretor", Corretor.adicionar);
router.post("/login", Corretor.autenticar);
router.get("/corretores", Corretor.listar);

module.exports = router;