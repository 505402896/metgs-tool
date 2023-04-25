/**
 * @description 去除字符串中所有空格
 * @param str 参照字符串
 * @returns {String} 去除空格后的字符串
 */
export function removeSpace(str: string): string {
  return str.replaceAll(/\s+/g, '')
}
