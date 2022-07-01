// 格式化播放数量
export const formatPlayCount = (count: number): string => {
  let result = String(count)
  if (count / 100000000 >= 1) {
    result = (count / 100000000).toFixed() + '亿'
  } else if (count / 10000 >= 10) {
    result = (count / 10000).toFixed() + '万'
  }
  return result
}
