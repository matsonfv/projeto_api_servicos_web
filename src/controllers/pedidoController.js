const PedidoRepository = require('../repositories/pedidoRepository');

// Listar pedidos
const listarPedidos = async (req, res) => {
    try{
        const resultado = await PedidoRepository.getAllPedidos();
        console.log(resultado);
        res.json(resultado);
    } catch (erro) {
        console.error(erro.message)
        res.status(500).json({ mensagem:'Error Interno.' });
    }
};

// Buscar pedido por ID
const buscarPedidosByPessoasID = async (req, res) => {
    try {
        const pedido_id = req.params.pedido_id;
        const pedido = await PedidoRepository.getPedidosByPessoaId(pedido_id);

        if (!pedido) {
            alert("Pedido não encontrado");
            return res.status(404).json({ mensagem: 'Pedido não encontrado.' });
        }

        return res.json(pedido);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
};

// Criar pedido 
const criarPedido = async (req, res) => {
    try {
        const { pessoa_id, produto_id, quantidade } = req.body;

        if (!pessoa_id || !produto_id || !quantidade === undefined) {
            return res.status(400).json({ mensagem: 'Campo obrigatórios não preenchidos.' });
        }

        const novoPedido = await PedidoRepository.createPedido(pessoa_id, produto_id, quantidade);
        return res.status(201).json(novoPedido);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno ao cadastrar pedido.' });
    }
};

module.exports = { listarPedidos, buscarPedidosByPessoasID, criarPedido };