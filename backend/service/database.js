const mysql = require("mysql");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Peacedu07",
  database: "annabelle",
});

connection.query = promisify(connection.query);

module.exports = connection;