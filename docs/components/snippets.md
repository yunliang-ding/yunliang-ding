> 自定义 snippets

### 创建 .vscode/yunliang.code-snippet，内容如下即可

```js
{
  "create": {
    "key": "create",
    "prefix": "create",
    "description": "create store",
    "body": [
      "/* eslint-disable indent */"
      "import { create } from \"lyr-hooks\";",
      "import { FormInstance } from \"antd\";",
      "",
      "export default create<{",
      "  formInstance?: FormInstance;",
      "  dataSource: any;",
      "  submit(): void;",
      "}>({",
      "  dataSource: [],",
      "  async submit() {"
      "    const data = await this.formInstance?.validateFields();"
      "    console.log(data);"
      "  }",
      "});",
      ""
    ],
    "scope": "typescript,typescriptreact,javascript,javascriptreact"
  },
```
