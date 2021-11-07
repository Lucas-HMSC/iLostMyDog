require('dotenv').config({path: __dirname +"/./../.env"});
const sql = require('../services/MySqlService');
const classifier = require('../../../server/script');
const { exec } = require('child_process')
const multer = require('multer');
const parser = multer({dest: 'public/uploads'})

class imageService{

    async classify(){
        try{
            classifier();
        }catch(error){
            console.log(error);
        }
    }


    async upload(data){
        parser.single('images')(req,res,err =>{
            if(err)
                res.status(500).json({error: 1, payload: err});
            
            const image = {};

            image.id = data.name;
            image.url = `/uploads/${image.id}`;

            res.status(200).json({error:0,payload: {id: image.id, url: image.url}})
        })
    }

} 

module.exports = new imageService;












