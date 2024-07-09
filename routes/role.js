const { client } = require("../config/connection.js");

const viewRoles = () => {
  return client.query(`
    SELECT role.id, role.title, role.salary, department.name AS department 
    FROM role 
    JOIN department ON role.department_id = department.id
 `);
};

const addRole = (title, salary, department_id) => {
  return client.query(
    "INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)",
    [title, salary, department_id]
  );
};

module.exports = { viewRoles, addRole };
