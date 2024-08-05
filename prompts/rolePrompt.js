const pool = require("../config/connection");

function findRoles() {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await pool.query("SELECT id, title FROM role");
      resolve(result.rows);
    } catch (error) {
      console.error("Error executing query", error);
      reject(error);
    }
  });
}

module.exports = findRoles;
