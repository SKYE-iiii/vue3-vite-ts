/*
 * @Description: 用户详情
 * @Author: zyj
 * @Date: 2022-08-04 14:59:09
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:02:49
 * @FilePath: /vue-components/src/store/userType.ts
 *
 */
export interface UserState {
  token: string;
  nickName: string;
  userName: string;
  userId: number;
  roleId: number;
  avatar: string;
}
