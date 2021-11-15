const imageService = require('../services/imageService');
const sql = require('../services/MySqlService');

class postController { 
    
    async get(req, res, next) {
        const id_usuario = req.user ? req.user.id : 1;
        const query = {
            sql: `
            SELECT C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL, S.SITUACAO FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            WHERE P.ID_USUARIO = ${id_usuario}
        `};
        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getPostById(req, res) {
        const { id_post } = req.body;

        const query = {
            sql: `
            SELECT C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL, S.SITUACAO FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            WHERE P.ID_POST = ${id_post}
        `};

        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };
    
    async post(req, res, next) {
        const { nome_cao, area, cidade, id_status, data } = req.body;

        const upload = await imageService.upload(data[0]);
        const image_path = upload.payload["url"];
        const id_raca = await imageService.classify(image_path);

        const id_usuario = req.user ? req.user.id : 1;
        
        let query = { 
            sql: `INSERT INTO CAES(NOME, ID_RACA) VALUES ('${nome_cao}', ${id_raca})` 
        };
        const { insertId: id_cao } = await sql.executeQuery(query);

        query = {
            sql: `
            INSERT INTO POSTAGENS(AREA, CIDADE, DATA, ID_CAO, ID_USUARIO, ID_STATUS) 
            VALUES ('${area}', '${cidade}', NOW(), ${id_cao}, ${id_usuario}, ${id_status})
        `};
        const { insertId: id_post } = await sql.executeQuery(query);

        query = {
            sql: `INSERT INTO IMAGENS(PATH, ID_POST) VALUES ('${image_path}', ${id_post})`
        };
        await sql.executeQuery(query);

        res.status(201).send({ id_post });
    };

    async put(req, res, next) {
        const { id_post, id_status } = req.body;

        const query = { 
            sql:`UPDATE POSTAGENS SET ID_STATUS = ${id_status} WHERE ID_POST = ${id_post}`
        };
        await sql.executeQuery(query);

        res.status(201).send(`Publicação ${id_post} atualizada para o status ${id_status}`);
    };
}

module.exports = new postController;