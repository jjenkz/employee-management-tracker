const inquirer = require("inquirer");
const { addRole } = require("./routes/role.js");

const addRoleP = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What's the role's title?",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter a salary amount:",
      },
      {
        type: "input",
        name: "department_id",
        message: "What;s the department id for the role?",
      },
    ])
    .then((answer) => {
      return addRole(answer.titlr, answer.salary, answer.department_id)
        .then(() => {
          console.log("Role added");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = { addRoleP };
