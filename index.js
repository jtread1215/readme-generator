//required packages
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generate = require("./utils/generate");

//User input
const questions = [{
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the name of this repository?",
    },
    {
        type: "input",
        name: "desc",
        message: "Please provide a description of this repository.",
    },
    {
        type: "list",
        name: "license",
        message: "Does this repository have any licenses?",
        choices: ["None", "Node", "Apache 2.0", "GPL 3.0", "MIT"],
    },
    {
        type: "input",
        name: "install",
        message: "What command should be installed for this repository?",
        default: "npm i",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be ran to run tests on this repository?",
        default: "npm test",
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repository?",
    },
    {
        type: "input",
        name: "contribute",
        message: "What does the user need to know about contributing to the repository?",
    },

];

//function for user's input 
function writeFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

//function starts application
function start() {
    inquirer.prompt(questions).then((inquirerRes) => {
        console.log("Begin readMe...");
        writeFile("readMe.md", generate({
           ...inquirerRes
        }));
    });
}

start();