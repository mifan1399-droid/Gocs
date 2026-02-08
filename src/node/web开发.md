● 理解 HTTP 协议概念
● 掌握 http 模块的基本使用
## 电话打通了 ，但是没人接
```
// 0. 加载 http 核心模块
const http = require("http");

// 1. 创建服务器，得到 Server 实例
const server = http.createServer();

// 2. 监听客户端的 request 请求事件，设置请求处理函数
server.on("request", (request, response) => {
  // request.header
  console.log("收到客户端的请求了");
});

// 3. 绑定端口号，启动服务器
//    真正需要通信的应用程序
//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序
//    ip 地址用来定位具体的计算机
//    port 端口号用来定位具体的应用程序
//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用
//    开发测试的时候使用一些非默认端口，防止冲突
server.listen(3000, function() {
  console.log("Server is running at port 3000.");
});
```
## Node服务器
```
// 0. 加载 http 核心模块
const http = require("http");

// 1. 创建服务器，得到 Server 实例
const server = http.createServer();

// 2. 监听客户端的 request 请求事件，设置请求处理函数
//    req 请求对象（获取客户端信息）
//    res 响应对象（发送响应数据）
//      end() 方法
server.on("request", (req, res) => {
  // 发送响应数据
  // res.write('hello')
  // res.write(' hello')
  // res.write(' hello')
  // res.write(' hello')
  // res.write(' hello')
  // res.write(' hello')
  // res.write(' hello')

  // 数据写完之后，必须告诉客户端，我的数据发完了，你可以接收处理了
  // 否则客户端还是会一直等待
  // 结束响应，挂断电话
  // res.end()

  const client = req.socket;

  // 推荐
  res.end(`
    您的 ip 地址：${client.remoteAddress}
    您的 port 端口号：${client.remotePort}
`);
});

// 3. 绑定端口号，启动服务器
//    真正需要通信的应用程序
//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序
//    ip 地址用来定位具体的计算机
//    port 端口号用来定位具体的应用程序
//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用
//    开发测试的时候使用一些非默认端口，防止冲突
server.listen(3000, function() {
  console.log("Server is running at port 3000.");
});
```
## 根据不同 url 地址处理不同请求
```
// 0. 加载 http 核心模块
const http = require("http");

// 1. 创建服务器，得到 Server 实例
const server = http.createServer();

// 2. 监听客户端的 request 请求事件，设置请求处理函数
//    req 请求对象（获取客户端信息）
//    res 响应对象（发送响应数据）
//      end() 方法
// 任何请求都会触发 request 请求事件
// /a /b /c /dsanjdasjk
// req 请求对象中有一个属性：url 可以获取当前客户端的请求路径
server.on("request", (req, res) => {
  // console.log(req.url)
  // 127.0.0.1:3000/abc
  // 一切请求路径都始终是以 / 开头
  // / index page
  // /login login page
  // /about about me
  // 其它的 404 Not Found.
  // res.end('index page')

  const url = req.url;

  // 通常情况下，都会把 / 当作首页
  // 因为用户手动输入地址，不加任何路径，浏览器会自动补上 / 去请求
  if (url === "/") {
    console.log("首页");
    res.end(`
<h1>首页</h1>
<ul>
<li>
  <a href="/login">登陆</a>
</li>
<li>
  <a href="/reg">注册</a>
</li>
</ul>
`);
  } else if (url === "/login") {
    console.log("登陆");
    res.end("login page");
  } else if (url === "/reg") {
    console.log("注册");
    res.end("reg page");
  } else {
    console.log("404 不认识");
    res.end("404 Not Found.");
  }
});

server.listen(3000, function() {
  console.log("Server is running at port 3000.");
});
```
## 处理页面中的多个请求
```
/**
 * http 结合 fs 发送文件内容
 */

const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      if (err) {
        return res.end("404 Not Found.");
      }
      // 响应数据类型只能是：字符串 和 二进制数据
      // TypeError: First argument must be a string or Buffer
      // res.end(123)

      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(data);
    });
  } else if (url === "/css/main.css") {
    fs.readFile("./views/css/main.css", (err, data) => {
      if (err) {
        return res.end("404 Not Found.");
      }
      // 响应数据类型只能是：字符串 和 二进制数据
      // TypeError: First argument must be a string or Buffer
      // res.end(123)

      res.setHeader("Content-Type", "text/css; charset=utf-8");
      res.end(data);
    });
  } else if (url === "/js/main.js") {
    fs.readFile("./views/js/main.js", (err, data) => {
      if (err) {
        return res.end("404 Not Found.");
      }
      // 响应数据类型只能是：字符串 和 二进制数据
      // TypeError: First argument must be a string or Buffer
      // res.end(123)

      res.setHeader("Content-Type", "application/x-javascript; charset=utf-8");
      res.end(data);
    });
  } else if (url === "/img/ab2.jpg") {
    fs.readFile("./views/img/ab2.jpg", (err, data) => {
      if (err) {
        return res.end("404 Not Found.");
      }
      // 响应数据类型只能是：字符串 和 二进制数据
      // TypeError: First argument must be a string or Buffer
      // res.end(123)

      // 只有文本类型需要加 charset 编码
      // 图片不是文本，所以不用加编码
      res.setHeader("Content-Type", "image/jpeg");
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("running...");
});
```