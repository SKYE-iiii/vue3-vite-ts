/*
 * @Descripti
 * @Author: zyj
 * @Date: 2022-08-03 14:19:38
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 14:43:46
 * @FilePath: /vue-components/src/mock/user.ts
 *
 */
import Mock from "mockjs";
import { getQuery, randomString } from "@/utils/utils";
export default [
  {
    url: "/mock/login",
    type: "get",
    response: (options: any) => {
      const pwd = getQuery(options.url, "pwd");
      const account = getQuery(options.url, "account");
      if (account === "admin" && pwd === "123456") {
        return Mock.mock({
          code: 200,
          message: "登录成功",
          data: {
            token: randomString(100),
            nickName: "超级管理员",
            userName: "admin",
            userId: 1,
            roleId: 1,
            avatar:
              "https://img2.baidu.com/it/u=414494141,4139921804&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          },
          success: true,
        });
      } else if (account === "test" && pwd === "123456") {
        return Mock.mock({
          code: 200,
          message: "登录成功",
          data: {
            token: randomString(100),
            nickName: "测试角色",
            userName: "admin",
            userId: 2,
            roleId: 2,
            avatar:
              "https://img2.baidu.com/it/u=2859542338,3761174075&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500",
          },
          success: true,
        });
      } else {
        return {
          code: 500,
          message: "用户名或密码错误，请重新输入",
          data: null,
          success: false,
        };
      }
    },
  },
];
