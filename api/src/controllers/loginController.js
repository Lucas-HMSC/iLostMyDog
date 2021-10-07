const sql = require('../services/MySqlService');

class loginController{
    async login(req,res){
        //logica do login
        res.send('Ok');
    }

    async cadastro(req,res){
        try {
            const {cidade,telefone,email,nome} = req.body;
            // const hashPassword = await bcrypt.hash(req.body.password, 10);
            
            const query ={sql:`INSERT INTO info_dono (CIDADE, TELEFONE, EMAIL, NOME) VALUES ('${cidade}','${telefone}','${email}','${nome}')`};
            
            const response = await sql.executeQuery(query);
            res.send(response);
        } catch (error) {
            console.log(error);
        }

    }

    async validate(){
        try {
         ()=>{passport.authenticate('local',{
                successMessage: 'Sucesso',
                failureMessage: 'Erro'
            })    
        }        
        } catch (error) {
          console.log(error)  ;
        }

        
    }


}
module.exports = new loginController;