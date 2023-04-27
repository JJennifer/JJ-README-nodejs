// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const licensing = require("./utils/generateMarkdown");


// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "How and when would you use your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which licensing did you use?",
        choices: ["none", "Apache License 2.0", "MIT License", "Mozilla Public License 2.0"],
        validate: license => {
            if(license){
                return true
            } else {
                return false
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Did you receive any support?",
    },
    {
        type: "input",
        name: "test",
        message: "How did it test?",
    },
    {
        type: "input",
        name: "questions",
        message: "What is your github username?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, (err) => {
        err ? console.log(err) : console.log("success");
       });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
    writeToFile("README.md",licensing({...response}))
    })
}

// Function call to initialize app
init();
