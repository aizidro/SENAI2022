const express = require("express");
const router = express.Router();

const Item = require('../controllers/item.js');

router.get('/', Item.teste);
router.get('/item/listar', Item.listar);
router.post('/item/criar', Item.criar);
router.delete('/item/excluir', Item.excluir);

module.exports = router