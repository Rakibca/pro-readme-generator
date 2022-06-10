// packages needed for this application
var inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
// import and use the generateMarkdown.js module
const generateMD = require('./utils/generateMarkdown.js');


// Function call to initialize app
init();


// Creates a function to initialize app
function init() {
  // Creates an array of questions for user input and to validate the answers
  inquirer
    .prompt([{
      type: "input",
      name: "title",
      message: "Please enter the project title:"
    },
    {
      type: "input",
      name: "description",
      message: "Please enter the project description:"
    },
    {
      type: "input",
      name: "installation",
      message: "What command is required to install package dependencies?"
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions for this program usage:"
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license did you use for this project? Please choose only one:",
      choices: ["MIT", "Apache_2.0", "GPL", "BSD"]
    },
    {
      type: "input",
      name: "contribute",
      message: "What contribution info do you want users to know?"
    },
    {
      type: "input",
      name: "tests",
      message: "What command is required to run tests?"
    },

    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username:"
    },

    {
      type: "input",
      name: "emailaddress",
      message: "Please enter your email address:"
    },
    ])
    .then((answers) => {
      console.log("Creating the README.md file");
      writeREADME("README.md", generateMD(answers))
    })
}

// Creates a function to write README file
function writeREADME(filename, fileinfo) {

  const readmePageContent = fileinfo;

  fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the README.md file!')
  );
}
