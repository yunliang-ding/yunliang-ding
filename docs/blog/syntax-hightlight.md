## 基本配置

```ts
export default {
  height: value.split('\n').length * 21, // 计算高度 21px 是 默认的 row height
  minimap: {
    enabled: false, // 不展示小地图
  },
  scrollBeyondLastLine: false, // 高度撑满
  contextmenu: false, // 不展示右键菜单
  folding: false, // 不提供代码折叠
  lineNumbers: 'off', // 不设置行号
  hover: {
    enabled: false, // 移除hover提示
  },
  scrollbar: {
    handleMouseWheel: false, // 不添加 wheel事件，否则会导致不会随着鼠标滑动无效
  },
  readOnly: true, // 只读模式
};
```

## 修改部分样式

> 不展示链接线，选中行样式，以及光标样式

```less
.monaco-editor {
  .decorationsOverviewRuler,
  .current-line,
  .core-guide,
  .monaco-editor-overlaymessage,
  .cursor.monaco-mouse-cursor-text {
    display: none !important;
  }
}
```

## demo 查看

- 参看 [@yl-d/code-editor](https://dev-ops.yunliang.cloud/website/lyr-code-editor)
