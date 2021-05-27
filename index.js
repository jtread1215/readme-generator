//NPM packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generate = require("/utils/generate");

//User input
const questions = [
    {
        type: "input",
        name: "githubUserName",
        query: "Please enter your GitHub username.", 
    },
    {
        type: "input",
        name: "email",
        query: "Please enter your email.", 
    },
    {
        type: "input",
        name: "repo",
        query: "What is the name of this repository?", 
    },
    {
        type: "input",
        name: "desc",
        query: "Please provide a description of this repository.", 
    },
    {
        type: "list",
        name: "license",
        query: "Does this repository have any licenses?", 
        options: ["None", "Node", "Apache 2.0", "GPL 3.0", "MIT"],
    },
    {
        type: "input",
        name: "install",
        query: "What command should be installed for this repository?", 
    },
    {
        type: "input",
        name: "test",
        query: "What command should be ran to run tests on this repository?", 
    },
    {
        type: "input",
        name: "usage",
        query: "What does the user need to know about using the repo?", 
    },
    {
        type: "input",
        name: "contribute",
        query: "What does the user need to know about contributing to the repo?", 
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
        writeFile("readMe.md", generate({inquirerRes}));
    });
}

start();