<!--
 * @Description: 菜单项
 * @Author: zyj
 * @Date: 2022-08-08 16:33:59
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-08 16:58:48
 * @FilePath: /vue-components/src/layout/components/sidebar/SiderbarItem.vue
 * 
-->
<template>
  <!-- 有子集菜单渲染 -->
  <el-sub-menu index="1">
    <template #title>
      <menu-item></menu-item>
    </template>
    <el-menu-item index="1-1">item one</el-menu-item>
  </el-sub-menu>
  <!--  无子集菜单渲染 -->
  <el-menu-item index="/three">
    <menu-item></menu-item>
  </el-menu-item>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import MenuItem from "./MenuItem.vue";

</script>
<style scoped lang="scss"></style>
