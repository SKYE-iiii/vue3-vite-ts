<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-09 16:43:23
 * @FilePath: /vue-components/src/layout/components/sidebar/AsideMenu.vue
 * 
-->
<template>
  <el-menu
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    :collapse="layoutStore.isCollapse"
    router
  >
    <siderbar-item v-for="(item, i) in menuList" :key="i" :route="item" />
  </el-menu>
</template>

<script setup lang="ts">
import SiderbarItem from './SiderbarItem.vue'
import { useLayoutStore } from '@/store/modules/layout'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { filterRoutes } from '@/utils/route'

const layoutStore = useLayoutStore()
const router = useRouter()
const route = useRoute()
const menuList = computed(() => {
  const filterRouteList = filterRoutes(router.getRoutes())
  const routes = filterRouteList.filter((v) => v.meta.isShow)
  return routes
})

const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
  border-right: none;
}
</style>
