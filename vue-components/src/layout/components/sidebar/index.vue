<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:12:00
 * @FilePath: /vue-components/src/layout/components/sidebar/index.vue
 * 
-->
<template>
  <div class="sidebar-container">
    <div
      :class="
        layoutStore.isCollapse
          ? 'avatar-name-container hiddenSidebar'
          : 'avatar-name-container showSidebar'
      "
    >
      <el-avatar shape="square" :size="50" :src="userStore.avatar" />
      <span v-show="!layoutStore.isCollapse">{{ userStore.nickName }}</span>
    </div>

    <aside-menu class="aside-menu" />
  </div>
</template>

<script setup lang="ts">
import AsideMenu from "./AsideMenu.vue";
import { useLayoutStore } from "@/store/modules/layout";
import { useUserStore } from "@/store/modules/user";
import { ref } from "vue";
const layoutStore = useLayoutStore();
const userStore = useUserStore();
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
