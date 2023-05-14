# Data
## isEmpty
**Description**

判断数据是否为空

**Params**
| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| data | 数据源 | `any` | - | true |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| isEmpty | 是否为空 | `boolean` |

**Usage**
```ts
import { isEmpty } from 'metgs-tool'
isEmpty('13213') // => false

isEmpty({ a: 3 }) // => false

isEmpty([]) // => true
```

## deepClone
**Description**

深拷贝数据

**Params**
| 属性名 | 说明 | 类型 | 默认值 | 是否必传 |
| ----- | --- | --- | ------ | ------ |
| data | 数据源 | `CloneType` | - | true |
| cache | 缓存队列，避免循环引用 | WeakMap | weakMap | false |

**Returns**

| 属性名 | 说明 | 类型 |
| ----- | --- | --- |
| result | 克隆数据 | `CloneType` |

**Usage**
```ts
import { deepCopy } from 'metgs-tool'
deepCopy({ a: 3 }) // => { a: 3 }

deepCopy([1, 2, { c: 3 }]) // => [1, 2, { c: 3 }]
```

**Type Declarations**

```ts
export enum CloneType {
  Object = 'Object',
  Array = 'Array',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Set = 'Set',
  Map = 'Map',
}
```