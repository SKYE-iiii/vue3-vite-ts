import axios from 'axios'

import store from '@/store'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'api/',
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 设置响应拦截器
service.interceptors.response.use(
  // 响应成功
  (response) => {
    const { message, success } = response.data

    if (success) {
      return response.data
    } else {
      ElMessage({
        showClose: true,
        message: message,
        type: 'error',
      })
    }
  },
  // 响应失败
  (error) => {
    if (error.response && error.response.data && error.response.data.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage({
      showClose: true,
      message: error.message,
      type: 'error',
    })
    return Promise.reject(error)
  },
)

export default service
