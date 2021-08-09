const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

function initialize(passport, getUserByEmail, getUserById){
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

module.exports = initialize;