---
order: 1
title: Button 扩展
toc: menu
nav:
  title: 每日心得
  order: 1
---

<Alert>
  目前组件库都有针对Button组件的封装，但是仅基本的功能，针对部分场景仍需要额外的代码支持或者二次封装。
  这里包括但不限于二次确认，文案Tooltip，按钮Loading，权限控制等..
</Alert>

### 示例

```tsx | pure
/**
 * 配置 spin，开启自动 loading
 */
import { Button } from 'lyr-design';

const submit = () => new Promise((res) => setTimeout(res, 1000));

export default () => {
  return (
    <Button onClick={submit} spin>
      提交
    </Button>
  );
};
```

```tsx | pure
/**
 * 配置 comfirm 二次确认
 */
import { Button } from 'lyr-design';

export default () => {
  return (
    <Button
      confirm={{
        title: '提示',
        content: '是否确认提交?',
      }}
    >
      提交
    </Button>
  );
};
```

```tsx | pure
/**
 * 配置 tooltip
 */
import { Button } from 'lyr-design';

export default () => {
  return <Button tooltip="我是提示文案">提交</Button>;
};
```

```tsx | pure
/**
 * 配置权限
 */
import { Button } from 'lyr-design';

Button.setAuth({
  'user-create': '新增用户',
});

export default () => {
  return <Button type="primary" auth="user-create" />;
};
```

### 实现原理

- 具体源码和 Demo 参看 [Button](https://dev-ops.yunliang.cloud/website/lyr-design#/components/button)
