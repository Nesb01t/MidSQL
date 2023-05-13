const QueryController = require("../controller/queryController");
const queryController = new QueryController();

var dbList = queryController.queryDBList();
console.log(dbList);
