const imageService = require('../services/imageService');
const sql = require('../services/MySqlService');

class postController { 
    async getAllPost(req, res, next) {
        const query = {
            sql: `
            SELECT P.ID_POST, C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL, S.ID_STATUS, I.PATH FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            INNER JOIN IMAGENS I
            ON I.ID_POST = P.ID_POST
            WHERE P.ID_STATUS <> 4
            ORDER BY P.ID_POST DESC  
        `};
        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getPostByUser(req, res, next) {
        const {id_usuario} = req.body;
        const query = {
            sql: `
            SELECT P.ID_POST, C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL, S.ID_STATUS, I.PATH FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            INNER JOIN IMAGENS I
            ON I.ID_POST = P.ID_POST
            WHERE P.ID_USUARIO = ${id_usuario}
            AND P.ID_STATUS <> 4
            ORDER BY P.ID_POST DESC
        `};
        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getPostById(req, res) {
        const { id: id_post } = req.params;

        const query = {
            sql: `
            SELECT P.ID_POST, C.NOME, R.RACA, P.CIDADE, P.AREA, P.TELEFONE, P.EMAIL, S.ID_STATUS, I.PATH FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            INNER JOIN IMAGENS I
            ON I.ID_POST = P.ID_POST
            WHERE P.ID_POST = ${id_post}
            AND P.ID_STATUS <> 4
        `};

        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getPostByBreed(req, res) {
        const { raca: id_raca, usuario: id_usuario} = req.params;

        const query = {
            sql: `
            SELECT P.ID_POST, C.NOME, R.RACA, P.CIDADE, P.AREA, U.TELEFONE, U.EMAIL, S.ID_STATUS, I.PATH FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            INNER JOIN IMAGENS I
            ON I.ID_POST = P.ID_POST
            WHERE R.ID_RACA = ${id_raca}
            AND P.ID_STATUS = 2
            AND P.ID_USUARIO <> ${id_usuario}
            ORDER BY P.ID_POST DESC
        `};

        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };

    async getBreedByPost(req, res) {
        const { id } = req.params;

        const query = {
            sql: `
            SELECT R.ID_RACA, R.RACA FROM POSTAGENS P
            INNER JOIN CAES C
            ON P.ID_CAO = C.ID_CAO
            INNER JOIN RACAS R
            ON C.ID_RACA = R.ID_RACA
            INNER JOIN USUARIOS U
            ON P.ID_USUARIO = U.ID_USUARIO
            INNER JOIN STATUS S
            ON P.ID_STATUS = S.ID_STATUS
            WHERE P.ID_STATUS = 1
            AND P.ID_USUARIO = ${id};
        `};

        const response = await sql.executeQuery(query);
        res.status(201).send(response);
    };
    
    async post(req, res, next) {
        try {
            const { nome_cao, area, cidade, email, telefone, id_status, user_id } = req.body;

            const requestImages = req.files;

            const image = requestImages.map(image => {
                return { path: image.filename }
            });

            const id_raca = await imageService.classify(image[0].path);

            const id_usuario = user_id;
            
            let query = { 
                sql: `INSERT INTO CAES(NOME, ID_RACA) VALUES ('${nome_cao}', ${id_raca})` 
            };
            const { insertId: id_cao } = await sql.executeQuery(query);

            query = {
                sql: `
                INSERT INTO POSTAGENS(AREA, CIDADE, DATA, TELEFONE, EMAIL, ID_CAO, ID_USUARIO, ID_STATUS) 
                VALUES ('${area}', '${cidade}', NOW(), '${telefone}', '${email}', ${id_cao}, ${id_usuario}, ${id_status})
            `};
            const { insertId: id_post } = await sql.executeQuery(query);

            query = {
                sql: `INSERT INTO IMAGENS(PATH, ID_POST) VALUES ('${image[0].path}', ${id_post})`
            };
            await sql.executeQuery(query);
  
            res.status(201).send({ id_post });
        } catch(error) {
            res.send({error});
        }
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