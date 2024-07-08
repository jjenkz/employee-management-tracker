const inquirer = require("inquirer");
const { addEmployee, updateEmployee } = require("../routes/employee.js");

const addEmployeeP = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What's the first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What's the last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What's their role?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter manager id (if applicable):",
      },
    ])
    .then(() => {
      return addEmployee(
        answer.first_name,
        answer.last_name,
        answer.role_id,
        answer.manager_id
      )
        .then(() => {
          console.log("Employee added");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

const updateEmployeeRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "employee_id",
        message: "What's the empployee id?",
      },
      {
        type: "input",
        name: "new_role_id",
        message: "What's their new role id?",
      },
    ])
    .then((answer) => {
      return updateEmployee(answer.employee_id, answer.new_role_id)
        .then(() => {
          console.log("Employee updated");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.exports = { addEmployeeP, updateEmployeeRole };
