module.exports = {
  lang: 'zh-CN',
  title: 'simon-js-tool',
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
    socialLinks: [{ icon: 'github', link: 'https://github.com/Simon-He95/simon-js-tool' }],
    editLink: {
      pattern: 'https://github.com/Simon-He95/simon-js-tool',
      text: '在GitHub编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present SimonHe',
    },
    algolia: {
      appId: 'STWB4WOZ42',
      apiKey: '1701b060177b65718c4edbc4b1a595e3',
      indexName: 'simon-js-tool',
    },
  },
}

function nav() {
  return [
    { text: '介绍', link: '/guide/' },
    { text: '加入我们', link: 'https://github.com/Simon-He95/simon-js-tool' },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '快速上手', link: '/guide/start' },
        { text: '参与编辑', link: '/guide/EditMd' },
      ],
    },
    {
      text: 'Node',
      collapsible: true,
      items: [
        { text: '常用', link: '/guide/Node' },
      ],
    },
    {
      text: 'Browser',
      collapsible: true,
      items: [
        { text: '常用', link: '/guide/Browser' },
        { text: 'Dom相关', link: '/guide/Dom' },
        { text: '设备信息', link: '/guide/Device' },
        { text: '检测性能', link: '/guide/Performance' },
        { text: '声音相关', link: '/guide/Voice' },
        { text: '数据上报', link: '/guide/Report' },
      ],
    },
    {
      text: 'Image',
      items: [
        { text: '图片相关', link: '/guide/Image' },
      ],
    },
    {
      text: 'Store',
      collapsible: true,
      items: [
        { text: 'Cookie操作', link: '/guide/Cookie' },
        { text: 'Storage操作', link: '/guide/Storage' },
      ],
    },
    {
      text: 'TypeCheck',
      collapsible: true,
      items: [
        { text: 'Regex校验', link: '/guide/Regex' },
        { text: 'JS类型检测', link: '/guide/Type' },
      ],
    },
    {
      text: 'Random',
      collapsible: true,
      items: [
        { text: '随机函数', link: '/guide/Random' },
      ],
    },
    {
      text: 'Date',
      collapsible: true,
      items: [
        { text: '日期', link: '/guide/Date' },
      ],
    },
    {
      text: 'Number',
      collapsible: true,
      items: [
        { text: '数字', link: '/guide/Number' },
      ],
    },
    {
      text: 'Canvas',
      collapsible: true,
      items: [
        { text: 'Canvas操作', link: '/guide/Canvas' },
      ],
    },
    {
      text: 'Event',
      collapsible: true,
      items: [
        { text: '事件', link: '/guide/Event' },
      ],
    },
    {
      text: 'Error',
      collapsible: true,
      items: [
        { text: '错误捕获', link: '/guide/Error' },
      ],
    },
    {
      text: 'Transform',
      collapsible: true,
      items: [
        { text: '数据转换', link: '/guide/Transform' },
      ],
    },
    {
      text: 'Request',
      collapsible: true,
      items: [
        { text: 'Fetch', link: '/guide/Request' },
      ],
    },
    {
      text: 'Common',
      collapsible: true,
      items: [
        { text: '性能优化', link: '/guide/Perf' },
        { text: '常用函数', link: '/guide/Common' },
      ],
    },
    {
      text: 'Regex校验',
      collapsible: true,
      items: [
        { text: 'Regex校验', link: '/guide/Regex' },
      ],
    },
    {
      text: 'Plugin',
      collapsible: true,
      items: [
        { text: 'Vite', link: '/guide/Plugin' },
      ],
    },
    {
      text: 'Javascript',
      collapsible: true,
      items: [
        { text: '常用', link: '/guide/Javascript' },
      ],
    },
    {
      text: 'String',
      collapsible: true,
      items: [
        { text: '字符串', link: '/guide/String' },
      ],
    },
  ]
}
