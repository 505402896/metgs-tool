export enum CloneType {
  Object = 'Object',
  Array = 'Array',
  Date = 'Date',
  RegExp = 'RegExp',
  Function = 'Function',
  String = 'String',
  Number = 'Number',
  Boolean = 'Boolean',
  Undefined = 'Undefined',
  Null = 'Null',
  Symbol = 'Symbol',
  Set = 'Set',
  Map = 'Map',
}

export type _CloneType = keyof typeof CloneType

/**
 * 检测数据类型
 * @param type cloneType
 * @param obj 检测的数据源
 * @returns Boolean
 */
function isType<T>(type: _CloneType, obj: T) {
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

/**
 * 深拷贝
 * @param {*} obj 要克隆的对象
 * @param {WeakMap} cache 缓存对象，用于解决循环引用的问题
 *  */
export function deepClone<T>(obj: T, cache = new WeakMap()): T {
  // handle data which is not object or equal null
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // handle Symbol
  if (isType(CloneType.Symbol, obj)) {
    return obj.constructor((obj as unknown as Symbol).description)
  }

  // if exist in cache, return from cache
  if (cache.has(obj)) {
    return cache.get(obj)
  }

  // init result
  let temp: T, param: T
  // handle Date or RegExp
  if (isType(CloneType.Date, obj) || isType(CloneType.RegExp, obj)) {
    param = obj
  }
  // @ts-ignore
  temp = new obj!.constructor(param)
  // handle Array or Object
  if (isType(CloneType.Array, obj) || isType(CloneType.Object, obj)) {
    Object.keys(obj).forEach((key) => {
      if (obj.hasOwnProperty(key)) {
        // @ts-ignore
        temp[key] = deepClone(obj[key], cache)
      }
    })
  }

  // handle Set
  if (isType(CloneType.Set, obj)) {
    for (let value of obj as unknown as Set<T>) {
      ;(temp as Set<T>).add(deepClone(value, cache))
    }
  }

  // handle Map
  if (isType(CloneType.Map, obj)) {
    for (let [key, value] of obj as unknown as Map<T, T>) {
      ;(temp as Map<T, T>).set(deepClone(key, cache), deepClone(value, cache))
    }
  }
  // cache value
  cache.set(obj, temp)
  return temp
}
