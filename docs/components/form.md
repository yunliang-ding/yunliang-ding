---
order: 2
title: Form 联动
toc: menu
---

<Alert>
  在 Form.Item 属性上扩展了 effect 属性，来决定该组件的副作用，在 Form 的 onChange 事件中来发布通知
</Alert>

### 示例

```jsx | pure
/**
 * 基本显示隐藏的联动
 **/
import { Form } from 'lyr-design';

export default () => {
  return (
    <Form
      schema={[
        {
          type: 'Select',
          label: '性别',
          name: 'sex',
          props: {
            options: [
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'InputNumber',
          label: '年龄',
          name: 'age',
          effect: ['sex'],
          visible: ({ sex }) => sex === 1,
        },
      ]}
    />
  );
};
```

```jsx | pure
/**
 * 基本的属性切换
 **/
import { Form } from 'lyr-design';

export default () => {
  return (
    <Form
      schema={[
        {
          type: 'Select',
          label: '类型',
          name: 'type',
          props: {
            options: [
              {
                label: '类型 A',
                value: 1,
              },
              {
                label: '类型 B',
                value: 2,
              },
            ],
          },
        },
        {
          type: 'Input',
          label: '年龄',
          name: 'desc',
          effect: ['type'],
          onEffect: (type, { setSchemaByName, getFieldsValue }) => {
            setSchemaByName(
              'desc',
              getFieldsValue().type === 1
                ? {
                    type: 'Input',
                    props: {
                      placeholder: '请输入',
                    },
                  }
                : {
                    type: 'Select',
                    props: {
                      placeholder: '请选择',
                      options: [
                        {
                          label: '选项 1',
                          value: 1,
                        },
                        {
                          label: '选项 2',
                          value: 2,
                        },
                      ],
                    },
                  },
            );
          },
        },
      ]}
    />
  );
};
```

### 实现原理

- 发布订阅模式
- 具体源码和 Demo 参看 [Form](https://dev-ops.yunliang.cloud/website/lyr-design#/components/form-advance)
