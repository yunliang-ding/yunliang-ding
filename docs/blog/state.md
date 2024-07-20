> 打造 React 全新状态管理库

## 单一组件使用

```jsx
import { useReactive } from '@yl-d/components';

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

## 全局状态管理

```jsx
import { createStore } from '@yl-d/components';

export const store = createStore({
  count: 1,
  age: 1,
  addCount() {
    this.count++;
  },
});

export default () => {
  const { age } = store.useSnapshot();
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

## 实现原理

- 参看 [@yl-d/components](https://dev-ops.yunliang.cloud/website/packages#/components/hooks/create)
