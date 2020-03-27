const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/ProfileController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.create)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id')

module.exports = routes;
