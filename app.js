const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const PORTA = process.env.PORT || 8080;
const server = express();

// Iniciar middlewares
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

// Rota API de Produtos
server.use('/api/v1/produtos', require(path.join(__dirname, 'routes', 'api', 'v1', 'produtos.js')));

// Definir pasta de arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));