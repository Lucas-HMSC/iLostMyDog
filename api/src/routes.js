const express = require('express');
const router = express.Router();

// Middleware para verificar se existe sessão
const authMiddleware = require('./middleware/authMiddleware');

const postController = require('./controllers/postController');
const imageController = require('./controllers/imageController');
const loginController = require('./controllers/loginController.js');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Login realizado com sucesso');
});

router.post('/cadastro', loginController.cadastro);

router.get('/listar', authMiddleware.isAuthenticated, postController.get);
router.post('/listar', authMiddleware.isAuthenticated, postController.getPostById);

router.post('/add', postController.post);

router.put('/update',authMiddleware.isAuthenticated, postController.put);

// vai enviar essa resposta caso não caia em nenhuma rota
router.use((req, res) => {
    console.log(req);
    res.status(404).send("Rota Invalida");
});

module.exports = router;