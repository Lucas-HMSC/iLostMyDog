class loginController{
    async login(req,res){
        //logica do login
        res.send('Ok');
    }

    async cadastro(req,res){
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        })
        console.log(users);
        res.send({"message" : "Registro realizado com sucesso"});

    }

    async validate(){
        try {
            console.log('wadawdawd');
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