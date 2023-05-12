const Koa = require("koa");
const app = new Koa();

const router = require("./router/index.js");
const errorCollector = require("./middleware/errorCollector.js");

const port = 3000;

app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status === 404)) {
    ctx.response.redirect("/404");
  }
});
app.use(errorCollector);
app.use(router.routes(), router.allowedMethods());
app.listen(port, () => {
  console.log("Server is running at 3000");
});
