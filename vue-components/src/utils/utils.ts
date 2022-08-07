/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-08-03 14:19:38
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:36:37
 * @FilePath: /vue-components/src/utils/utils.ts
 *
 */
/**
 * mock-get-获取参数
 */
export const getQuery = (url: string, name: string) => {
  const queryArr = url.split("?")[1].split("&");

  for (let i = 0; i < queryArr.length; i++) {
    const res = queryArr[i].split("=");
    if (res[0] === name) return res[1];
  }
  return null;
};

// 随机字符串
export function randomString(length: number) {
  var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = length; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)];
  }

  return result;
}
