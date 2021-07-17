class postController{
    post = (req,res,next) => {
        res.status(201).send("Requisição recebida");
        //insert do post
    };

    put = (req,res,next) =>{
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //update do post
    };

    delete = (req,res,next) =>{
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //delete do post
    };
}


module.exports = new postController;