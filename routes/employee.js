const { client } = require("./config/connection.js");

const viewEmployees = () => {
  return client.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager 
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        `);
};

const addEmployee = (first_name, last_name, role_id, manager_id) => {
  return client.query(
    "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)",
    [first_name, last_name, role_id, manager_id]
  );
};

const updateEmployee = (employee_id, new_role_id) => {
  return client.query("UPDATE employee SET role_id = $1 WHERE id = $2", [
    new_role_id,
    employee_id,
  ]);
};

module.exports = { viewEmployees, addEmployee, updateEmployee };
