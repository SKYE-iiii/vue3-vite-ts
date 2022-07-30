<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-28 15:33:33
 * @FilePath: /vue-components/src/views/layout/components/sidebar/index.vue
 * 
-->
<template>
  <div class="sidebar-container">
    <div
      :class="
        layoutStore.getIsCollapse
          ? 'avatar-name-container hiddenSidebar'
          : 'avatar-name-container showSidebar'
      "
    >
      <el-avatar shape="square" :size="50" :src="avatarUrl" />
      <span v-show="!layoutStore.getIsCollapse">account</span>
    </div>

    <aside-menu class="aside-menu" />
  </div>
</template>

<script setup lang="ts">
import AsideMenu from "./AsideMenu.vue";
import { ref } from "vue";
import { useLayoutStore } from "@/store/modules/layout";
const layoutStore = useLayoutStore();
const avatarUrl = ref(
  "https://img2.baidu.com/it/u=414494141,4139921804&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
);
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  border-right: 1px solid #ccc;

  .avatar-name-container {
    height: 100px;
    display: flex;
    align-items: center;

    text-align: center;
    transition: width 0.28s;

    span {
      margin-left: 10px;
    }
  }

  .aside-menu {
    height: calc(100% - 100px);
  }

  .hiddenSidebar {
    width: 64px;
  }

  .showSidebar {
    width: 200px;
  }
}
</style>
