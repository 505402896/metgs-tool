# string 字符串

## removeSpace
**Description**

去除字符串内所有空格

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| str | 字符串 | `string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| string | 去除所有空格后的字符串 | `string` |

**Usage**
```ts
import { removeSpace } from 'metgs-tool'
removeSpace(' eq qeqwe qere   qewe') // => eqqeqweqereqewe
```