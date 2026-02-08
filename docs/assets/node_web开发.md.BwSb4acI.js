import{_ as n,o as a,c as p,ah as e}from"./chunks/framework.xKnhVJF3.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"node/web开发.md","filePath":"node/web开发.md"}'),l={name:"node/web开发.md"};function i(t,s,r,c,o,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>● 理解 HTTP 协议概念 ● 掌握 http 模块的基本使用</p><h2 id="电话打通了-但是没人接" tabindex="-1">电话打通了 ，但是没人接 <a class="header-anchor" href="#电话打通了-但是没人接" aria-label="Permalink to “电话打通了 ，但是没人接”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 0. 加载 http 核心模块</span></span>
<span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 创建服务器，得到 Server 实例</span></span>
<span class="line"><span>const server = http.createServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 监听客户端的 request 请求事件，设置请求处理函数</span></span>
<span class="line"><span>server.on(&quot;request&quot;, (request, response) =&gt; {</span></span>
<span class="line"><span>  // request.header</span></span>
<span class="line"><span>  console.log(&quot;收到客户端的请求了&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. 绑定端口号，启动服务器</span></span>
<span class="line"><span>//    真正需要通信的应用程序</span></span>
<span class="line"><span>//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序</span></span>
<span class="line"><span>//    ip 地址用来定位具体的计算机</span></span>
<span class="line"><span>//    port 端口号用来定位具体的应用程序</span></span>
<span class="line"><span>//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用</span></span>
<span class="line"><span>//    开发测试的时候使用一些非默认端口，防止冲突</span></span>
<span class="line"><span>server.listen(3000, function() {</span></span>
<span class="line"><span>  console.log(&quot;Server is running at port 3000.&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="node服务器" tabindex="-1">Node服务器 <a class="header-anchor" href="#node服务器" aria-label="Permalink to “Node服务器”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 0. 加载 http 核心模块</span></span>
<span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 创建服务器，得到 Server 实例</span></span>
<span class="line"><span>const server = http.createServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 监听客户端的 request 请求事件，设置请求处理函数</span></span>
<span class="line"><span>//    req 请求对象（获取客户端信息）</span></span>
<span class="line"><span>//    res 响应对象（发送响应数据）</span></span>
<span class="line"><span>//      end() 方法</span></span>
<span class="line"><span>server.on(&quot;request&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>  // 发送响应数据</span></span>
<span class="line"><span>  // res.write(&#39;hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span>  // res.write(&#39; hello&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 数据写完之后，必须告诉客户端，我的数据发完了，你可以接收处理了</span></span>
<span class="line"><span>  // 否则客户端还是会一直等待</span></span>
<span class="line"><span>  // 结束响应，挂断电话</span></span>
<span class="line"><span>  // res.end()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const client = req.socket;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 推荐</span></span>
<span class="line"><span>  res.end(\`</span></span>
<span class="line"><span>    您的 ip 地址：\${client.remoteAddress}</span></span>
<span class="line"><span>    您的 port 端口号：\${client.remotePort}</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. 绑定端口号，启动服务器</span></span>
<span class="line"><span>//    真正需要通信的应用程序</span></span>
<span class="line"><span>//    如何从 a 计算机的 应用程序 通信到 b 计算机的 应用程序</span></span>
<span class="line"><span>//    ip 地址用来定位具体的计算机</span></span>
<span class="line"><span>//    port 端口号用来定位具体的应用程序</span></span>
<span class="line"><span>//    联网通信的应用程序必须占用一个端口号，同一时间同一个端口号只能被一个应用程序占用</span></span>
<span class="line"><span>//    开发测试的时候使用一些非默认端口，防止冲突</span></span>
<span class="line"><span>server.listen(3000, function() {</span></span>
<span class="line"><span>  console.log(&quot;Server is running at port 3000.&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="根据不同-url-地址处理不同请求" tabindex="-1">根据不同 url 地址处理不同请求 <a class="header-anchor" href="#根据不同-url-地址处理不同请求" aria-label="Permalink to “根据不同 url 地址处理不同请求”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>// 0. 加载 http 核心模块</span></span>
<span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 创建服务器，得到 Server 实例</span></span>
<span class="line"><span>const server = http.createServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 监听客户端的 request 请求事件，设置请求处理函数</span></span>
<span class="line"><span>//    req 请求对象（获取客户端信息）</span></span>
<span class="line"><span>//    res 响应对象（发送响应数据）</span></span>
<span class="line"><span>//      end() 方法</span></span>
<span class="line"><span>// 任何请求都会触发 request 请求事件</span></span>
<span class="line"><span>// /a /b /c /dsanjdasjk</span></span>
<span class="line"><span>// req 请求对象中有一个属性：url 可以获取当前客户端的请求路径</span></span>
<span class="line"><span>server.on(&quot;request&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>  // console.log(req.url)</span></span>
<span class="line"><span>  // 127.0.0.1:3000/abc</span></span>
<span class="line"><span>  // 一切请求路径都始终是以 / 开头</span></span>
<span class="line"><span>  // / index page</span></span>
<span class="line"><span>  // /login login page</span></span>
<span class="line"><span>  // /about about me</span></span>
<span class="line"><span>  // 其它的 404 Not Found.</span></span>
<span class="line"><span>  // res.end(&#39;index page&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const url = req.url;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 通常情况下，都会把 / 当作首页</span></span>
<span class="line"><span>  // 因为用户手动输入地址，不加任何路径，浏览器会自动补上 / 去请求</span></span>
<span class="line"><span>  if (url === &quot;/&quot;) {</span></span>
<span class="line"><span>    console.log(&quot;首页&quot;);</span></span>
<span class="line"><span>    res.end(\`</span></span>
<span class="line"><span>&lt;h1&gt;首页&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;ul&gt;</span></span>
<span class="line"><span>&lt;li&gt;</span></span>
<span class="line"><span>  &lt;a href=&quot;/login&quot;&gt;登陆&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/li&gt;</span></span>
<span class="line"><span>&lt;li&gt;</span></span>
<span class="line"><span>  &lt;a href=&quot;/reg&quot;&gt;注册&lt;/a&gt;</span></span>
<span class="line"><span>&lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span>\`);</span></span>
<span class="line"><span>  } else if (url === &quot;/login&quot;) {</span></span>
<span class="line"><span>    console.log(&quot;登陆&quot;);</span></span>
<span class="line"><span>    res.end(&quot;login page&quot;);</span></span>
<span class="line"><span>  } else if (url === &quot;/reg&quot;) {</span></span>
<span class="line"><span>    console.log(&quot;注册&quot;);</span></span>
<span class="line"><span>    res.end(&quot;reg page&quot;);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    console.log(&quot;404 不认识&quot;);</span></span>
<span class="line"><span>    res.end(&quot;404 Not Found.&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.listen(3000, function() {</span></span>
<span class="line"><span>  console.log(&quot;Server is running at port 3000.&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="处理页面中的多个请求" tabindex="-1">处理页面中的多个请求 <a class="header-anchor" href="#处理页面中的多个请求" aria-label="Permalink to “处理页面中的多个请求”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * http 结合 fs 发送文件内容</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const http = require(&quot;http&quot;);</span></span>
<span class="line"><span>const fs = require(&quot;fs&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const server = http.createServer();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.on(&quot;request&quot;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const url = req.url;</span></span>
<span class="line"><span>  console.log(url);</span></span>
<span class="line"><span>  if (url === &quot;/&quot;) {</span></span>
<span class="line"><span>    fs.readFile(&quot;./views/index.html&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) {</span></span>
<span class="line"><span>        return res.end(&quot;404 Not Found.&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 响应数据类型只能是：字符串 和 二进制数据</span></span>
<span class="line"><span>      // TypeError: First argument must be a string or Buffer</span></span>
<span class="line"><span>      // res.end(123)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      res.setHeader(&quot;Content-Type&quot;, &quot;text/html; charset=utf-8&quot;);</span></span>
<span class="line"><span>      res.end(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } else if (url === &quot;/css/main.css&quot;) {</span></span>
<span class="line"><span>    fs.readFile(&quot;./views/css/main.css&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) {</span></span>
<span class="line"><span>        return res.end(&quot;404 Not Found.&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 响应数据类型只能是：字符串 和 二进制数据</span></span>
<span class="line"><span>      // TypeError: First argument must be a string or Buffer</span></span>
<span class="line"><span>      // res.end(123)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      res.setHeader(&quot;Content-Type&quot;, &quot;text/css; charset=utf-8&quot;);</span></span>
<span class="line"><span>      res.end(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } else if (url === &quot;/js/main.js&quot;) {</span></span>
<span class="line"><span>    fs.readFile(&quot;./views/js/main.js&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) {</span></span>
<span class="line"><span>        return res.end(&quot;404 Not Found.&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 响应数据类型只能是：字符串 和 二进制数据</span></span>
<span class="line"><span>      // TypeError: First argument must be a string or Buffer</span></span>
<span class="line"><span>      // res.end(123)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      res.setHeader(&quot;Content-Type&quot;, &quot;application/x-javascript; charset=utf-8&quot;);</span></span>
<span class="line"><span>      res.end(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  } else if (url === &quot;/img/ab2.jpg&quot;) {</span></span>
<span class="line"><span>    fs.readFile(&quot;./views/img/ab2.jpg&quot;, (err, data) =&gt; {</span></span>
<span class="line"><span>      if (err) {</span></span>
<span class="line"><span>        return res.end(&quot;404 Not Found.&quot;);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 响应数据类型只能是：字符串 和 二进制数据</span></span>
<span class="line"><span>      // TypeError: First argument must be a string or Buffer</span></span>
<span class="line"><span>      // res.end(123)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 只有文本类型需要加 charset 编码</span></span>
<span class="line"><span>      // 图片不是文本，所以不用加编码</span></span>
<span class="line"><span>      res.setHeader(&quot;Content-Type&quot;, &quot;image/jpeg&quot;);</span></span>
<span class="line"><span>      res.end(data);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server.listen(3000, () =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;running...&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre></div>`,9)])])}const h=n(l,[["render",i]]);export{q as __pageData,h as default};
