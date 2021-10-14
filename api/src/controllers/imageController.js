const imageService = require("../services/imageService");

class imageController{
    
    async uploadImagem(req,res){
        let {image_path} = req.body;
        
        const response = await imageService.classify();
        res.status(201).send("Imagem salva");
    }
}


module.exports = new imageController;