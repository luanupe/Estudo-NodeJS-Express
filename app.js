const express = require('express');

const PORTA = process.env.PORT || 8080;

const server = express();

// Rota padrão
server.get('/', (req, res) => {
    res.send('Hello World');
});

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));