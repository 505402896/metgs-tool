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
export function getWindDirectionName(wd: number): string {
  wd = wd % 360

  const windDirectDict = [
    { wdMin: 0, wdMax: 22.5, name: '北风' },
    { wdMin: 22.5, wdMax: 67.5, name: '东北风' },
    { wdMin: 67.5, wdMax: 112.5, name: '东风' },
    { wdMin: 112.5, wdMax: 157.5, name: '东南风' },
    { wdMin: 157.5, wdMax: 202.5, name: '南风' },
    { wdMin: 202.5, wdMax: 247.5, name: '西南风' },
    { wdMin: 247.5, wdMax: 292.5, name: '西风' },
    { wdMin: 292.5, wdMax: 337.5, name: '西北风' },
    { wdMin: 337.5, wdMax: 360, name: '北风' },
  ]

  const target = windDirectDict.find((v) => wd >= v.wdMin && wd < v.wdMax)
  return target?.name || ''
}

/**
 * @description 根据风速返回对应的风级
 * @param {Number} ws 风速
 * @returns {Number} 风级
 */
export function getWindLevel(ws: number): number {
  const levelDict = [
    { wsMin: 0, wsMax: 0.2, level: 0 },
    { wsMin: 0.2, wsMax: 1.5, level: 1 },
    { wsMin: 1.5, wsMax: 3.3, level: 2 },
    { wsMin: 3.3, wsMax: 5.4, level: 3 },
    { wsMin: 5.4, wsMax: 7.9, level: 4 },
    { wsMin: 7.9, wsMax: 10.7, level: 5 },
    { wsMin: 10.7, wsMax: 13.8, level: 6 },
    { wsMin: 13.8, wsMax: 17.1, level: 7 },
    { wsMin: 17.1, wsMax: 20.7, level: 8 },
    { wsMin: 20.7, wsMax: 24.4, level: 9 },
    { wsMin: 24.4, wsMax: 28.4, level: 10 },
    { wsMin: 28.4, wsMax: 32.6, level: 11 },
    { wsMin: 32.6, wsMax: 36.9, level: 12 },
    { wsMin: 36.9, wsMax: 41.4, level: 13 },
    { wsMin: 41.4, wsMax: 46.1, level: 14 },
    { wsMin: 46.1, wsMax: 50.9, level: 15 },
    { wsMin: 50.9, wsMax: 56.0, level: 16 },
    { wsMin: 56.0, wsMax: 61.2, level: 17 },
  ]

  const first = levelDict[0]
  const last = levelDict[levelDict.length - 1]
  if (ws === first.wsMin) return first.level
  if (ws >= last.wsMax) return last.level

  const target = levelDict.find((v) => ws > v.wsMin && ws <= v.wsMax)
  return target?.level || 0
}
