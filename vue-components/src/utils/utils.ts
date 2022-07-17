/**
 * mock-get-获取参数
 */
export const getQuery = (url: string, name: string) => {
  const queryArr = url.split('?')[1].split('&')
  console.log(queryArr, 'res')
  for (let i = 0; i < queryArr.length; i++) {
    const res = queryArr[i].split('=')
    if (res[0] === name) return res[1]
  }
  return null
}
