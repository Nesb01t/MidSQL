const KoaRouter = require("koa-router");

const list = new KoaRouter();

list.get("/test", async (ctx) => {
  ctx.body = "列表 - test";
});

list.get("/main", async (ctx) => {
  ctx.body = "列表 - main";
});

module.exports = list;
