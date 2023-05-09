var mysql = require("mysql");
var config = require("../mysql.config.js");

const connection = mysql.createConnection(config);

connection.connect();

connection.query("show databases", function (err, res, fields) {
  if (err) throw err;
  console.log("the solution is: ", res[0]);
});

connection.end();
