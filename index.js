 const inquirer = require('inquirer');
 const fs = require('fs');
 const shapes = require('./lib/shapes.js');

 const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What would you like in the text?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text?', 
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What background shape do you want?',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want the background shape?', 
    }
 ]

 async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const svg = shapes(answers)
        fs.writeFile('genLogo.svg', svg, function(err) {
            if(err) {
                console.log('Could not save file')
            }
        })
    })
    .catch((error) => {
        console.log(error)
    })
 }

 runQuery();