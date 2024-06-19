## 找到 vscode 主题文件

- 在 vscode 运行 命令 Generate Color Theme From Current Settings
- 复制一下 主题 json，拷贝工程 theme 文件夹下

## 按照如下操作转换下

### package.json

```json
{
  "dependencies": {
    "vscode-theme-to-monaco-theme-node": "1.0.0",
    "fs-extra": "11.2.0"
  }
}
```

### index.js

```js
const path = require('path');
const converter = require('vscode-theme-to-monaco-theme-node');
converter.convertThemeFromFilePath(
  path.resolve(__dirname, 'theme', 'dark-plus.jsonc'),
  path.resolve(__dirname, 'dist', 'dark-plus.json'),
);
```

### run

```shell
node index.js
```

- 得到 monaco 主题文件，在 dist 文件夹下


## 开始设置主题，参看代码

```tsx
import { wireTmGrammars } from 'monaco-editor-textmate';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import vsDarkPlus from './vs-dark-plus';
import vsLightPlus from './vs-light-plus';

const OssUrl = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/monaco';

let hasLoadOnigasm = false;

export const loadDarkPlusTheme = async (monaco, editor, language) => {
  // 加载onigasm的WebAssembly文件
  if (!hasLoadOnigasm) {
    hasLoadOnigasm = true;
    await loadWASM(`${OssUrl}/onigasm/onigasm.wasm`);
  }
  const grammars = new Map();
  grammars.set(
    language,
    {
      css: 'source.css',
      html: 'text.html.basic',
      less: 'source.css.less',
      typescript: 'source.ts',
      javascript: 'source.js',
      javascriptreact: 'source.js.jsx',
      json: 'source.json',
    }[language],
  );
  // 创建一个注册表，可以从作用域名称创建语法
  const registry = new Registry({
    getGrammarDefinition: async (scopeName: string) => {
      const path = {
        'text.html.basic': 'html.tmLanguage.json',
        'source.css': 'css.tmLanguage.json',
        'source.less': 'less.tmLanguage.json',
        'source.ts': 'TypeScript.tmLanguage.json',
        'source.js': 'JavaScript.tmLanguage.json',
        'source.js.jsx': 'JavaScriptReact.tmLanguage.json',
        'source.json': 'JSON.tmLanguage.json',
      }[scopeName];
      return path
        ? {
            format: 'json',
            content: await (await fetch(`${OssUrl}/grammars/${path}`)).text(),
          }
        : null;
    },
  } as any);
  // 注册
  monaco.languages.register({ id: language });
  // 重新覆盖主题
  monaco.editor.defineTheme('vs-dark', vsDarkPlus);
  monaco.editor.defineTheme('vs', vsLightPlus);
  setTimeout(() => {
    wireTmGrammars(monaco, registry, grammars, editor);
  });
};
```