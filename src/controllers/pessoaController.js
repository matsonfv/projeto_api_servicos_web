const PessoaRepository = require('../repositories/pessoaRepository');

// Listar pessoas
const listarPessoas = async (req, res) => {
    try{
        const resultado = await PessoaRepository.getAllPessoas();
        console.log(resultado);
        res.json(resultado);
    } catch (erro) {
        console.error(erro.message)
        res.status(500).json({ mensagem:'Error Interno.' });
    }
};

// Buscar por ID
const buscarPessoasByID = async (req, res) => {
    try {
        const id = req.params.id;
        const pessoa = await PessoaRepository.getPessoasByID(id);

        if (!pessoa) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        return res.json(pessoa);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
};

// Buscar por CPF
const buscarPessoasByCPF = async (req, res) => {
    try {
        const cpf = req.params.cpf;
        const pessoa = await PessoaRepository.getPessoasByCPF(cpf);

        if (!pessoa) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }

        return res.json(pessoa);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno no servidor.' });
    }
};

// Criar pessoa 
const criarPessoas = async (req, res) => {
    try {
        const { nome, email, telefone, cpf, senha } = req.body;

        if (!nome || email || cpf || telefone || senha === undefined) {
            return res.status(400).json({ mensagem: 'Campo obrigatórios não preenchidos.' });
        }

        const novaPessoa = await PessoaRepository.createPessoas(nome, email, telefone, cpf, senha);
        return res.status(201).json(novaPessoa);
    } catch (erro) {
        console.error(erro.message);
        return res.status(500).json({ mensagem: 'Erro interno ao cadastrar usuário.' });
    }
};

module.exports = { listarPessoas, buscarPessoasByID, buscarPessoasByCPF, criarPessoas };