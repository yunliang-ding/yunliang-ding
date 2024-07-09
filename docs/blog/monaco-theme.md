## 第一步 找到 vscode 主题文件

- 部分内容参考 [手把手教你实现在 Monaco Editor 中使用 VSCode 主题](https://juejin.cn/post/7012514944579502116)
- 在 vscode 运行 命令 Generate Color Theme From Current Settings
- 复制一下 主题 json

## 第二步 转换函数 covertTheme

```ts
export default (theme, addDefaultToken = true, defaultColor = '#ffffff') => {
  if (typeof theme === 'string') {
    theme = JSON.parse(
      theme.replace(/(\/\/").+?[\n\r\t]/g, '').replace(/,[\n\r\t]*\}/, '}'),
    );
  }
  const monacoThemeRule = [];
  const returnTheme = {
    inherit: false,
    base: theme.type === 'light' ? 'vs' : 'vs-dark',
    colors: theme.colors,
    rules: monacoThemeRule,
    encodedTokensColors: [],
  };
  theme.tokenColors.map((color) => {
    function evalAsArray() {
      if (color.scope) {
        color.scope.map((scope) => {
          monacoThemeRule.push(
            Object.assign({}, color.settings, {
              token: scope,
            }),
          );
        });
      }
    }
    if (typeof color.scope == 'string') {
      const split = color.scope.split(',');
      if (split.length > 1) {
        color.scope = split;
        evalAsArray();
        return;
      }
      monacoThemeRule.push(
        Object.assign({}, color.settings, {
          token: color.scope,
        }),
      );
      return;
    }
    evalAsArray();
  });
  if (addDefaultToken) {
    monacoThemeRule.push({
      token: '',
      foreground: theme.colors['editor.foreground'] || defaultColor,
    });
  }
  return returnTheme;
};
```

## 第三步 设置主题

```tsx
import { wireTmGrammars } from 'monaco-editor-textmate';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import covertTheme from './convert-theme';
import oneDarkPro from './one-dark-pro.json'; // 这个 json 就是第一步拷贝的 vscode 主题

const OssUrl = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/monaco';

let hasLoadOnigasm = false;

export const loadVscodeTheme = async (monaco, editor, language) => {
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
      json: 'source.json',
    }[language],
  );
  // 创建一个注册表，可以从作用域名称创建语法
  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      const path = {
        'text.html.basic': 'html.tmLanguage.json',
        'source.css': 'css.tmLanguage.json',
        'source.css.less': 'less.tmLanguage.json',
        'source.ts': 'TypeScript.tmLanguage.json',
        'source.js': 'JavaScript.tmLanguage.json',
        'source.json': 'JSON.tmLanguage.json',
      }[scopeName];
      return path
        ? {
            format: 'json',
            content: await (await fetch(`${OssUrl}/grammars/${path}`)).text(),
          }
        : null;
    },
  });
  // 注册
  monaco.languages.register({ id: language });
  // 重新覆盖主题
  monaco.editor.defineTheme('vs-dark', covertTheme(oneDarkPro));
  setTimeout(() => {
    wireTmGrammars(monaco, registry, grammars, editor);
  }, 100);
};
```

## 预览效果

```jsx | pureReact
import { CodeEditor } from '@yl-d/code-editor';

export default () => {
  return (
    <CodeEditor
      value={`import { wireTmGrammars } from 'monaco-editor-textmate';
import { loadWASM } from 'onigasm';
import { Registry } from 'monaco-textmate';
import covertTheme from './convert-theme';
import oneDarkPro from './one-dark-pro.json'; // 这个 json 就是第一步拷贝的 vscode 主题

const OssUrl = 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/monaco';

let hasLoadOnigasm = false;

export const loadVscodeTheme = async (monaco, editor, language) => {
  // 加载onigasm的WebAssembly文件
  if (!hasLoadOnigasm) {
    hasLoadOnigasm = true;
    await loadWASM(\`\${OssUrl}/onigasm/onigasm.wasm\`\);
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
      json: 'source.json',
    }[language],
  );
  // 创建一个注册表，可以从作用域名称创建语法
  const registry = new Registry({
    getGrammarDefinition: async (scopeName) => {
      const path = {
        'text.html.basic': 'html.tmLanguage.json',
        'source.css': 'css.tmLanguage.json',
        'source.css.less': 'less.tmLanguage.json',
        'source.ts': 'TypeScript.tmLanguage.json',
        'source.js': 'JavaScript.tmLanguage.json',
        'source.json': 'JSON.tmLanguage.json',
      }[scopeName];
      return path
        ? {
            format: 'json',
            content: await (await fetch(OssUrl + "/grammars/" + path)).text(),
          }
        : null;
    },
  });
  // 注册
  monaco.languages.register({ id: language });
  // 重新覆盖主题
  monaco.editor.defineTheme('vs-dark', covertTheme(oneDarkPro));
  setTimeout(() => {
    wireTmGrammars(monaco, registry, grammars, editor);
  }, 100);
};`}
      lanaguage="javascript"
      style={{ width: '100%', height: 500 }}
    />
  );
};
```

## 使用 @shikijs/monaco

[参看](https://shiki.tmrs.site/packages/monaco)