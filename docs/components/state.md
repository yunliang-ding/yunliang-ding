---
order: 2
title: React 状态管理
toc: menu
---

<Alert>
  打造 React 全新状态管理库
</Alert>

### 单一组件使用

```jsx | pure
import React from 'react';
import { useReactive } from 'lyr-hooks';

export default () => {
  const state = useReactive({
    count: 0,
    age: 0,
    user: {
      baseInfo: {
        age: 0,
      },
    },
  });
  console.log('render', state);
  return (
    <>
      <div>
        count: {state.count}
        <button
          onClick={() => {
            state.count++;
          }}
        >
          +1
        </button>
      </div>
      <div>
        age: {state.user.baseInfo.age}
        <button
          onClick={() => {
            state.user.baseInfo.age++;
          }}
        >
          +1
        </button>
      </div>
    </>
  );
};
```

### 全局状态管理

```jsx | pure
import React from 'react';
import { create } from 'lyr-hooks';

export const store = create({
  count: 1,
  age: 1,
  addCount() {
    this.count++;
  },
});

export default () => {
  const { age } = store.use();
  console.log('demo1 render...');
  return (
    <div>
      {age}
      <button
        onClick={async () => {
          store.age += 1;
        }}
      >
        添加age
      </button>
    </div>
  );
};
```

### 实现原理

- 具体源码和 Demo 参看 [lyr-hooks](https://dev-ops.yunliang.cloud/website/lyr-hooks)
