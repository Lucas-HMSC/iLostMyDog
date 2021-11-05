const mysql = require('mysql');
require('dotenv').config({path: __dirname +"/./../.env"});

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
}

class MySqlService{
    async connectMysql() {
        const con = mysql.createConnection(config);
        return con;
    }

    async executeQuery(query) {
        try {
            const con = mysql.createConnection(config);
            return new Promise((resolve,reject) => {
                con.query(query.sql,(error,result,fields) => {
                    con.destroy();
                    if(error){
                        console.log(error);
                        return reject(error);
                    }
    
                    console.log('Sucesso');
                    resolve(result);
                });
            })
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}

module.exports = new MySqlService;