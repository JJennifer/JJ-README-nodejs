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
        name: "Description",
        message: "What is your project about",
    },
    {
        type: "input",
        name: "Installation",
        message: "How do you install your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "How and when would you use your project?",
    },
    {
        type: "List",
        name: "License",
        message: "Which licensing did you use?",
        choices: ["none", "Apache License 2.0", "MIT License", "Mozilla Public License 2.0"],
    },
    {
        type: "input",
        name: "Contribution",
        message: "Did you receive any support?",
    },
    {
        type: "input",
        name: "Test",
        message: "How did it test?",
    },
    {
        type: "input",
        name: "Questions",
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
