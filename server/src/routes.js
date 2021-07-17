const express = require('express');
const router = express.Router();
const postController = require('./controllers/postController');

router.get('/',(req,res) =>{
    res.redirect('/login');
});

router.get('/home',(req,res) =>{
    res.send('Home');
});

router.get('/login', (req,res) =>{
    res.send("Login")
});

router.get('/cadastro', (req,res) =>{
    res.send("Cadastro")
});

router.get('/listar', (req,res) =>{
    res.send("Listar")
});

router.post('/upload', (req,res) =>{
    res.send("Upload")
});

router.post('/add', postController.post);

router.delete('/delete/:id', postController.delete);

router.put('/update/:id', postController.put);

module.exports = router;