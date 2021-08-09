const express = require('express');
const router = express.Router();
const fs = require('fs');

const postController = require('./controllers/postController');
const imageController = require('./controllers/imageController');
const loginController = require('./controllers/loginController.js');
const mysql = require('./services/MySqlService');

console.log(mysql.executeQuery("SELECT * FROM users"));

let path=__dirname + '/views';
let errorPage = path + '/404.html';


router.post('/login', loginController.initialize);

router.post('/cadastro', loginController.cadastro);

router.get('/listar', postController.getAll);
router.get('/listar/:id', postController.getAll);

router.post('/add', postController.post);
router.delete('/delete/:id', postController.delete);
router.put('/update/:id', postController.put);

router.post('/upload', imageController.uploadImagem);



router.use((req,res)=>{
    res.status(404).sendFile(path+'/404.html');
});




module.exports = router;