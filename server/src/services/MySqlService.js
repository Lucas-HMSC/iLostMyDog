const mysql = require('mysql');
require('dotenv').config({path: __dirname +"/./../.env"});

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
}

class MySqlService{
    async connectMysql(){
        const con = mysql.createConnection(config);
        return con;
    }

    async executeQuery(req,res){
        try {
            var con = mysql.createConnection(config);
            const {sql} = req.body;
            con.query(sql, (err,rows)=>{
                console.log(rows);
                res.send(rows);
            });
        } catch (error) {
            console.log(error);
        }
         finally{
            con.end((err)=>{
                if(err){
                    console.log("Erro ao finalizar conexão....",err);
                    return
                }
                console.log("Conexão encerrada com sucesso");
            });
        }
        
    }
}

module.exports = new MySqlService;