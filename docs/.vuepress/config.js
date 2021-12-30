module.exports = {
  theme: '@vuepress-dumi/dumi',
  title: '组件库',
  description: '组件库',
  themeConfig: {
    nav: [{ text: 'demo', link: '/demo/' }],
    sidebar: {
      '/demo': [
        {
          title: '开始使用',
          collapsable: false,
          children: [['/demo/', '安装']],
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            ['/demo/demo', 'Demo'],
          ],
        },
      ],
    },
  },
  plugins: [
    [
      'demo-code',
      {
        showText: '展开',
        hideText: '隐藏',
        minHeight: 100,
        onlineBtns: {
          codepen: false,
          jsfiddle: false,
          codesandbox: false,
        },
      },
    ],
  ],
};
