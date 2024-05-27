## 下载文件

> 适合后端接口直接返回文件流，且定义好文件名的场景

```js
fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    token: 'some',
    responseType: 'arraybuffer',
  },
  method: 'POST',
  body: JSON.stringify({ name: 12 }),
})
  .then((res) => {
    // 获取文件名
    const contentDisposition = res.headers.get('content-disposition');
    const filename = decodeURIComponent(
      contentDisposition?.split('=')?.[1] || '',
    );
    return {
      bolb: res.blob(),
      filename,
    };
  })
  .then(({ blob, filename }: any) => {
    const url = URL.createObjectURL(
      new Blob([blob], { type: 'application/vnd.ms-excel' }),
    );
    const a = document.createElement('a');
    a.download = filename;
    a.target = '_blank';
    a.href = url;
    document.body.appendChild(a);
    a.click();
  });
```
