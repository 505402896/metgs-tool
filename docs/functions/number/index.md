# number 数字

## parseNumber
数字转换，小数位四舍五入

**参数**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| target | 待转换数据 | `string\|number` | - | true |
| decimal | 需要精确到小数位位数，默认为0 | `number` | 0 | false |

**返回**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| num | 转换后的数字 | `number` |

**例子**
```ts
import { parseNumber } from 'metgs-tool'
parseNumber('32.34') // => 32
parseNumber(32.345, 2) // => 32.35
```