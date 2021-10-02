const { exec } = require('child_process');
const path = require("path");

const image_path = '../images/teste4.jpg';

exec(`./script.sh ${path.resolve(image_path)}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`Error: ${error.message}`)
    return
  }
  if (stderr) console.log(`stderr: ${stderr}`)

  console.log('Arquivo JSON gerado.')
});