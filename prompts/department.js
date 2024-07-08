const inquirer = require("inquirer");
const { addDepartment } = require("./routes/department.js");

const addDeptP = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Add department name:",
      },
    ])
    .then((answer) => {
      return addDepartment(answer.name)
        .then(() => {
          console.log("Department added");
        })
        .catch((err) => {
          console.error(err);
        });
    });
};

module.export = { addDeptP };
