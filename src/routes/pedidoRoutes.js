const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedidoController');

router.get('/', PedidoController.listarPedidos);
router.get('/:pedido_id', PedidoController.buscarPedidosByPessoasID);
router.post('/', PedidoController.criarPedido);

module.exports = router;