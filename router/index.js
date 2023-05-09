const KoaRouter = require("koa-router");

const router = new KoaRouter();
const list = require("./list");

router.get("/", async (ctx) => {
  ctx.body = "首页";
});

router.use("/list", list.routes(), list.allowedMethods());
router.use("/error", list.routes(), list.allowedMethods());

router.redirect("/home", "/");

module.exports = router;
