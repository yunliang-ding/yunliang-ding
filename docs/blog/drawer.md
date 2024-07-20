> 在日常开发中后台项目中，抽屉组件是必不可少的，往往我们是通过 visible 属性来控制打开或者关闭的，在项目中会多出一个状态管理来控制，如果有多个，避免维护成本有所增加，可采用如下的 api 设计来避免

## 示例

> 在合适的地方调用 userDrawer.open() 或 userDrawer.close();

```jsx
import { CreateDrawer } from '@yl-d/components';

const userDrawer = CreateDrawer({
  title: 'Demo',
  render() {
    return <div>先定义后打开</div>;
  },
});
```

## 实现原理

- 基于 ReactDOM.render 将 Drawer 组件内容 append 到指定的容器
- 具体源码和 Demo 参看 [CreateDrawer](https://dev-ops.yunliang.cloud/website/packages#/components/form/create-drawer)
