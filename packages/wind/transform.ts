interface windObj {
  /**
   * @description 风速
   */
  ws: number
  /**
   * @description 风向 0-360
   */
  wd: number
}

/**
 * @description 根据风速在水平、垂直方向上的分量计算风速和风向
 * @param {Number} u 水平风速分量
 * @param {Number} v 垂直风速分量
 * @returns {Object} 风速和风向
 */
export function getWindDS(u: number, v: number): windObj {
  const PI = Math.PI
  u = -u
  v = -v
  const ws = Math.sqrt(u * u + v * v)
  let wd = 0
  if (Math.abs(ws) < 1e-10) {
    wd = 0
  }
  if (v >= 0) {
    if (u >= 0) {
      wd = 180 + (Math.asin(u / ws) / PI) * 180
    } else {
      wd = 180 - (Math.asin(Math.abs(u) / ws) / PI) * 180
    }
  } else {
    if (u >= 0) {
      wd = 360 - (Math.asin(u / ws) / PI) * 180
    } else {
      wd = (Math.asin(Math.abs(u) / ws) / PI) * 180
    }
  }
  return { ws, wd }
}

/**
 * @description 根据度数获取风向中文名
 * @param {Number} wd 风向
 * @returns {String} 风向中文名
 */
export function getWindDirectionCn(wd: number): string {
  wd = wd % 360
  if (wd >= -22.5 && wd < 22.5) {
    return '北风'
  } else if (wd >= 22.5 && wd < 67.5) {
    return '东北风'
  } else if (wd >= 67.5 && wd < 112.5) {
    return '东风'
  } else if (wd >= 112.5 && wd < 157.5) {
    return '东南风'
  } else if (wd >= 157.5 && wd < 202.5) {
    return '南风'
  } else if (wd >= 202.5 && wd < 247.5) {
    return '西南风'
  } else if (wd >= 247.5 && wd < 292.5) {
    return '西风'
  } else if (wd >= 292.5 && wd < 337.5) {
    return '西北风'
  } else if (wd >= 337.5 && wd < 360) {
    return '北风'
  } else {
    return ''
  }
}
