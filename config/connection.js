const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(
  {
    user: "postgres",
    password: "B@seball30",
    host: "localhost",
    database: "employees_db",
  },
  console.log("Connected to the employees_db database.")
);

pool.connect();

module.exports = pool;
