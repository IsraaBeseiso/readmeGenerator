// array of questions for user
const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username"
  },

  {
    type: "input",
    message: "What is your project Title?",
    name: "title",
    default: "Generate a README.md file "
  },

  {
    type: "input",
    message: "What is your repo called?",
    name: "repo",
    default: "GoodREADMEGenerator"
  },

  {
    type: "input",
    message: "How do you describe your Project?.",
    name: "desc",
    default:
      " This application will generate a README.md file for your current project"
  },

  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "install",
    default: "Step1: Run npm install and Step2: Run node index.js"
  },

  {
    type: "input",
    message: "Write instructions for using your project.",
    name: "usage",
    default:
      "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
  },

  {
    type: "input",
    message:
      "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
    name: "contributors",
    default: "israa beseiso",
  },
  {
    type: "input",
    message: "Provide examples on how to run tests.",
    name: "test",
    default: "Insert your tests sample here..."
  }
]
//answers.username

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => {
    console.log(response);
   
        fs.writeFile("PRACTICE.md", generateMarkdown(response), function(err) {
          if (err) {
            throw err;
          }
        });
     
  }).catch(err=>console.log(err));
}

init();

// function call to initialize program
