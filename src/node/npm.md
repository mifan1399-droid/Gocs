# npm包管理器
   ## npm包
     你写了一个包，想给别人用，那么你需要发布这个包，发布到npm仓库。

     发布包的步骤：
     1. 注册npm账号
     2. 登录npm账号
     3. 初始化npm包
     4. 发布npm包

   ## npm的使用
     npm --version 查看npm版本
     npm --help 查看npm帮助
     npm init 初始化npm包 对node项目进行初始化 生成package.json文件
        其中的字段含义：
        name：包的名称
        version：包的版本号
        description：包的描述
        main：包的入口文件
        scripts：包的脚本命令
            例如：run': 'node index.js'
            运行的时候就可以使用 npm run dev 来运行index.js文件
        dependencies：包的依赖
        devDependencies：包的开发依赖
