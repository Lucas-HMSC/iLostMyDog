class imageController{
    
    async uploadImagem(req,res){
        let route = req.body;
        console.log(route);
        res.status(201).send("Requisição recebida");
        //logica do upload
        //verificações
    }
}


module.exports = new imageController;