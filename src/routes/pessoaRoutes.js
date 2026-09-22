const express = require('express');
const router = express.Router();
const PessoaController = require('../controllers/pessoaController');

router.get('/', PessoaController.listarPessoas);
router.get('/:id', PessoaController.buscarPessoasByID);
router.get('/:cpf', PessoaController.buscarPessoasByCPF);
router.post('/', PessoaController.criarPessoas);

module.exports = router;