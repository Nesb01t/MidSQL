var mysql = require("mysql");
var config = require("../mysql.config.js");
var queryLogger = require("../middleware/querylogger.js");

const connection = mysql.createConnection(config);

connection.connect();

connection.query("show databases;", queryLogger);

connection.end();
