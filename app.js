const express = require('express');
const path = require('path');

const PORTA = process.env.PORT || 8080;
const server = express();

server.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));