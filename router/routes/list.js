const KoaRouter = require("koa-router");
const router = new KoaRouter();

// router -> list
router.get("/test", async (ctx) => {
  ctx.body = "列表 - test";
});
router.get("/main", async (ctx) => {
  ctx.body = "列表 - main";
});

module.exports = router;
