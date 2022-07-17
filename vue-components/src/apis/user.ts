import request from '@/utils/request'

export const login_api = (params: any) => {
  return request({
    url: '/mock/login',
    method: 'get',
    params,
  })
}
