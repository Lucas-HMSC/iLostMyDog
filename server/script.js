const { exec } = require('child_process')
const path = require("path")
const fs = require("fs")
const { brotliCompress } = require('zlib')

// const image_path = '../images/teste3.jpg'
let breed_id = 0

function classifier(image_path) {
  const shFunc = `script.sh ${path.resolve(image_path)}`;
  exec(shFunc,
    {
      cwd: `${path.resolve(__dirname)}`
    },(error) => {
    if (error) {
      console.log(`Error: ${error.message}`)
      return 
    }
    breed_id = getBreedId()
  });
}

const getBreedId = () => {  
  try {
    const resultPath = path.resolve(__dirname) + '\\result.txt';
    const response = (fs.readFileSync(resultPath, 'utf8'));
    return Number(response);  
  } catch (error) {
    console.log(error);
    return error;
  }
}

module.exports = function(){
  classifier(image_path)
  setTimeout(() => {
    return breed_id;
  }, 3000)
 
}
