const { exec } = require('child_process')
const path = require("path")
const fs = require("fs")

// const image_path = '../images/teste3.jpg'
let breed_id = 0

async function classifier(image_path) {
  try {
    exec(`${path.resolve('..', './server', './script.sh')} ${path.resolve('..', './server', './uploads', image_path)}`, (error) => {
      if (error) {
        console.log(`Error: ${error.message}`)
        return 
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
    await delay(4500)
    breed_id = getBreedId();
    return breed_id;
  }
}

const getBreedId = () => {  
  try {
    return Number(fs.readFileSync('./result.txt', 'utf8')[0]) || 0;
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = async function(image_path) {
  return await classifier(image_path);
}
