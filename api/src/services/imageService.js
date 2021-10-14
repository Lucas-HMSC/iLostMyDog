require('dotenv').config({path: __dirname +"/./../.env"});
const sql = require('../services/MySqlService');
const { exec } = require('child_process')
const path = require("path")
const fs = require("fs")
const { brotliCompress } = require('zlib')

const image_path = '../../../images/teste3.jpg'
let breed_id = 0


class imageService{
    async classifier(image_path) {
        exec(`../../../server/script.sh ${path.resolve(image_path)}`, (error) => {
            if (error) {
            console.log(`Error: ${error.message}`)
            return 
            }
            breed_id = getBreedId()
        });
    }
    
    async getBreedId(){  
    return Number(fs.readFileSync('../../../server/result.txt', 'utf8')[0])
    }
    
    async classify(){
        try{
            this.classifier(image_path);
            setTimeout(() => {
                console.log(breed_id)
            }, 3000)
            return true;
        }catch(error){
            return error;
        }
    }

}

module.exports = new imageService;












