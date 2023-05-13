const KoaRouter = require("koa-router");
const router = new KoaRouter();

// router -> dblist
router.get("/", async (ctx) => {
  ctx.body = "访问页面不存在!";
});

module.exports = router;
