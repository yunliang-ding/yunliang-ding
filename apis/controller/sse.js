module.exports = class extends think.Controller {
  indexActio() {
    const { PassThrough } = require('stream');
    const stream = new PassThrough();
    const strArr =
      `React 是一个用于构建用户界面的 JavaScript 库，由 Facebook 开发并开源。它专注于构建高效、快速且易于维护的 Web 应用程序。
    
React 的主要特点：
    
    声明式编程: React 使用声明式编程范式，开发者只需描述 UI 的外观，而不用关心具体的 DOM 操作细节，这使得代码更易于理解和维护。
    组件化: React 应用程序由多个独立、可复用的组件组成，每个组件负责渲染 UI 的一部分，这种模块化的结构使得代码更易于组织和扩展。
    虚拟 DOM: React 使用虚拟 DOM 来提高性能。虚拟 DOM 是一个轻量级的 JavaScript 对象，它代表了实际 DOM 的结构。
    当 UI 发生变化时，React 会先更新虚拟 DOM，然后将虚拟 DOM 与实际 DOM 进行比较，只更新需要更改的部分，从而减少了 DOM 操作带来的性能损耗。
    JSX: React 使用 JSX 语法来描述 UI，JSX 是一种 JavaScript 语法扩展，它允许开发者在 JavaScript 代码中直接编写类似 HTML 的结构，使得代码更易于阅读和编写。
    单向数据流: React 使用单向数据流来管理应用程序的状态。数据从父组件传递到子组件，子组件不能直接修改父组件传递的数据，只能通过回调函数通知父组件进行修改，这使得数据流更加清晰易懂。

React 的优点:
    
    提高开发效率: 组件化、声明式编程和 JSX 语法使得 React 代码更易于编写、理解和维护，从而提高了开发效率。
    提升应用性能: 虚拟 DOM 技术能够有效减少 DOM 操作，从而提升应用程序的性能。
    强大的社区支持: React 拥有庞大的社区，开发者可以轻松找到各种学习资源、开源组件和技术支持。
    跨平台开发: React 可以与 React Native 配合使用，用于开发原生移动应用，实现跨平台开发。
    React 的应用场景:
    
    单页面应用 (SPA)
    复杂的前端交互
    数据可视化
    移动应用开发 (React Native)
    学习 React 的资源:
    
    React 官方网站: https://react.dev/
    React 中文文档: https://zh-hans.reactjs.org/
    希望以上介绍能够帮助你了解 React! `.split('');
    this.ctx.type = 'text/event-stream';
    let index = 0;
    this.body = stream;
    const timer = setInterval(() => {
      const str = strArr[index++];
      stream.write(str);
      if (index === strArr.length) {
        clearInterval(timer);
        stream.end();
      }
    }, 30);
    // 监听取消请求
    this.ctx.req.on('close', () => {
      clearInterval(timer);
      stream.end();
    });
  }
};
