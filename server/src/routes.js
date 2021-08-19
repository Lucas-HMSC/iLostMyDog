const express = require('express');
const router = express.Router();
const fs = require('fs');

const authMiddleware = require('./middleware/authMiddleware');
const postController = require('./controllers/postController');
const imageController = require('./controllers/imageController');
const loginController = require('./controllers/loginController.js');
const passport = require('passport');
const mySqlService = require('./services/MySqlService.js');



let path=__dirname + '/views';

router.post('/login', passport.authenticate('local'),(req,res)=>{
    res.send('Login realizado com sucesso');
});

router.post('/cadastro', loginController.cadastro);

router.get('/listar',authMiddleware.isAuthenticated, postController.getAll);
router.get('/listar/:id',authMiddleware.isAuthenticated, postController.getAll);

router.post('/add',authMiddleware.isAuthenticated, postController.post);
router.delete('/delete/:id',authMiddleware.isAuthenticated, postController.delete);
router.put('/update/:id',authMiddleware.isAuthenticated, postController.put);

router.post('/upload',authMiddleware.isAuthenticated, imageController.uploadImagem);



router.use((req,res)=>{
    console.log(req);
    res.status(404).send("Rota Invalida");
});




module.exports = router;