const { exec } = require('child_process');
const path = require("path");
const fs = require("fs")

const image_path = '../images/teste2.jpg';

const generateJSON = (image_path) => {
  exec(`./script.sh ${path.resolve(image_path)}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`Error: ${error.message}`)
      return 
    }
  
    return 
  });
}

const getBreedName = () => {
  fs.readFile('./result.json', 'utf8', (err, data) => {
    if (err) console.log('Erro ao ler JSON.')

    const result = JSON.parse(data)
    console.log(result.breed_name)
  })
}

generateJSON(image_path);
setTimeout(() => {
  getBreedName()
}, 3000)