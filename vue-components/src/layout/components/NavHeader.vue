<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-22 15:53:22
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 16:33:58
 * @FilePath: /vue-components/src/layout/components/NavHeader.vue
 * 
-->
<template>
  <div class="nav-header-container">
    <div class="left">
      <Hamburger />
      <Breadcrumb />
    </div>
    <div class="right">
      <Avatar />
    </div>
  </div>
</template>

<script setup lang="ts">
import Hamburger from "@/components/Hamburger/index.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
import Avatar from "@/components/Avatar/index.vue";
</script>

<style lang="scss" scoped>
.nav-header-container {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

  .left,
  .right {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
