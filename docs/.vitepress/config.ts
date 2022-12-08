module.exports = {
  lang: 'zh-CN',
  title: 'lazy-js-utils',
  base: '/',
  description: '减少重复代码和开发成本的javascript工具库',
  lastUpdated: true,
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/kv.png' }],
  ],
  themeConfig: {
    lastUpdatedText: 'Updated Date',
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Simon-He95/lazy-js-utils' }],
    editLink: {
      pattern: 'https://github.com/Simon-He95/lazy-js-utils',
      text: '在GitHub编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present SimonHe',
    },
    algolia: {
      appId: 'STWB4WOZ42',
      apiKey: '1701b060177b65718c4edbc4b1a595e3',
      indexName: 'lazy-js-utils',
    },
  },
}

function nav() {
  return [
    { text: '介绍', link: '/guide/' },
    { text: '加入我们', link: 'https://github.com/Simon-He95/lazy-js-utils' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: false,
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/start' },
        { text: '参与编辑', link: '/guide/EditMd' },
      ],
    },
    {
      text: 'Node',
      collapsible: false,
      items: [
        { text: 'node', link: '/guide/Node' },
      ],
    },
    {
      text: 'Canvas',
      collapsible: false,
      items: [
        { text: 'canvas', link: '/guide/Canvas' },
      ],
    },
    {
      text: 'Number',
      collapsible: false,
      items: [
        { text: '数字', link: '/guide/Number' },
      ],
    },
    {
      text: 'Random',
      collapsible: false,
      items: [
        { text: '随机函数', link: '/guide/Random' },
      ],
    },
    {
      text: 'Date',
      collapsible: false,
      items: [
        { text: '日期', link: '/guide/Date' },
      ],
    },
    {
      text: 'Event',
      collapsible: false,
      items: [
        { text: '事件', link: '/guide/Event' },
      ],
    },
    {
      text: 'Log',
      collapsible: false,
      items: [
        { text: '日志', link: '/guide/Log' },
      ],
    },
    {
      text: 'Message',
      collapsible: false,
      items: [
        { text: '通信', link: '/guide/Message' },
      ],
    },
    {
      text: 'Vite',
      collapsible: false,
      items: [
        { text: '插件', link: '/guide/VitePlugin' },
      ],
    },
    {
      text: 'Array',
      collapsible: false,
      items: [
        { text: '数组', link: '/guide/Array' },
      ],
    },
    {
      text: 'Compress',
      collapsible: false,
      items: [
        { text: '压缩', link: '/guide/Compress' },
      ],
    },
    {
      text: 'Css',
      collapsible: false,
      items: [
        { text: 'css', link: '/guide/Css' },
      ],
    },
    {
      text: 'Flex',
      collapsible: false,
      items: [
        { text: '布局', link: '/guide/Flex' },
      ],
    },
    {
      text: 'Https',
      collapsible: false,
      items: [
        { text: 'https', link: '/guide/Https' },
      ],
    },
    {
      text: 'Request',
      collapsible: false,
      items: [
        { text: '请求', link: '/guide/Request' },
      ],
    },
    {
      text: 'Javascript',
      collapsible: false,
      items: [
        { text: 'js', link: '/guide/Javascript' },
      ],
    },
    {
      text: 'Monitor',
      collapsible: false,
      items: [
        { text: '设备信息', link: '/guide/Monitor' },
      ],
    },
    {
      text: 'Parse',
      collapsible: false,
      items: [
        { text: '解析', link: '/guide/Parse' },
      ],
    },
    {
      text: 'Qrcode',
      collapsible: false,
      items: [
        { text: '二维码', link: '/guide/Qrcode' },
      ],
    },
    {
      text: 'Screen',
      collapsible: false,
      items: [
        { text: '浏览器', link: '/guide/Screen' },
      ],
    },
    {
      text: 'Script',
      collapsible: false,
      items: [
        { text: '动态脚本', link: '/guide/Script' },
      ],
    },
    {
      text: 'Scroll',
      collapsible: false,
      items: [
        { text: '滚动', link: '/guide/Scroll' },
      ],
    },
    {
      text: 'Speak',
      collapsible: false,
      items: [
        { text: '语言', link: '/guide/Speak' },
      ],
    },
    {
      text: 'Perf',
      collapsible: false,
      items: [
        { text: '性能优化', link: '/guide/Perf' },
      ],
    },
    {
      text: 'Storage',
      collapsible: false,
      items: [
        { text: '浏览器数据存储', link: '/guide/Storage' },
      ],
    },
    {
      text: 'String',
      collapsible: false,
      items: [
        { text: '字符串', link: '/guide/String' },
      ],
    },
    {
      text: 'To',
      collapsible: false,
      items: [
        { text: '类型转换', link: '/guide/To' },
      ],
    },
  ]
}
