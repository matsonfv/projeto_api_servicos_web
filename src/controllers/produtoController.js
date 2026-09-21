const ProdutoRepository = require('../repositories/produtoRepository');

const listarProdutos = async (req, res) => {
    try{
        const resultado = await ProdutoRepository.getAllProdutos();
        res.json(resultado);
    }catch(erro){
        console.error(erro.message)
        res.status(500).json({mensagem:'Error Interno.'});   
    }
   
};

// Buscar por ID
const buscarProdutoPorID = async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await ProdutoRepository.getProdutosByID(id);

        if (!produto) {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        }

        return res.json(produto);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
};

// Criar produto 
const criarProduto = async (req, res) => {
    try {
        const { nome, preco, descricao } = req.body;

        if (!nome || preco === undefined) {
            return res.status(400).json({ mensagem: 'Nome e preço são obrigatórios.' });
        }

        const novoProduto = await ProdutoRepository.createProduto(nome, preco, descricao);
        return res.status(201).json(novoProduto);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno ao cadastrar produto.' });
    }
};

module.exports = { listarProdutos, buscarProdutoPorID, criarProduto };