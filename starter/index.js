const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// array to store team members
const team = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array of questions for the manager
const managerQuestions = [
  {
    type: "input",
    name: "manager",
    message: "What is the team manager's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the team manager's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },

  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
  },
];

//array of questions for the engineer
const engineerQuestions = [
  {
    type: "input",
    name: "engineer",
    message: "What is the engineer's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },

  {
    type: "input",
    name: "github",
    message: "What is the engineer's Github username?",
  },
];

//array of questions for the intern
const internQuestions = [
  {
    type: "input",
    name: "intern",
    message: "What is the intern's name?",
  },

  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },

  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },

  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

//array of questions for adding team members
const roleQuestions = [
  {
    type: "list",
    name: "role",
    message: "Which type of team member would you like to add?",
    choices: ["Engineer", "Intern", "Finish"],
  },
];

function createManager() {
  inquirer.prompt(managerQuestions).then((res) => {
    const manager = new Manager(
      res.manager,
      res.id,
      res.email,
      res.officeNumber
    );
    team.push(manager);
    // console.log(team);
  });
}

createManager();
