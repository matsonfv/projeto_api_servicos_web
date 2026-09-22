const pool = require('../config/db');


const getAllPessoas = async () => {
    const sql = 'SELECT * FROM pessoas';
    const resultado = await pool.query(sql);

    return resultado.rows;
};

const getPessoasByID = async (id) => {
    const sql = 'SELECT * FROM pessoas WHERE id = $1';
    const resultado = await pool.query(sql, [id]);

    return resultado.rows[0];
};

const getPessoasByCPF = async (cpf) => {
    const sql = 'SELECT * FROM pessoas WHERE cpf = $1';
    const resultado = await pool.query(sql, [cpf]);

    return resultado.rows[0];
};

const createPessoa = async (nome, email, telefone, cpf, senha) => {
    const sql = 'INSERT INTO pessoas (nome, email, telefone, cpf, senha) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const resultado = await pool.query(sql, [nome, email, telefone, cpf, senha]);

    return resultado.rows[0];
};

module.exports = {getAllPessoas, getPessoasByID, getPessoasByCPF, createPessoa};