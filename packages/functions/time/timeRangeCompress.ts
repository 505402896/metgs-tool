import dayjs, { Dayjs } from 'dayjs'

/**
 * @description 将时间字符串按照对应格式分割成数组形式
 * @param {String} timeStr 被分割的时间字符串
 * @param {String} format 分割的格式
 * @returns {Array<string>} 时间分割数组
 */
function timeSplit(
  timeStr: string | Dayjs | Date,
  format: string
): Array<string> {
  timeStr = dayjs(timeStr).format(format)

  const arr = []
  let startIndex = 0
  let endIndex = startIndex
  for (let i = 0; i < format.length; i++) {
    const nextIndex = i + 1
    const nextItem = format[nextIndex]
    const startItem = format[startIndex]
    if (startItem === nextItem) {
      endIndex = nextIndex
    } else {
      endIndex = i
      arr.push(timeStr.substring(startIndex, endIndex + 1))

      // reset start index and end index
      startIndex = nextIndex
      endIndex = nextIndex
    }
  }
  return arr
}

/**
 * @description 根据时间段对重复时间进行缩减
 * @param {String|Dayjs|Date} startTime 开始时间
 * @param {String|Dayjs|Date} endTime 结束时间
 * @param {String} format 时间格式，参照dayjs
 * @param {String} symbol 两个时间段的分隔符
 * @returns {String} timeRangeStr
 */
export function timeRangeCompress(
  startTime: string | Dayjs | Date,
  endTime: string | Dayjs | Date,
  format = 'YYYY年MM月DD日',
  symbol = '-'
): string {
  let startStr = ''
  let endStr = ''

  if (!dayjs(startTime).isValid()) {
    throw new TypeError('startTime时间格式不正确')
  }

  if (!dayjs(endTime).isValid()) {
    throw new TypeError('endTime时间格式不正确')
  }

  const startList = timeSplit(startTime, format)
  const endList = timeSplit(endTime, format)

  const maxLen = Math.max(startList.length, endList.length)

  let diffStart = false
  for (let i = 0; i < maxLen; i++) {
    const startItem = startList[i]
    const endItem = endList[i]

    startStr += startItem
    if (startItem !== endItem || diffStart) {
      endStr += endItem
      diffStart = true
    }
  }

  let result = ''
  if (endStr.length === 0) {
    result = startStr
  } else {
    result = `${startStr}${symbol}${endStr}`
  }

  return result
}
