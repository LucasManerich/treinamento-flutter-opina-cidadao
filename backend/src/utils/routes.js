const { Router } = require('express');

const ConsultaEnqueteController = require('../controller/ConsultaEnqueteController');
const ConsultaPerguntaController = require('../controller/ConsultaPerguntaController');

const routes = Router();

routes.get('/enquete', ConsultaEnqueteController.listarEnquetes);
routes.post('/enquete', ConsultaEnqueteController.incluirEnquete);

routes.get('/enquete/:id/pergunta', ConsultaPerguntaController.listarPerguntas);
routes.post('/enquete/:id/pergunta', ConsultaPerguntaController.incluirPergunta);

module.exports = routes;
