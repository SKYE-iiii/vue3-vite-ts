// 全局icon组件转驼峰命名
export const toLine = (v: string) => {
  return v.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
