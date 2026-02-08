import{_ as n,o as a,c as p,ah as e}from"./chunks/framework.xKnhVJF3.js";const q=JSON.parse('{"title":"使用 Express 快速进行 Web 开发","description":"","frontmatter":{},"headers":[],"relativePath":"node/Express.md","filePath":"node/Express.md"}'),l={name:"node/Express.md"};function i(t,s,c,o,r,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="使用-express-快速进行-web-开发" tabindex="-1">使用 Express 快速进行 Web 开发 <a class="header-anchor" href="#使用-express-快速进行-web-开发" aria-label="Permalink to “使用 Express 快速进行 Web 开发”">​</a></h1><h2 id="express-介绍" tabindex="-1">Express 介绍 <a class="header-anchor" href="#express-介绍" aria-label="Permalink to “Express 介绍”">​</a></h2><p>● Express 是一个基于 Node.js 平台，快速、开放、极简的 web 开发框架。 ● Express 不对 Node.js 已有的特性进行二次抽象，只是在它之上扩展了 Web 应用所需的基本功能。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 创建并切换到 myapp 目录</span></span>
<span class="line"><span>mkdir myapp</span></span>
<span class="line"><span>cd myapp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 初始化 package.json 文件</span></span>
<span class="line"><span>npm init -y</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 express 到项目中</span></span>
<span class="line"><span>npm i express</span></span></code></pre></div><h3 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-label="Permalink to “初始化”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 0. 加载 Express</span></span>
<span class="line"><span>const express = require(&quot;express&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 调用 express() 得到一个 app</span></span>
<span class="line"><span>//    类似于 http.createServer()</span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 设置请求对应的处理函数</span></span>
<span class="line"><span>//    当客户端以 GET 方法请求 / 的时候就会调用第二个参数：请求处理函数</span></span>
<span class="line"><span>app.get(&quot;/&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.send(&quot;hello world&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. 监听端口号，启动 Web 服务</span></span>
<span class="line"><span>app.listen(3000, () =&gt; console.log(&quot;app listening on port 3000!&quot;));</span></span></code></pre></div><h3 id="基本路由" tabindex="-1">基本路由 <a class="header-anchor" href="#基本路由" aria-label="Permalink to “基本路由”">​</a></h3><p>路由（Routing）是由一个 URI（或者叫路径标识）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何处理响应客户端请求。</p><p>每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。</p><p>路由的定义的结构如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>app.METHOD(PATH, HANDLER);</span></span></code></pre></div><p>其中：</p><p>● app 是 express 实例 ● METHOD 是一个 HTTP 请求方法 ● PATH 是服务端路径（定位标识） ● HANDLER 是当路由匹配到时需要执行的处理函数</p><p>下面是一些基本示例。</p><p>Respond with Hello World! on the homepage:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 当你以 GET 方法请求 / 的时候，执行对应的处理函数</span></span>
<span class="line"><span>app.get(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;Hello World!&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h3 id="处理静态资源" tabindex="-1">处理静态资源 <a class="header-anchor" href="#处理静态资源" aria-label="Permalink to “处理静态资源”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 开放 public 目录中的资源</span></span>
<span class="line"><span>// 不需要访问前缀</span></span>
<span class="line"><span>app.use(express.static(&quot;public&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开放 files 目录资源，同上</span></span>
<span class="line"><span>app.use(express.static(&quot;files&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开放 public 目录，限制访问前缀</span></span>
<span class="line"><span>app.use(&quot;/public&quot;, express.static(&quot;public&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开放 public 目录资源，限制访问前缀</span></span>
<span class="line"><span>app.use(&quot;/static&quot;, express.static(&quot;public&quot;));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开放 publi 目录，限制访问前缀</span></span>
<span class="line"><span>// path.join(__dirname, &#39;public&#39;) 会得到一个动态的绝对路径</span></span>
<span class="line"><span>app.use(&quot;/static&quot;, express.static(path.join(__dirname, &quot;public&quot;)));</span></span></code></pre></div><h3 id="使用模板引擎" tabindex="-1">使用模板引擎 <a class="header-anchor" href="#使用模板引擎" aria-label="Permalink to “使用模板引擎”">​</a></h3><p>我们可以使用模板引擎处理服务端渲染，但是 Express 为了保持其极简灵活的特性并没有提供类似的功能。</p><p>同样的，Express 也是开放的，它支持开发人员根据自己的需求将模板引擎和 Express 结合实现服务端渲染的能力。</p><p>配置使用 art-template 模板引擎</p><p>这里我们以 art-template 模板引擎为例演示如何和 Express 结合使用。</p><p>安装：</p><p>npm install art-template express-art-template</p><p>配置：</p><p>// 第一个参数用来配置视图的后缀名，这里是 art ，则你存储在 views 目录中的模板文件必须是 xxx.art // app.engine(&#39;art&#39;, require(&#39;express-art-template&#39;))</p><p>// 这里我把 art 改为 html app.engine(&quot;html&quot;, require(&quot;express-art-template&quot;));</p><p>使用示例：</p><p>app.get(&quot;/&quot;, function(req, res) { // render 方法默认会去项目的 views 目录中查找 index.html 文件 // render 方法的本质就是将读取文件和模板引擎渲染这件事儿给封装起来了 res.render(&quot;index.html&quot;, { title: &quot;hello world&quot; }); });</p><p>如果希望修改默认的 views 视图渲染存储目录，可以：</p><p>// 第一个参数 views 是一个特定标识，不能乱写 // 第二个参数给定一个目录路径作为默认的视图查找目录 app.set(&quot;views&quot;, 目录路径);</p><p>其它常见模板引擎</p><p>JavaScript 模板引擎有很多，并且他们的功能都大抵相同，但是不同的模板引擎也各有自己的特色。</p><p>大部分 JavaScript 模板引擎都可以在 Node 中使用，下面是一些常见的模板引擎。</p><p>● ejs ● handlebars ● jade ○ 后改名为 pug ● nunjucks</p><p>解析表单 post 请求体</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用一个第三方包：body-parser。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>安装：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install --save body-parser</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var express = require(&quot;express&quot;);</span></span>
<span class="line"><span>// 0. 引包</span></span>
<span class="line"><span>var bodyParser = require(&quot;body-parser&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var app = express();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 配置 body-parser</span></span>
<span class="line"><span>// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body</span></span>
<span class="line"><span>// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了</span></span>
<span class="line"><span>// parse application/x-www-form-urlencoded</span></span>
<span class="line"><span>app.use(bodyParser.urlencoded({ extended: false }));</span></span>
<span class="line"><span>// parse application/json</span></span>
<span class="line"><span>app.use(bodyParser.json());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(function(req, res) {</span></span>
<span class="line"><span>  res.setHeader(&quot;Content-Type&quot;, &quot;text/plain&quot;);</span></span>
<span class="line"><span>  res.write(&quot;you posted:\\n&quot;);</span></span>
<span class="line"><span>  // 可以通过 req.body 来获取表单 POST 请求体数据</span></span>
<span class="line"><span>  res.end(JSON.stringify(req.body, null, 2));</span></span>
<span class="line"><span>});</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span>安装：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm install express-session</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 该插件会为 req 请求对象添加一个成员：req.session 默认是一个对象</span></span>
<span class="line"><span>// 这是最简单的配置方式，暂且先不用关心里面参数的含义</span></span>
<span class="line"><span>app.use(</span></span>
<span class="line"><span>  session({</span></span>
<span class="line"><span>    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密</span></span>
<span class="line"><span>    // 目的是为了增加安全性，防止客户端恶意伪造</span></span>
<span class="line"><span>    secret: &quot;itcast&quot;,</span></span>
<span class="line"><span>    resave: false,</span></span>
<span class="line"><span>    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>使用：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加 Session 数据</span></span>
<span class="line"><span>req.session.foo = &quot;bar&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取 Session 数据</span></span>
<span class="line"><span>req.session.foo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把 Session 进行持久化存储。**</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>一个非常基础的路由：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var express = require(&quot;express&quot;);</span></span>
<span class="line"><span>var app = express();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// respond with &quot;hello world&quot; when a GET request is made to the homepage</span></span>
<span class="line"><span>app.get(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;hello world&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// GET method route</span></span>
<span class="line"><span>app.get(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;GET request to the homepage&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// POST method route</span></span>
<span class="line"><span>app.post(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;POST request to the homepage&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match requests to the root route, /.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;root&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match requests to /about.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/about&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;about&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match requests to /random.text.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/random.text&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;random.text&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Here are some examples of route paths based on string patterns.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match acd and abcd.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/ab?cd&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;ab?cd&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match abcd, abbcd, abbbcd, and so on.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/ab+cd&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;ab+cd&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/ab*cd&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;ab*cd&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match /abe and /abcde.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/ab(cd)?e&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;ab(cd)?e&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Examples of route paths based on regular expressions:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match anything with an “a” in the route name.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(/a/, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;/a/&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(/.*fly$/, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;/.*fly$/&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Route path: /users/:userId/books/:bookId</span></span>
<span class="line"><span>Request URL: http://localhost:3000/users/34/books/8989</span></span>
<span class="line"><span>req.params: { &quot;userId&quot;: &quot;34&quot;, &quot;bookId&quot;: &quot;8989&quot; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>定义动态的路由路径：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.get(&quot;/users/:userId/books/:bookId&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(req.params);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>路由处理方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.route()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>express.Router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Create a router file named router.js in the app directory, with the following content:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const express = require(&quot;express&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = express.Router();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.get(&quot;/&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;home page&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>router.get(&quot;/about&quot;, function(req, res) {</span></span>
<span class="line"><span>  res.send(&quot;About page&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = router;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Then, load the router module in the app:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const router = require(&quot;./router&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(router);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Express 中获取客户端请求参数的三种方式</span></span>
<span class="line"><span></span></span>
<span class="line"><span>例如，有一个地址：/a/b/c?foo=bar&amp;id=123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查询字符串参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>获取 ?foo=bar&amp;id=123</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(req.query);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>结果如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  foo: &#39;bar&#39;,</span></span>
<span class="line"><span>  id: &#39;123&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请求体参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>POST 请求才有请求体，我们需要单独配置 body-parser 中间件才可以获取。</span></span>
<span class="line"><span>只要程序中配置了 body-parser 中间件，我们就可以通过 req.body 来获取表单 POST 请求体数据。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>req.body</span></span>
<span class="line"><span>// =&gt; 得到一个请求体对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>动态的路径参数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>在 Express 中，支持把一个路由设计为动态的。例如：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /users/:id 要求必须以 /users/ 开头，:id 表示动态的，1、2、3、abc、dnsaj 任意都行</span></span>
<span class="line"><span>// 注意：:冒号很重要，如果你不加，则就变成了必须 === /users/id</span></span>
<span class="line"><span>// 为啥叫 id ，因为是动态的路径，服务器需要单独获取它，所以得给它起一个名字</span></span>
<span class="line"><span>// 那么我们就可以通过 req.params 来获取路径参数</span></span>
<span class="line"><span>app.get(&quot;/users/:id&quot;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params.id);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /users/*/abc</span></span>
<span class="line"><span>// req.params.id</span></span>
<span class="line"><span>app.get(&quot;/users/:id/abc&quot;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params.id);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /users/*/*</span></span>
<span class="line"><span>// req.params.id</span></span>
<span class="line"><span>// req.params.abc</span></span>
<span class="line"><span>app.get(&quot;/users/:id/:abc&quot;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params.id);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /*/*/*</span></span>
<span class="line"><span>// req.params.users</span></span>
<span class="line"><span>app.get(&quot;/:users/:id/:abc&quot;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params.id);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /*/id/*</span></span>
<span class="line"><span>app.get(&quot;/:users/id/:abc&quot;, (req, res, next) =&gt; {</span></span>
<span class="line"><span>  console.log(req.params.id);</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,40)])])}const h=n(l,[["render",i]]);export{q as __pageData,h as default};
