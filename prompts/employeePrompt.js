const pool = require("../config/connection");

function findEmployee() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query(
        "SELECT id, first_name, last_name FROM employee"
      );
      resolve(result.rows);
    } catch (error) {
      console.error("Error executing query", error);
      reject(error);
    }
  });
}

module.exports = findEmployee;
