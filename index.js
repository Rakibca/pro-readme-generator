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
        message: "What is the project title?"
      },
      {
        type: "input",
        name: "name",
        message: "Who is the project author?"
      },
      {
        type: "input",
        name: "name",
        message: "Why did you work on this project?"
      },
      {
        type: "input",
        name: "name",
        message: "motivation?"
      },
      {
        type: "input",
        name: "name",
        message: "What was solved?"
      },
      {
        type: "input",
        name: "name",
        message: "Please enter a brief description?"
      },
    ])
    .then((answers) => {
      console.log("Doing something");
      writeREADME("README.md", generateMD({
        ...answers
      }))
    })
}

// Creates a function to write README file
function writeREADME(filename, answers) {

  const readmePageContent = generateMD(answers);

  fs.writeFile('README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}
