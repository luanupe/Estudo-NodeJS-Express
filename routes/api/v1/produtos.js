const uuid = require('uuid');
const express = require('express');
const router = express.Router();

const produtos = require('../../../models/Produtos');

// Lista todos os produtos
router.get('/', (req, res) => {
    return res.json(produtos);
});

// Cadastrar um produto
router.post('/criar', (req, res) => {
    try {
        // Validar o nome do produto
        if ((!req.body.nome)) throw new Error("Por favor, insira o nome do produto");

        // Criar novo produto
        let produto = { id:uuid.v4(), nome:req.body.nome };
        produtos.push(produto);
        return res.json(produto);
    }
    catch (e) {
        return res.status(400).json({ message:e.message });
    }
});

// Buscar produto específico
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let produto = produtos.filter(produto => produto.id === id);

    if ((produto.length <= 0)) return res.status(404).json({ 'message':`Nenhum produto com o id ${id}` });
    return res.json(produto[0]);
});

module.exports = router;