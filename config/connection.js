// Require mysql module
var mysql = require("mysql");

// Create connection to MySql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Start the database connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection module
module.exports = connection;