const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const routes = require('./routes');


//Init do app
app.use('/', routes);

module.exports = app;