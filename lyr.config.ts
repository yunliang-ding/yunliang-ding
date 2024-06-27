import { defineConfig } from 'lyr';

export default defineConfig({
  title: '我的主页',
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-component.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/highlight.atom-one-light.min.css",
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
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-code-editor.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/highlight.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/highlight.javascript.min.js",
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
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-code-editor.min.js',
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/highlight.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/highlight.javascript.min.js",
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-extra.min.js',
  ],
  docsRequire: {
    axios: "axios",
    ArcoDesign: '@arco-design/web-react',
    ArcoIcon: '@arco-design/web-react/icon',
    LyrCodeEditor: "lyr-code-editor",
  },
  webpackConfig(){
    return {
      externals: {
        'lyr-code-editor': "lyrCodeEditor"
      }
    }
  },
  serverPath: '/apis',
  menus: [
    {
      label: '介绍',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
      children: [
        {
          label: 'Drawer 扩展',
          path: '/blog/drawer',
        },
        {
          label: 'Form 扩展',
          path: '/blog/form',
        },
        {
          label: 'Button 扩展',
          path: '/blog/button',
        },
        {
          label: 'React 状态管理',
          path: '/blog/state',
        },
        {
          label: 'Vscode 代码片段',
          path: '/blog/snippets',
        },
        {
          label: 'Monaco 使用 dark+ 主题',
          path: '/blog/monaco-theme',
        },
        {
          label: '使用 fetch 分块读取内容',
          path: '/blog/fetch',
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
          path: '/interview/download',
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
      label: '开发日志',
      path: '/log',
    },
  ],
});
