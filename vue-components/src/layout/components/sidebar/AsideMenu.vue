<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-03 15:54:52
 * @FilePath: /vue-components/src/layout/components/sidebar/AsideMenu.vue
 * 
-->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="layoutStore.isCollapse"
    router
  >
    <el-menu-item index="/three">
      <el-icon>
        <icon-menu />
      </el-icon>

      <template #title>ThreeJs</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import { useLayoutStore } from "@/store/modules/layout";
const layoutStore = useLayoutStore();
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
