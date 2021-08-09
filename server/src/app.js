require('dotenv').config({path: __dirname +"/./../.env"});
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();


app.use(session({secret: process.env.SESSION_ID}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(passport.initialize());
//Rotas
const routes = require('./routes');

//Init do app
app.use('/', routes);

module.exports = app;