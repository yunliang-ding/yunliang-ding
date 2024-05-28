import { defineConfig } from 'lyr';

export default defineConfig({
  title: '我的主页',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-component.min.css',
  ],
  devScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-component.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/spider.web.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-extra.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-component.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/prettier-parser-typescript.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/spider.web.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-extra.min.js',
  ],
  docsRequire: {
    ArcoDesign: '@arco-design/web-react',
    ArcoIcon: '@arco-design/web-react/icon',
    axios: "axios",
  },
  serverPath: '/apis',
  menus: [
    {
      label: '介绍',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/components',
      children: [
        {
          label: 'Drawer 扩展',
          path: '/components/drawer',
        },
        {
          label: 'Form 扩展',
          path: '/components/form',
        },
        {
          label: 'Button 扩展',
          path: '/components/button',
        },
        {
          label: 'React 状态管理',
          path: '/components/state',
        },
        {
          label: 'Vscode 代码片段',
          path: '/components/snippets',
        },
      ],
    },
    {
      label: '面试相关',
      path: '/interview',
      children: [
        {
          label: '大文件上传',
          path: '/interview/upload',
        },
        {
          label: '下载文件',
          path: '/interview/fetch',
        },
      ],
    },
    {
      label: '基础算法题',
      path: '/algorithm',
      children: [
        {
          label: '二分查找',
          path: '/algorithm/binary-search',
        },
      ],
    },
    {
      label: '更新日志',
      path: '/log',
    },
  ],
});
