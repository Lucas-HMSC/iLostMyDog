const { exec } = require('child_process')
const path = require("path")
const fs = require("fs")
const { brotliCompress } = require('zlib')

const image_path = '../images/teste3.jpg'
let breed_id = 0

function classifier(image_path) {
  exec(`./script.sh ${path.resolve(image_path)}`, (error) => {
    if (error) {
      console.log(`Error: ${error.message}`)
      return 
    }
    breed_id = getBreedId()
  });
}

const getBreedId = () => {  
  return Number(fs.readFileSync('./result.txt', 'utf8')[0])
}

classifier(image_path)
setTimeout(() => {
  console.log(breed_id)
}, 3000)