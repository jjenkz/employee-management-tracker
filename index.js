const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const { client, initDatabase } = require("./config/connection.js");
const { viewDepartments } = require("./routes/department.js");
const { viewRoles } = require("./routes/role.js");
const { viewEmployees } = require("./routes/employee.js");
const { addDeptP } = require("./prompts/department.js");
const { addRoleP } = require("./prompts/role.js");
const { addEmployeeP, updateEmployeeRole } = require("./prompts/employee.js");

initDatabase().then(() => {
  logo("Employee Tracker", (err, data) => {
    if (err) {
      console.log("Error obtaining");
      console.dir(err);
      return;
    }

    const frontPage = () => {
      console.clear();
      console.log(data);
      inquirer
        .prompt([
          {
            type: "list",
            name: "action",
            message: "Choose an option:",
            choices: [
              "View All Employees",
              "View All Roles",
              "View All Departments",
              "Add An Employee",
              "Add A Role",
              "Add A Department",
              "Update Employee Role",
              "Exit",
            ],
          },
        ])
        .then((answer) => {
          switch (answer.action) {
            case "View All Employees":
              viewEmployees()
                .then((res) => {
                  console.table(res.rows);
                  frontPage();
                })
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "View All Roles":
              viewRoles()
                .then((res) => {
                  console.table(res.rows);
                  frontPage();
                })
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "View All Departments":
              viewDepartments()
                .then((res) => {
                  console.table(res.rows);
                  frontPage();
                })
                .catch((err) => {
                  console.error(err);
                });
              break;
            case "Add an employee":
              addEmployeeP().then(() => mainMenu());
              break;
            case "Add a role":
              addRoleP().then(() => mainMenu());
              break;
            case "Add a department":
              addDeptP().then(() => mainMenu());
              break;
            case "Update an employee role":
              updateEmployeeRole().then(() => mainMenu());
              break;
            case "Exit":
              client.end();
              process.exit();
              break;
          }
        });
    };
    frontPage();
  });
});
