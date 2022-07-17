/**
 * 封装 localStorage 和 sessionStorage
 */

// 存储 | 修改
export const setLocalItem = (k: any, v: any) => {
  if (typeof v === 'object') {
    v = JSON.stringify(v)
  }
  window.localStorage.setItem(k, v)
}

// 获取
export const getLocalItem = (k: any) => {
  const data = window.localStorage.getItem(k)
  try {
    return JSON.parse(data || '')
  } catch (err) {
    return data
  }
}

// 删除
export const removeLocalItem = (k: any) => {
  window.localStorage.removeItem(k)
}

// 清空
export const clearLocalItem = () => {
  window.localStorage.clear()
}

// sessionStorage
// 存储 | 修改
export const setSessionItem = (k: any, v: any) => {
  if (typeof v === 'object') {
    v = JSON.stringify(v)
  }
  window.sessionStorage.setItem(k, v)
}

// 获取
export const getSessionItem = (k: any) => {
  const data = window.sessionStorage.getItem(k)
  try {
    return JSON.parse(data || '')
  } catch (err) {
    return data
  }
}

// 删除
export const removeSessionItem = (k: any) => {
  window.sessionStorage.removeItem(k)
}

// 清空
export const clearSessionItem = () => {
  window.sessionStorage.clear()
}
