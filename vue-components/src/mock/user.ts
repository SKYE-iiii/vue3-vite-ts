import Mock from 'mockjs'
import { getQuery } from '@/utils/utils'
export default [
  {
    url: '/mock/login',
    type: 'get',
    response: (options: any) => {
      const pwd = getQuery(options.url, 'pwd')
      if (pwd === '123456') {
        return Mock.mock({
          code: 200,
          message: '成功',
          data: {
            token: 'testtoken',
          },
          success: true,
        })
      } else {
        return {
          code: 200,
          message: '用户名或密码错误，请重新输入',
          data: null,
          success: false,
        }
      }
    },
  },
]
