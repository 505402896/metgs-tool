/**
 * @description 数字转换，小数位四舍五入
 * @param {String|Number} target 待转换数据
 * @param {Number} decimal 需要精确到小数位位数，默认为0
 * @returns {Number}
 */
export function parseNumber(target: string | number, decimal = 0): number {
  if (typeof target !== 'number' && typeof target !== 'string') {
    return target
  }

  if (typeof target === 'string') {
    target = Number(target)
  }

  if (decimal === 0) {
    target = Math.round(target)
  } else {
    const int = Math.trunc(target)
    // 小数部分 扩大对应倍数 避免出现精度丢失，如：0.1 + 0.2 != 0.3
    const zoomRatio = Math.pow(10, decimal)
    const small = Math.round((target - int) * zoomRatio)
    target = (int * zoomRatio + small) / zoomRatio
  }

  return target
}
