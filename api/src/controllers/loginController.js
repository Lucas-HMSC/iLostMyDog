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
            
            const response = await sql.executeQuery(query);

            res.send({code: 200, message: 'Cadastro realizado com sucesso.'});
        } catch (error) {
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