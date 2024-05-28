> 开发日志

```tsx | pureReact
import { Space, Timeline, Spin } from '@arco-design/web-react';
import { IconClockCircle, IconCheck } from '@arco-design/web-react/icon';
import axios from 'axios';

export default () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .post('https://api-online.yunliang.cloud/task/list', {
        userId: 2,
        pageSize: 100,
      })
      .then((res) => {
        setData(res.data.data.data);
      });
  }, []);
  return data.length === 0 ? (
    <Spin />
  ) : (
    <Timeline>
      {data.map((item) => {
        return (
          <Timeline.Item
            key={item.id}
            dot={
              item.status === 3 ? (
                <IconCheck
                  style={{
                    fontSize: 12,
                    padding: 2,
                    boxSizing: 'border-box',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-light-1)',
                  }}
                />
              ) : (
                <IconClockCircle
                  style={{
                    fontSize: 12,
                    padding: 2,
                    boxSizing: 'border-box',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary-light-1)',
                  }}
                />
              )
            }
            label={item.endDate.substring(0, 10)}
          >
            {item.content}
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
```
