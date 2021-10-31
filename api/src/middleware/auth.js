const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const sql = require('../services/MySqlService');

let users = [{
    id :1,
    username: 'adm',
    email:'adm@adm.com',
    password:'$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW'
}];


module.exports = function(passport){
    async function findUser(username){
        const query ={sql:`SELECT * FROM USUARIOS`};
        const response = await sql.executeQuery(query);
        let users = {};
        response.forEach(row =>{
            if(username == row.NOME){
                users = {
                    id: row.ID_USUARIO,
                    nome: row.NOME,
                    telefone: row.TELEFONE,
                    email: row.EMAIL,
                    area: row.AREA,
                    cidade: row.CIDADE
                }
            }
        })
        return users;
        
    }

    async function findUserById(id){
        const query ={sql:`SELECT * FROM USUARIOS`};
        const response = await sql.executeQuery(query);
        let  users ={};
        response.forEach(row =>{
            if(id == row.ID_USUARIO){
                users = {
                    id: row.ID_USUARIO,
                    nome: row.NOME,
                    email: row.EMAIL,
                    telefone: row.TELEFONE,
                    cidade: row.CIDADe
                }
            }
        })
        return users;
    }


    passport.serializeUser((user,done) => {
        done(null,user.id);
    });

    passport.deserializeUser( async (id,done) => {
        try {
            const user = await findUserById(id)
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
    async (username,password,done)=>{
        try {
            const user = await findUser(username);
            if(!user)
                return done(null,false);

            // possivel validação via senha
            // const isValid = bcrypt.compareSync(password,user.password);
            // if(!isValid)
            //     return done(null,false);

            return done(null,user);
        } catch (error) {
            console.log(error);
            return done(error,false);
        }
    }));

}