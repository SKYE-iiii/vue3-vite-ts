/*
 * @Description:
 * @Author: zyj
 * @Date: 2022-08-08 16:20:12
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-08 17:16:30
 * @FilePath: /vue-components/src/utils/index.ts
 *
 */
// 全局icon组件转驼峰命名
export const toLine = (v: string) => {
  return v.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
