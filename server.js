const inquirer = require("inquirer");
const pg = require("pg");
const express = require("express");
const logo = require("asciiart-logo");
const config = require("./package.json");
console.log(logo(config).render());

const questions = [
  {
    type: "list",
    name: "option list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "Add Employee",
      "Update EMmployee Role",
      "View All Roels",
      "Add Role",
      "View All Departments",
      "Add Depeartment",
      "Quit",
    ],
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
console.log(questions);
