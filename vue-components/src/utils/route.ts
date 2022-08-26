/*
 * @Description: 路由菜单
 * @Author: zyj
 * @Date: 2022-08-09 13:50:27
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-09 16:42:12
 * @FilePath: /vue-components/src/utils/route.ts
 *
 */
/**
 *  菜单规则 :   
            1. 菜单规则 : 如果有 meta && meta.title && meta.icon 则显示在菜单中;否则不展示
            2. 如果存在 children : 则以 el-sub-menu 展示
            3. 否则 以 el-menu-item 展示
 *  步骤 :
 *          1.获取所有的子路由
 *          2.根据子集路由去重
 */
import { RouteRecordRaw, RouteRecordNormalized } from 'vue-router'

// 获取所有的子集路由(只取子路由)
const getChildrenRoutes = (routes: Array<RouteRecordNormalized>) => {
  let result: any = []
  routes.forEach((v) => {
    if (v.children && v.children.length > 0) {
      result.push(...v.children)
    }
  })

  return result
}

// 根据子集路由对当前路由去重
export const filterRoutes = (routes: Array<RouteRecordNormalized>) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute: any) => {
      return childrenRoute.path === route.path
    })
  })
}

// 判断空值
const isNull = (data: any) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
}

export const generatorMenu = (routes: Array<RouteRecordRaw>): any => {
  /**
   * 1.
   */

  routes.forEach((route) => {
    const result = []
    // 不存在children && 不存在 meta 直接return
    if (isNull(route.children) && isNull(route.meta)) return
    // 有children && 没有meta
    if (!isNull(route.children) && isNull(route.meta)) {
      if (route.children) result.push(...generatorMenu(route.children))
    }
    console.log(route, 'route')

    // return result;
  })
}
