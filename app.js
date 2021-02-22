const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');

const logger = require('./middleware/logger');

const PORTA = process.env.PORT || 8080;
const server = express();

// Iniciar o engine handlebars
server.set('views', path.join(__dirname, 'views'));
server.engine('hbs', exphbs({ 'defaultLayout':'main', extname:'.hbs' }));
server.set('view engine', 'hbs');

// Iniciar middlewares
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended:false }));

// Rotas com layouts
server.use('/', require(path.join(__dirname, 'routes', 'home.js')));

// Rotas de API
server.use('/api/v1/produtos', require(path.join(__dirname, 'routes', 'api', 'v1', 'produtos.js')));

// Definir pasta de arquivos estáticos
server.use(express.static(path.join(__dirname, 'public')));

// Ouvir conexões
server.listen(PORTA, () => console.log(`Server iniciado na porta ${PORTA}`));