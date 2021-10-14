const sql = require('../services/MySqlService');
class postController{
    async get(req,res,next){
        let {id_cao} = req.body;
        id_cao = id_cao != null ? id_cao : '1';
        const query ={sql:`SELECT * FROM info_dog WHERE (ID_CAO = '${id_cao}' OR 1 = '${id_cao}')`};
        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };
    
    async post(req,res,next){
        const query ={sql:`INSERT INTO info_dog VALUES ('${req.body.id_cao}','${req.body.data}','${req.body.hora}','${req.body.area}','${req.body.cidade}','${req.body.id_raca}','${req.body.usr_cadastro}','${req.body.id_cadastro}','${req.body.imagem}')`};
        const response = await sql.executeQuery(query);
        res.status(201).send("Publicação Inserida com sucesso");
    };

    async put(req,res,next){
        // Recebe os parametros de post para atualizar
        const put = req.body;
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //update do post
    };

    async delete(req,res,next){
        let {id_cao} = req.body;
        const query ={sql:`DELETE FROM info_dog WHERE ID_CAO = '${id_cao}'`};
        const response = await sql.executeQuery(query);
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //delete do post
    };
}


module.exports = new postController;