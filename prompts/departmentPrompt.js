const pool = require("../config/connection");

function findDepartment() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query("SELECT name FROM department");
      resolve(result.rows);
    } catch (error) {
      console.error("Error executing query", error);
      reject(error);
    }
  });
}

module.exports = findDepartment;
