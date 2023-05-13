const KoaRouter = require("koa-router");
const router = new KoaRouter();

const list = require("./routes/list");
const error = require("./routes/error");

/* 首页 Router */
router.get("/", async (ctx) => {
  ctx.body = "首页";
});

/* 二级路由列表 */
router.use("/list", list.routes(), list.allowedMethods());
router.use("/error", error.routes(), error.allowedMethods());
router.use("/dblist", error.routes(), error.allowedMethods());

module.exports = router;
