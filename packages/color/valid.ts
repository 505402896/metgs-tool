import { removeSpace } from '@packages/string'

/**
 * @description 验证是否为16进制颜色
 * @param {String} color 颜色
 * @returns {Boolean} 验证是否成功
 */
export function isHexColor(color: string): boolean {
  const isHexReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  return isHexReg.test(color)
}

/**
 * @description 验证是否为rgb格式颜色
 * @param {String} color 颜色
 * @returns {Boolean} 验证是否成功
 */
export function isRgbColor(color: string): boolean {
  color = removeSpace(color)
  const isRgbReg =
    /^[rR][gG][Bb][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4]\d|25[0-5]|[01]?\d\d?)[\)]{1}$/
  return isRgbReg.test(color)
}
