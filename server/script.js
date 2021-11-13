const { exec } = require('child_process')
const path = require("path")
const fs = require("fs")
const { brotliCompress } = require('zlib')

// const image_path = '../images/teste3.jpg'
let breed_id = 0

async function classifier(image_path) {
  const shFunc = `script.sh ${path.resolve(__dirname,image_path)}`;
  try {
    exec(shFunc,
      {
        cwd: `${path.resolve(__dirname)}`
      },(error) => {
      if (error) {
        console.log(`Error: ${error.message}`)
        return 
      }
  
    });    
  } catch (error) {
    
  }finally{
    breed_id = getBreedId()
    return breed_id;
  }

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

module.exports = async function(image_path){
  return await classifier(image_path);
  // return breed_id;
  // setTimeout(() => {
  //   console.log(breed_id);
  //   return breed_id;
  // }, 3000)
 
}
