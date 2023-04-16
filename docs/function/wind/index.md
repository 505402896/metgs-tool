# 风

## getWindDS
根据风速在水平、垂直方向上的分量计算风速和风向

**参数**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| u | 水平风速分量 | `number` | - | true |
| v | 垂直风速分量 | `number` | - | true |

**返回**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| result | 风速和风向的对象 | `object` |

result:
| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| ws | 风速 | `number` |
| wd | 风向 | `number` |

**例子**
```ts
import { getWindDS } from 'metgs-tool'
getWindDS(-20, -3) // => { ws: 20.223748416156685, wd: 261.46923439005184 }
```

## getWindDirectionCn
根据度数获取风向中文名

**参数**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| wd | 风向 | `number` | - | true |

**返回**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| wdCn | 风向中文名 | `string` |

**例子**
```ts
import { getWindDirectionCn } from 'metgs-tool'
getWindDirectionCn(30) // => 东北风
```