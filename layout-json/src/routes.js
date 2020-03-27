const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
    const params = request.query; // => para Parametros nomeados
    // const params = request.params => para identificação de recursos

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Anderson Marlon'
    });
});

module.exports = routes;
