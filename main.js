const Koa = require("koa");
const app = new Koa();

const router = require("./router/index.js");
const config = require("./global.config.js");
const errorCollector = require("./middleware/errorCollector.js");

const port = 3000;

// 错误码采集中间件
app.use(errorCollector);

// Router 路由管理
app.use(router.routes(), router.allowedMethods());

/* MAIN PROCESS */
app.listen(config.port, () => {
  console.log("Server is running at 3000");
});
