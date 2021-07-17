require('dotenv').config({path: __dirname +"/./../.env"});
const app = require('../src/app');
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`Rodando na porta ${port} no ambiente ${process.env.ENVIRONMENT}`);
});