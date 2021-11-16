const sql = require('../services/MySqlService');
const bcrypt = require('bcrypt');

class loginController {
    async cadastro(req, res) {
        try {
            const { nome, telefone, email, senha, area, cidade } = req.body;
            const hashPassword = await bcrypt.hash(senha, 10);
            
            const query = {
                sql: `INSERT INTO USUARIOS (NOME, TELEFONE, EMAIL, HASH, AREA, CIDADE) VALUES ('${nome}','${telefone}','${email}','${hashPassword}','${area}','${cidade}')`
            };
            
            const { insertId: id_usuario } = await sql.executeQuery(query);

            res.status(201).send({id_usuario});
        } catch (error) {
            res.send({code: 500, message: error});
        }
    }

    async getById(req, res) {
        try {
            const { id_usuario } = req.body;

            const query = {
                sql: `SELECT Id_Usuario, Nome, Telefone, Email, Area, Cidade FROM USUARIOS WHERE ID_USUARIO = ${id_usuario}`
            };
            const response = await sql.executeQuery(query);

            res.status(200).send({ response });
        } catch(error) {
            res.send({code: 500, message: error});
        }
    }

    async getByEmail(req, res) {
        try {
            const { email } = req.body;

            const query = {
                sql: `SELECT Id_Usuario, Nome, Telefone, Email, Area, Cidade FROM USUARIOS WHERE EMAIL = '${email}'`
            };
            const response = await sql.executeQuery(query);

            res.status(200).send({ response });
        } catch(error) {
            res.send({code: 500, message: error});
        }
    }

    async validate() {
        try {() => {
            passport.authenticate('local', { successMessage: 'Sucesso', failureMessage: 'Erro'})    
        }} catch (error) {
          console.log(error);
        }
    }
}

module.exports = new loginController;