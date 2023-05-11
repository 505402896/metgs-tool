# time 时间

## timeRangeCompress
将给定的时间区间压缩重复部分

**Params**

| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| startTime | 开始时间 | `string \| Dayjs \| Date` | - | true |
| endTime | 结束时间 | `string \| Dayjs \| Date` | - | true |
| format | 输出日期格式，参考dayjs | `string` | YYYY年MM月DD日 | false |
| symbol | 时间区间分隔符 | `string` | '-' | false |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| timeRangeStr | 压缩后的时间段字符串 | `string` |

**Usage**
```ts
import { timeRangeCompress } from 'metgs-tool'
timeRangeCompress('2023-01-03', '2023-01-05') // => 2023年01月03日-05日

timeRangeCompress(
  '2023-01-03',
  '2023-01-05',
  'YYYY年MM月DD日',
  '至'
) // => 2023年01月03日至05日

timeRangeCompress(
  '2023-01-03 09:20',
  '2023-01-03 20:00',
  'YYYY年MM月DD日 HH时'
) // => 2023年01月03日 09时-20时

```