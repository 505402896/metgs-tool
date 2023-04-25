import { hexToRgb, isHexColor, isRgbColor } from '@packages/functions/color'

export interface fontColorAdaptOptions {
  /**
   * @description 浅色字体颜色
   *
   * @default '#fff'
   */
  tintFont?: string

  /**
   * @description 深色字体颜色
   *
   * @default '#000'
   */
  deepFont?: string

  /**
   * @description 灰度阈值，范围为0-255
   *
   * @default 190
   */
  threshold?: number
}

/**
 * @description 根据字体所在背景的冷暖，返回字体颜色
 * @param {String} bgColor 字体所在背景颜色，格式为hex或rgb
 * @param {Object} options 可配置选项
 * @returns {String} color
 */
export function fontColorAdapt(
  bgColor: string,
  options: fontColorAdaptOptions = {}
): string | undefined {
  const { tintFont = '#fff', deepFont = '#000', threshold = 190 } = options

  if (isRgbColor(bgColor) || isHexColor(bgColor)) {
    if (isHexColor(bgColor)) {
      bgColor = hexToRgb(bgColor)
    }

    const result = bgColor.match(
      /\((?<r>\d{1,3}),(?<g>\d{1,3}),(?<b>\d{1,3})\)/
    )?.groups
    if (result) {
      const { r, g, b } = result
      // 计算颜色灰度值
      const grayScale =
        Number(r) * 0.299 + Number(g) * 0.587 + Number(b) * 0.114
      if (grayScale >= threshold) {
        return deepFont
      } else {
        return tintFont
      }
    }
  } else {
    throw new TypeError('传入颜色格式不正确, 请传入rgb或者hex格式的颜色')
  }
}
