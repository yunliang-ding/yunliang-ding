import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'Yunliang Ding',
  outputPath: 'docs-dist',
  locales: [['zh-CN', '中文']],
  favicon:
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  logo: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/user-logo.png',
  metas: [
    {
      name: 'yunliang-ding',
      content: 'yunliang-ding',
    },
  ],
  theme: {
    '@c-primary': '#165dff',
  },
  styles: [
    `
    div,
    span,
    td,
    th,
    a,
    button,
    p,
    label {
      font-size: 12px;
      font-weight: 500 !important;
    }
    h2{
      font-size: 18px !important;
    }
    li, input, label{
      font-weight: 500 !important;
      font-size: 12px !important;
    }
    .__dumi-default-layout-hero{
      display: none;
    }
    .__dumi-default-layout-hero + .__dumi-default-layout-content{
      margin-top: 0 !important;
    }
    .__dumi-default-menu-list
      > li
      > a {
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .__dumi-default-menu-list
      > a
      > span {
        font-size: 12px;
      }
  `,
  ],
  history: { type: 'hash' },
  hash: false,
  links: [],
  scripts: [
    `window.__trackid__="我的主页"`,
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/spider.web.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js"',
  ],
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/yunliang-ding',
    },
  ],
});
