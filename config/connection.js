const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(
  {
    user: "postgres",
    password: "root",
    host: "localhost",
    database: "business_db",
  },
  console.log("Connected to the business_db database.")
);

pool.connect();

module.exports = pool;
