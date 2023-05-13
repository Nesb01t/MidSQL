# MidSQL

快速部署的 `"后端 + 数据库"` 连接模型~

适合 `Node.js/Koa` 学习者，或需要快速部署后端的前端开发人员。

## 如何运行？

---

1. 通过 `Git / GitHub` 将项目 clone 至本地
2. 安装 `Node.js` 依赖
3. 运行 `main.js` 或者使用 npm 运行

## 开发新内容！

---

MidSQL 中包含了 `Koa.js` 框架和 `MySQL` 数据库的最简模型，需要您自行开发接口和实际的业务逻辑！

### Koa: 依赖关系

- KoaRouter - 路由管理
- MySQL - 数据库

### MidSQL: 中间件

关键的中间件都存放在 `./middleware` 中

- querylogger - 在 `console` 中输出数据情况
- errorCollector - 采集接口调用时的 `statusCode` 错误

## 了解项目结构

---

- **middleware** 存放 `Koa.js` 中间件
- **router** 存放 `KoaRouter` 路由
- **test** 可以直接运行的测试 `js` 用例
- **utils** 属于核心依赖的工具模块 / 类
- **./main.js** 入口程序
- **./main.ts** TypeScript 入口程序
- **./mysql.config.js** 数据库账号密码配置
- **./global.config.js** 后端服务全局配置
- **./package.json** Node.js 包管理
- **./yarn.lock** Yarn 包管理
- **./gitignore** Git 忽略文件
