const db = require("../utils/mysql");

var dblist = db.showdb();
console.log(dblist);
