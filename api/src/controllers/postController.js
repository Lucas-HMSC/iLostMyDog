const sql = require('../services/MySqlService');
class postController{
    async get(req,res,next) {
        const id_usuario = process.env.USER_ID;
        const query = {
            sql: `
            SELECT C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            WHERE P.ID_USUARIO = ${id_usuario}
        `};
        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getPostById(req, res) {
        const { id_post } = req.body;

        const query = {
            sql: `
            SELECT C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            WHERE P.ID_POST = ${id_post}
        `};

        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };
    
    async post(req,res,next) {
        const { nome_cao, id_raca, area, cidade, image_path } = req.body;
        const id_usuario = process.env.USER_ID;
        
        let query = { 
            sql: `INSERT INTO CAES(NOME, ID_RACA) VALUES ('${nome_cao}', ${id_raca})` 
        };
        const { insertId: id_cao } = await sql.executeQuery(query);

        query = {
            sql: `
            INSERT INTO POSTAGENS(AREA, CIDADE, DATA, ID_CAO, ID_USUARIO) 
            VALUES ('${area}', '${cidade}', NOW(), ${id_cao}, ${id_usuario})
        `};
        const { insertId: id_post } = await sql.executeQuery(query);

        query = {
            sql: `INSERT INTO IMAGENS(PATH, ID_POST) VALUES ('${image_path}', ${id_post})`
        };
        await sql.executeQuery(query);

        res.status(201).send({ id_post });
    };

    async put(req,res,next) {
        // Recebe os parametros de post para atualizar
        const put = req.body;
        let id = req.params.id;
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //update do post
    };

    async delete(req,res,next) {
        let {id_post} = req.body;
        const query ={sql:`DELETE FROM POSTAGENS WHERE ID_POST = '${id_post}'`};
        const response = await sql.executeQuery(query);
        res.status(201).send(`Requisição recebida, id: ${id}`);
        //delete do post
    };
}

module.exports = new postController;