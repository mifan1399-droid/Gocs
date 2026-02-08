# 使用 Express 快速进行 Web 开发
## Express 介绍

● Express 是一个基于 Node.js 平台，快速、开放、极简的 web 开发框架。
● Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能。
## 安装
```
# 创建并切换到 myapp 目录
mkdir myapp
cd myapp

# 初始化 package.json 文件
npm init -y

# 安装 express 到项目中
npm i express
```
### 初始化
```
// 0. 加载 Express
const express = require("express");

// 1. 调用 express() 得到一个 app
//    类似于 http.createServer()
const app = express();

// 2. 设置请求对应的处理函数
//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数
app.get("/", (req, res) => {
  res.send("hello world");
});

// 3. 监听端口号，启动 Web 服务
app.listen(3000, () => console.log("app listening on port 3000!"));
```
### 基本路由
路由（Routing）是由一个 URI（或者叫路径标识）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。

每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

路由的定义的结构如下：
```
app.METHOD(PATH, HANDLER);
```
其中：

● app 是 express 实例
● METHOD 是一个 HTTP 请求方法
● PATH 是服务端路径（定位标识）
● HANDLER 是当路由匹配到时需要执行的处理函数

下面是一些基本示例。

Respond with Hello World! on the homepage:
```
// 当你以 GET 方法请求 / 的时候，执行对应的处理函数
app.get("/", function(req, res) {
  res.send("Hello World!");
});
```
### 处理静态资源
```
// 开放 public 目录中的资源
// 不需要访问前缀
app.use(express.static("public"));

// 开放 files 目录资源，同上
app.use(express.static("files"));

// 开放 public 目录，限制访问前缀
app.use("/public", express.static("public"));

// 开放 public 目录资源，限制访问前缀
app.use("/static", express.static("public"));

// 开放 publi 目录，限制访问前缀
// path.join(__dirname, 'public') 会得到一个动态的绝对路径
app.use("/static", express.static(path.join(__dirname, "public")));
```


### 使用模板引擎
我们可以使用模板引擎处理服务端渲染，但是 Express 为了保持其极简灵活的特性并没有提供类似的功能。

同样的，Express 也是开放的，它支持开发人员根据自己的需求将模板引擎和 Express 结合实现服务端渲染的能力。

配置使用 art-template 模板引擎

这里我们以 art-template 模板引擎为例演示如何和 Express 结合使用。

安装：

npm install art-template express-art-template

配置：

// 第一个参数用来配置视图的后缀名，这里是 art ，则你存储在 views 目录中的模板文件必须是 xxx.art
// app.engine('art', require('express-art-template'))

// 这里我把 art 改为 html
app.engine("html", require("express-art-template"));

使用示例：

app.get("/", function(req, res) {
  // render 方法默认会去项目的 views 目录中查找 index.html 文件
  // render 方法的本质就是将读取文件和模板引擎渲染这件事儿给封装起来了
  res.render("index.html", {
    title: "hello world"
  });
});

如果希望修改默认的 views 视图渲染存储目录，可以：

// 第一个参数 views 是一个特定标识，不能乱写
// 第二个参数给定一个目录路径作为默认的视图查找目录
app.set("views", 目录路径);

其它常见模板引擎

JavaScript 模板引擎有很多，并且他们的功能都大抵相同，但是不同的模板引擎也各有自己的特色。

大部分 JavaScript 模板引擎都可以在 Node 中使用，下面是一些常见的模板引擎。

● ejs
● handlebars
● jade
  ○ 后改名为 pug
● nunjucks

解析表单 post 请求体

```

在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用一个第三方包：body-parser。

安装：

npm install --save body-parser

配置：

var express = require("express");
// 0. 引包
var bodyParser = require("body-parser");

var app = express();

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

使用：

app.use(function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  // 可以通过 req.body 来获取表单 POST 请求体数据
  res.end(JSON.stringify(req.body, null, 2));
});

```
```

安装：

npm install express-session

配置：

// 该插件会为 req 请求对象添加一个成员：req.session 默认是一个对象
// 这是最简单的配置方式，暂且先不用关心里面参数的含义
app.use(
  session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: "itcast",
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
  })
);

使用：

// 添加 Session 数据
req.session.foo = "bar";

// 获取 Session 数据
req.session.foo;

**默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把 Session 进行持久化存储。**



一个非常基础的路由：

var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});

路由方法

// GET method route
app.get("/", function(req, res) {
  res.send("GET request to the homepage");
});

// POST method route
app.post("/", function(req, res) {
  res.send("POST request to the homepage");
});

路由路径

This route path will match requests to the root route, /.

app.get("/", function(req, res) {
  res.send("root");
});

This route path will match requests to /about.

app.get("/about", function(req, res) {
  res.send("about");
});

This route path will match requests to /random.text.

app.get("/random.text", function(req, res) {
  res.send("random.text");
});

Here are some examples of route paths based on string patterns.

This route path will match acd and abcd.

app.get("/ab?cd", function(req, res) {
  res.send("ab?cd");
});

This route path will match abcd, abbcd, abbbcd, and so on.

app.get("/ab+cd", function(req, res) {
  res.send("ab+cd");
});

This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get("/ab*cd", function(req, res) {
  res.send("ab*cd");
});

This route path will match /abe and /abcde.

app.get("/ab(cd)?e", function(req, res) {
  res.send("ab(cd)?e");
});

Examples of route paths based on regular expressions:

This route path will match anything with an “a” in the route name.

app.get(/a/, function(req, res) {
  res.send("/a/");
});

This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, function(req, res) {
  res.send("/.*fly$/");
});

动态路径

Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

定义动态的路由路径：

app.get("/users/:userId/books/:bookId", function(req, res) {
  res.send(req.params);
});

路由处理方法

app.route()

express.Router

Create a router file named router.js in the app directory, with the following content:

const express = require("express");

const router = express.Router();

router.get("/", function(req, res) {
  res.send("home page");
});

router.get("/about", function(req, res) {
  res.send("About page");
});

module.exports = router;

Then, load the router module in the app:

const router = require("./router");

// ...

app.use(router);

在 Express 中获取客户端请求参数的三种方式

例如，有一个地址：/a/b/c?foo=bar&id=123

查询字符串参数

获取 ?foo=bar&id=123

console.log(req.query);

结果如下：

{
  foo: 'bar',
  id: '123'
}

请求体参数

POST 请求才有请求体，我们需要单独配置 body-parser 中间件才可以获取。
只要程序中配置了 body-parser 中间件，我们就可以通过 req.body 来获取表单 POST 请求体数据。

req.body
// => 得到一个请求体对象

动态的路径参数

在 Express 中，支持把一个路由设计为动态的。例如：

// /users/:id 要求必须以 /users/ 开头，:id 表示动态的，1、2、3、abc、dnsaj 任意都行
// 注意：:冒号很重要，如果你不加，则就变成了必须 === /users/id
// 为啥叫 id ，因为是动态的路径，服务器需要单独获取它，所以得给它起一个名字
// 那么我们就可以通过 req.params 来获取路径参数
app.get("/users/:id", (req, res, next) => {
  console.log(req.params.id);
});

// /users/*/abc
// req.params.id
app.get("/users/:id/abc", (req, res, next) => {
  console.log(req.params.id);
});

// /users/*/*
// req.params.id
// req.params.abc
app.get("/users/:id/:abc", (req, res, next) => {
  console.log(req.params.id);
});

// /*/*/*
// req.params.users
app.get("/:users/:id/:abc", (req, res, next) => {
  console.log(req.params.id);
});

// /*/id/*
app.get("/:users/id/:abc", (req, res, next) => {
  console.log(req.params.id);
});
```

