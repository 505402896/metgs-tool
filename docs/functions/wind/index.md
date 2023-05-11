# wind 风

## getWindDS
根据风速在水平、垂直方向上的分量计算风速和风向

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| u | 水平风速分量 | `number` | - | true |
| v | 垂直风速分量 | `number` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| result | 风速和风向的对象 | `object` |

result:
| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| ws | 风速 | `number` |
| wd | 风向 | `number` |

**Usage**
```ts
import { getWindDS } from 'metgs-tool'
getWindDS(-20, -3) // => { ws: 20.223748416156685, wd: 261.46923439005184 }
```

## getWindDirectionName
根据度数获取风向中文名

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| wd | 风向 | `number\|string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| wdCn | 风向中文名 | `string` |

**Usage**
```ts
import { getWindDirectionName } from 'metgs-tool'
getWindDirectionName(30) // => 东北风
getWindDirectionName('30') // => 东北风
```

## getWindLevel
根据风速返回对应的风级

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| ws | 风速 | `number\|string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| level | 风级 | `number` |

**Usage**
```ts
import { getWindLevel } from 'metgs-tool'
getWindLevel(25) // => 10
getWindLevel('25') // => 10
```