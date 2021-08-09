class postController{
    getAll = (req,res,next) => {
        // Consulta posts sem filtro
        res.status(201).send("Requisição recebida");
        //get do post
    };

    get = (req,res,next) => {
        // Recebe um id para consultar
        const params = req.params;
        res.status(201).send("Requisição recebida");
        //get do post
    };
    
    post = (req,res,next) => {
        // Recebe os parametros de post para inserir
        const post = req.body;
        res.status(201).send("Requisição recebida");
        //insert do post
    };

    put = (req,res,next) =>{
        // Recebe os parametros de post para atualizar
        const put = req.body;
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //update do post
    };

    delete = (req,res,next) =>{
        // Recebe o id do post para deletar
        const del = req.body;
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //delete do post
    };
}


module.exports = new postController;