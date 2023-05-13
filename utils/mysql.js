var mysql = require("mysql");
var config = require("../mysql.config.js");

var connection = mysql.createConnection(config);

function query(sql) {
  // var sql = "SELECT * FROM midsql";
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("[ERROR]" + err.message);
      return;
    }

    console.log(res);
  });
}

function getDBList(callback) {
  var sql = "SHOW DATABASES";
  connection.connect();
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("[ERROR]" + err.message);
      return;
    }

    dbList = [];
    for (i in res) {
      dbList.push(res[i].Database);
    }
    callback(dbList);
  });
  connection.end();
}

module.exports = {
  query,
  getDBList,
};
