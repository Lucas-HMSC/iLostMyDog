const imageService = require("../services/imageService");

class imageController {
    
    async uploadImagem(req, res) {
        let { data } = req.body;
        
        const response = await imageService.classify();
        
        for(const d of data) {
            const upload = await imageService.upload(d);
        }

        res.status(201).send("Imagem salva");
    }
}


module.exports = new imageController;