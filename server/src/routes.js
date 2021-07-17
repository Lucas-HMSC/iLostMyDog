const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController');
const imageController = require('./controllers/imageController');
const loginController = require('./controllers/loginController.js');

router.get('/',(req,res) =>{
    res.redirect('/login');
});

router.get('/home',(req,res) =>{
    res.send('Home');
});

router.get('/login', loginController.login);

router.get('/cadastro', loginController.cadastro);

router.get('/listar', (req,res) =>{
    res.send("Listar")
});

router.post('/upload', imageController.uploadImagem);

router.post('/add', postController.post);

router.delete('/delete/:id', postController.delete);

router.put('/update/:id', postController.put);

module.exports = router;