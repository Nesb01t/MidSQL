module.exports = async (ctx, next) => {
  let statusCode = 0;
  try {
    await next();
    statusCode = ctx.status; // 获得结果错误码
  } catch (err) {
    statusCode = 500;
  }

  let errorText = "[SUCCESS] 接口被正常调用";
  if (statusCode >= 400) {
    switch (statusCode) {
      case 400:
      case 404:
      case 500:
        errorText = "[ERROR] 错误码: " + statusCode;
        break;
      default:
        errorText = "[ERROR] 遇到了不可预料的错误";
        break;
    }
  }
  ctx.response.status = statusCode;
  console.log(errorText);
};
