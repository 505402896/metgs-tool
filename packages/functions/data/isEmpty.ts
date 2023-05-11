/**
 * @description 判断对象是否为空
 * @param {Object} data 待转换数据
 * @returns {Boolean} 数据是否为空
 */
function objectIsEmpty(data: object): boolean {
  if (data === null) {
    return true
  } else if (Array.isArray(data)) {
    return data.length === 0
  } else if (data instanceof Map || data instanceof Set) {
    return data.size === 0
  } else {
    return Object.keys(data).length === 0
  }
}

/**
 * @description 判断数据是否为空
 * @param {*} data 待转换数据
 * @returns {Boolean} 数据是否为空
 */
export function isEmpty(data: any): boolean {
  let result = false

  const type = typeof data
  switch (type) {
    case 'undefined':
      result = true
      break
    case 'string':
      result = type.length === 0
      break
    case 'number':
      result = false
      break
    case 'object':
      result = objectIsEmpty(data)
      break
  }

  return result
}
