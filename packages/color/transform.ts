import { isHexColor, isRgbColor } from '@packages/color'

/**
 * @description 16进制颜色转rgb
 * @param color 16进制颜色
 * @returns {String} rgb color
 */
export function hexToRgb(color: string): string {
  if (isHexColor(color)) {
    color = color.toLowerCase()
    if (color.length === 4) {
      // 将#fff等变为#ffffff
      let newColor = '#'
      for (let i = 1; i < 4; i++) {
        newColor += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = newColor
    }

    const arr = []
    for (let i = 1; i < 7; i += 2) {
      arr.push(parseInt('0x' + color.slice(i, i + 2)))
    }

    return `rgb(${arr.join(',')})`
  } else {
    throw new TypeError('传入颜色格式不正确')
  }
}

/**
 * @description rgb颜色转16进制
 * @param color rgb颜色
 * @returns {String} hex color
 */
export function rgbToHex(color: string): string {
  if (isRgbColor(color)) {
    const result = color.match(
      /\((?<r>\d{1,3}),(?<g>\d{1,3}),(?<b>\d{1,3})\)/
    )!.groups
    let hexColor = '#'
    for (const key in result) {
      const colorValue = result[key]
      let hex = Number(colorValue).toString(16)
      if (hex === '0') {
        hex += hex
      }
      hexColor += hex
    }

    return hexColor
  } else {
    throw new TypeError('传入颜色格式不正确')
  }
}
