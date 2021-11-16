require('dotenv').config({path: __dirname +"/./../.env"});
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const loginController = require('./controllers/loginController');
const app = express();
const path = require('path');
require('./middleware/auth')(passport);

//Rotas
const routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Define a sessão do express
app.use(session({
    secret: process.env.SESSION_ID,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1 * 60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', './server', 'uploads')));

//Init do app
app.use('/', routes);

app.use(express.static('public'));

module.exports = app;