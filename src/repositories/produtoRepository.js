const pool = require('../config/db');


const getAllProdutos = async () => {
    console.log("Cheguei no repository");
    const sql = 'SELECT * FROM produtos';
    const resultado = await pool.query(sql);

    return resultado.rows;
};

const getProdutoByID = async (id) => {
    const valor = [id];
    const sql = 'SELECT * FROM produtos WHERE id = $1';
    const resultado = await pool.query(sql, valor);

    return resultado.rows[0];
};


module.exports = {getAllProdutos, getProdutoByID};