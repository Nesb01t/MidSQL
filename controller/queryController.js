const mysql = require("../utils/mysql");

class QueryController {
  constructor() {}

  async queryDBList() {
    var dbList = "";
    await new Promise((resolve) => {
      mysql.getDBList((res) => {
        dbList = res;
        resolve();
      });
    });
    return dbList;
  }
}

module.exports = QueryController;
