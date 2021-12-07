const { Router } = require('express');

const ConsultaEnqueteController = require('../controller/ConsultaEnqueteController');

const routes = Router();

routes.get('/enquete', ConsultaEnqueteController.listarEnquetes);
routes.get('/enquete/:id/pergunta', ConsultaEnqueteController.listaEnquetes);

module.exports = routes;
