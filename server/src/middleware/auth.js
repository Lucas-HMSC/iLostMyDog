const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

let users = [{
    id :1,
    username: 'adm',
    email:'adm@adm.com',
    password:'$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW'
}];


module.exports = function(passport){
    function findUser(username){
        return users.find(item=> item.username === username);
    }

    function findUserById(id){
        return users.find(item=> item.id === id);
    }


    passport.serializeUser((user,done) => {
        done(null,user.id);
    });

    passport.deserializeUser((id,done) => {
        try {
            const user = findUserById(id)
            return done(null,user);
            
        } catch (error) {
            console.log(error);
            return done(error,null);
        }
    });    


    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    (username,password,done)=>{
        try {
            const user = findUser(username);

            if(!user)
                return done(null,false);

            const isValid = bcrypt.compareSync(password,user.password);
            if(!isValid)
                return done(null,false);

            return done(null,user);
        } catch (error) {
            console.log(error);
            return done(error,false);
        }
    }));

}