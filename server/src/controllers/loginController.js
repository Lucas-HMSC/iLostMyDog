const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let users = [];

class loginController{
    async login(req,res){
        //logica do login
        res.send('Ok');
    }

    async cadastro(req,res){
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        
        users.push({
            id: Date.now().toString(),
            name: req.body.username,
            email: req.body.email,
            password: hashPassword
        })
        console.log(users);
        res.send({"message" : "Registro realizado com sucesso"});

    }

    async checkAuthenticated(req,res,next){
        if(req.isAuthenticated())   {
            return next();
        }
        
    }

    async initialize(passport, getUserByEmail, getUserById){
        const authenticateUser = async (email,password,done) => {
            const user = getUserByEmail(email);
            if(user == null){
                return done(null,false, {mesage : 'Usuário não encontrado'});
            }
    
            try {
                if(await bcrypt.compare(password,user.password)){
                    return done(null,user);
                }else{
                    return done(null,false, {message: "Dados incorretos"});
                }
            } catch (error) {
                return done(e);
            }
        };
        passport.use(new LocalStrategy({usernameField: 'email'},authenticateUser))
        passport.serializeUser((user,done) => done(null,user.id));
        passport.deserializeUser((id,done) => {
            return done(null,getUserById(id));
        });
    }
}
module.exports = new loginController;