import Mock from 'mockjs'
import { MockParams } from './typing'
import user from './user'
const mocks = [...user]
export function mockXHR() {
  let i: MockParams
  for (i of mocks) {
    console.log(i, 'i')

    Mock.mock(new RegExp(i.url), i.type || 'get', i.response)
  }
}
