var mysql = require("mysql");
var config = require("../mysql.config.js");

// 链接数据库池
var mysqlPool = mysql.createPool(config);

// MySQL query
function query(sql, callback) {
  mysqlPool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release();
    });
  });
}

exports.query = query;
