const express = require('express');
const router = express.Router();
const multer = require('multer');

// Middleware para verificar se existe sessão
const authMiddleware = require('./middleware/authMiddleware');

const postController = require('./controllers/postController');
const imageController = require('./controllers/imageController');
const loginController = require('./controllers/loginController');
const passport = require('passport');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Login realizado com sucesso');
});

router.post('/cadastro', loginController.cadastro);
router.post('/usuario', loginController.getById);
router.post('/usuario/email', loginController.getByEmail);

router.get('/listar', authMiddleware.isAuthenticated, postController.getAllPost);
router.get('/listar/:raca/:usuario', authMiddleware.isAuthenticated, postController.getPostByBreed);
router.get('/listar/:id', authMiddleware.isAuthenticated, postController.getPostById);
router.get('/raca/usuario/:id', authMiddleware.isAuthenticated, postController.getBreedByPost);
router.post('/listar/usuario', authMiddleware.isAuthenticated, postController.getPostByUser);

router.post('/add', upload.array('images'), postController.post);

router.put('/update', authMiddleware.isAuthenticated, postController.put);

// vai enviar essa resposta caso não caia em nenhuma rota
router.use((req, res) => {
    console.log(req);
    res.status(404).send("Rota Invalida");
});

module.exports = router;