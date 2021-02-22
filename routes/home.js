const path = require('path');

const express = require('express');
const router = express.Router();

const produtos = require('../models/Produtos');

// Index
router.get('/', (req, res) => {
    return res.render('index', { 'produtos':produtos });
});

// Cadastrar
router.get('/produtos/cadastrar', (req, res) => {
    return res.render('produtos/cadastrar', { 'produtos':produtos });
});

module.exports = router;