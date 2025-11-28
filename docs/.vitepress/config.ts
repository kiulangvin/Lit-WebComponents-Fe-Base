import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Web Components",
  description: "Lit + Vite Web Components 组件文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started.md' },
      { text: '组件', link: '/components/counter.md' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'Counter', link: '/components/counter.md' },
          { text: 'Card', link: '/components/card.md' },
          { text: 'Button', link: '/components/button.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
