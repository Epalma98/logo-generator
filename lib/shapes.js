function renderShape(shape) {
    const shapeCode = {
      circle: 'circle cx="150" cy="130" r="100"',
      square: 'rect x="30" y="20" width="80%" height="80%"',
      triangle: 'polygon points="150,0 0,200 300,200"'
    }
    return shapeCode[shape]
  }

function generateSVG(answers) {
    return `

    <svg version="1.1"
     width="300" height="300"
     xmlns="http://www.w3.org/2000/svg">
    
     <${renderShape(answers.shape)} fill="${answers.shapeColor}" />

     <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

    
</svg>

    `
}
module.exports = generateSVG;
/* <svg version="1.1"
     width="200" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="100" cy="100" r="80" fill="green" />

  <polygon points="150,0 0,200 300,200" />

  <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">logo</text>

</svg> */