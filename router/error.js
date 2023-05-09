const KoaRouter = require("koa-router");

const list = new KoaRouter();

list.get("/", async (ctx) => {
  ctx.body = "访问页面不存在!";
});

module.exports = list;
