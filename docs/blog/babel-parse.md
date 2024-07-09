## 支持方案

- `eval` 同步解析字符串代码，当前执行作用域

- `new Function` 同步解析字符串代码，全局作用域

- `动态script标签` 同步解析字符串代码，全局作用域

- `setTimeout` 异步解析字符串代码，全局作用域

- [eval5](https://www.npmjs.com/package/eval5) 第三方库

## babelParse

> 使用 new Function + babel 解析 es6 代码

1. 先解析代码段，使用 cdn https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js

```tsx
const { transform } = window.Babel;

const parseCode = (codeStr: string) => {
  try {
    const { code } = transform(codeStr, {
      presets: ['env', 'react', 'typescript'],
    });
    // 这里需要将代码包一下作为iife，并且传入相关参数
    return `((require, exports) => {${code};})(require, exports)`;
  } catch (error) {
    console.log('catch transform es5 error:', error);
    throw error;
  }
};
```

2. 执行代码

```tsx
// 模拟下依赖函数require
const myRequire = (key: string) => {
  if (key === 'react') {
    return window.React;
  }
};
const myExports = {};

const runCode = () => {
  try {
    // 使用额外的参数
    new Function('require', 'exports', parseCode(code))(myRequire, myExports);
    return myExports?.default ? myExports?.default : myExports;
  } catch (error) {
    console.log('catch run es5 code error:', error);
    throw error;
  }
};
```

3. 获取结果

> 运行 runCode，拿到结果即可
