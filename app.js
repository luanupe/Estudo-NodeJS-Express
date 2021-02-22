const express = require('express');
const path = require('path');

const logger = require('./middleware/logger');

const PORTA = process.env.PORT || 8080;
const server = express();

// Iniciar middlewares
server.use(logger);

// Lista todos os produtos
server.get('/', (req, res) => {
    // res.send('Hello World');
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));

    var produtos = [ {id:1, nome:'Batata Doce Roxa'}, {id:2, nome:'Filé de Peito de Frango'} ];
    res.json(produtos);
});

// Definir pasta de arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));