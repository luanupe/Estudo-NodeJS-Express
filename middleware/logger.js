const moment = require('moment');

// Log todas as requisições recebidas
logger = (req, res, next) => {
    let url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    let tempo = moment().format('DD/MM/YYYY HH:mm:s');

    console.log(`[${tempo}] > [${req.method}] ${url}`);
    next();
};

module.exports = logger;