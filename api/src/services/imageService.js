require('dotenv').config({path: __dirname +"/./../.env"});
const classifier = require('../../../server/script.js');

class imageService{

    async classify(image_path) {
        try{
            return await classifier(image_path);
        } catch(error) {
            console.log(error);
        }
    }

    async upload(image) {
        parser.single('images')((req, res, err) => {
            if(err) res.status(500).json({ error: 1, payload: err });
            
            const image = {};

            image.id = data.name;
            image.url = `/uploads/${image.id}`;

            res.status(200).json({ 
                error: 0, 
                payload: { id: image.id, url: image.url }
            })
        })
    }
} 

module.exports = new imageService;