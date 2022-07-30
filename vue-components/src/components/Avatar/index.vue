<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-29 15:23:34
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-29 15:31:03
 * @FilePath: /vue-components/src/components/avatar/index.vue
 * 
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      Dropdown List
      <el-icon-arrow-down> </el-icon-arrow-down>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
</script>
<style scoped lang="scss"></style>
