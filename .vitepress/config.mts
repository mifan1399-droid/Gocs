import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "src",
  
  title: "米饭的笔记博客",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    sidebar: [
      {
        text: 'Node',
        items: [
          { text: '什么是Node', link: '/node/node.md' },
          { text: 'NPM包管理器', link: '/node/npm.md' },
          {text:'脚手架',link:'/node/脚手架.md'},
          {text:'文件操作与模块编程',link:'/node/文件操作与模块编程.md'},
          {text:'服务器端开发基础',link:'/node/服务器端开发基础.md'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
