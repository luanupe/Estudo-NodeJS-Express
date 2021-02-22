const express = require('express');
const path = require('path');
const moment = require('moment');

const PORTA = process.env.PORT || 8080;
const server = express();

// Middleware fazer log das requisições
const logger = (req, res, next) => {
    let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    let tempo = moment().format('DD/MM/YYYY HH:mm:s');

    console.log(`[${tempo}] > [${req.method}] ${url}`);
    next();
};

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