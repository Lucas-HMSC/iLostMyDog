require('dotenv').config({path: __dirname +"/./../.env"});
const sql = require('../services/MySqlService');
const classifier = require('../../../server/script');
const { exec } = require('child_process')

class imageService{

    async classify(){
        try{
            classifier();
        }catch(error){
            console.log(error);
        }
    }

} 

module.exports = new imageService;












