<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="store.getters.isCollapse">
    <el-menu-item index="2">
      <el-icon>
        <icon-menu />
      </el-icon>
      <template #title>Navigator Two</template>
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
import { ref } from 'vue'
import {

  Menu as IconMenu,

  Setting,
} from '@element-plus/icons-vue'

import { useStore } from "vuex"
const store = useStore()


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