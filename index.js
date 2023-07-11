// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");



// TODO: Create an array of questions for user input
//array of questions for user input to generate README

const questions = ["0-Give project a title: ", "1-Describe your project: ", "2-Enter installation instructions for this project: ", "3-What is the usage information for your project?", "4-What are the rules for contributing to the project: ", "What are the test instructions for your project?", "What is your GitHub username?", "What is your email address?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        
        {
            type: "list",
            message: "What license would you like to use?",
            name: "license",
            choices: ["MIT", "Apache", "GPL", "BSD", "None"]
        },

        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "test"
        },
        {
            type: "input",
            message: questions[6],
            name: "github"
        },
        {
            type: "input",
            message: questions[7],
            name: "email"
        }
    ]).then(function(data) {
    
    
const readme = `# ${data.title} \n\n
## Description \n\n
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg) \n\n
${data.description} \n\n
## Table of Contents \n\n
[Installation](#installation) \n\n 
[Usage](#usage) \n\n
[License](#license) \n\n
[Contributing](#contributing) \n\n 
[Tests](#tests) \n\n 
[Questions](#questions) \n\n 
## Installation \n\n ${data.installation} \n\n 
## Usage \n\n ${data.usage} \n\n 
## License \n\n This project is licensed under the ${data.license} license. \n\n 
## Contributing \n\n ${data.contribution} \n\n ## Tests \n\n ${data.test} \n\n ## Questions \n\n 
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.github}]() \n\n`;
        writeToFile("YourVeryOwnREADME.md", readme);
    })
        
}

// Function call to initialize app
init();

