const router = require ('express').Router();
const Paciente = require('../controllers/paciente.js');

router.get('/', Paciente.listar);
router.post('/cadastrar', Paciente.cadastrar);
router.put('/alterar', Paciente.alterar);
router.delete('/deletar/:id', Paciente.deletar);

module.exports = router;

