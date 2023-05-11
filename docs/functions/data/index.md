# Data
## isEmpty
判断数据是否为空

**参数**
| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| data | 数据源 | `any` | - | true |

**返回**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| isEmpty | 是否为空 | `boolean` |

**例子**
```ts
import { isEmpty } from 'metgs-tool'
isEmpty('13213') // => false

isEmpty({ a: 3 }) // => false

isEmpty([]) // => true
```