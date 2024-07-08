const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

require("dotenv").config();

const client = New Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

const schemaSql = path.join(__dirname, "../db/schema.sql");
const seedsSql = path.join(__dirname, "../db/seeds.sql");

const initDatabase = async () => {
    try {
        const schema = fs.readFileSync(schemaSql, "utf8");
        const seeds = fs.readFileSync(seedsSql, "utf8");
        await client.connect(schema);
        await client.query(seeds);
        console.log("Database initialized");
    } catch (err) {
        console.error("Error initializing database", err);
    }
};

module.exports = {client, initDatabase};