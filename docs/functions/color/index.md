# color 颜色
## fontColorAdapt
根据背景颜色的冷暖，计算文本在不同背景下的颜色

**Params**
| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| bgColor | 背景颜色 | `string` | - | true |
| options | 可配置选项 | `object` | - | false |


options:
| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| tintFont | 浅色字体颜色 | `string` | #fff | false |
| deepFont | 深色字体颜色 | `string` | #000 | false |
| threshold | 灰度阈值，范围为0-255 | `number` | 190 | false |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| color | 对应背景下的文本颜色 | `string` |

**Usage**
```ts
import { fontColorAdapt } from 'metgs-tool'
fontColorAdapt('#999') // => #fff

fontColorAdapt('#999', { tintFont: '#333', deepFont: '#fff' }) // => #333

fontColorAdapt('#999', { threshold: 100 }) // => #fff
```

## hexToRgb
hex颜色转rgb

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| color | hex颜色值 | `string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| color | rgb颜色值 | `string` |

**Usage**
```ts
import { hexToRgb } from 'metgs-tool'
hexToRgb('#999') // => rgb(153,153,153)
```

## rgbToHex
rgb颜色转hex

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| color | rgb颜色值 | `string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| color | hex颜色值 | `string` |

**Usage**
```ts
import { rgbToHex } from 'metgs-tool'
hexToRgb('rgb(153,153,153)') // => #999999
```

## isHexColor
验证颜色格式是否为hex

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| color | 颜色值 | `string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| isValid | 是否为hex color | `boolean` |

**Usage**
```ts
import { isHexColor } from 'metgs-tool'
isHexColor('rgb(153,153,153)') // => false

isHexColor('#999') // => true
```

## isRgbColor
验证颜色格式是否为rgb

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| color | 颜色值 | `string` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| isValid | 是否为rgb color | `boolean` |

**Usage**
```ts
import { isRgbColor } from 'metgs-tool'
isRgbColor('rgb(153,153,153)') // => true

isRgbColor('#999') // => false
```