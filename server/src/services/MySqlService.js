const mysql = require('mysql');
require('dotenv').config({path: __dirname +"/./../.env"});
const { connect } = require('../routes');


const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
});

con.connect((err)=>{
    if(err){
        console.log("Erro ao conectar na base de dados...", err);
        return
    }
    console.log("Conexão estabelecida");
});

con.end((err)=>{
    if(err){
        console.log("Erro ao finalizar conexão....",err);
        return
    }
    console.log("Conexão encerrada com sucesso");
});

class MySqlService{
    async executeQuery(select){
        try {
            // con.connect();
            con.query(select, (err,rows)=>{
                if(err) throw err;
                return rows;
            });
            // con.end();
        } catch (error) {
            
        }
        
    }
}

module.exports = new MySqlService();