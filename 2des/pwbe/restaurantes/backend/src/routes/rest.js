const express = require("express");
const router = express.Router();
const restaurante = require("../controllers/rest")

router.post("/login", restaurante.autenticar)
router.get("/lista", restaurante.listar)

module.exports = router;