const sql = require('../services/MySqlService');

class loginController{
    async login(req,res){
        //logica do login
        res.send('Ok');
    }

    async cadastro(req,res){
        try {
            const { nome, telefone, email, area, cidade } = req.body;
            // const hashPassword = await bcrypt.hash(req.body.password, 10);
            
            const query ={sql:`INSERT INTO USUARIOS (NOME, TELEFONE, EMAIL, AREA, CIDADE) VALUES ('${nome}','${telefone}','${email}','${area}','${cidade}')`};
            
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