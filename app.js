const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const produtos = require('./models/Produtos');

const PORTA = process.env.PORT || 8080;
const server = express();

// Iniciar middlewares
server.use(logger);

// Home
server.get('/', (req, res) => {
    return res.send('Hello World');
    // return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lista todos os produtos
server.get('/api/v1/produtos', (req, res) => {
    return res.json(produtos);
});

// Buscar produto específico
server.get('/api/v1/produtos/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let produto = produtos.filter(produto => produto.id === id);

    if ((produto.length <= 0)) return res.status(404).json({ 'message':`Nenhum produto com o id ${id}` });
    return res.json(produto[0]);
});

// Definir pasta de arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));