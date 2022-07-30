<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <NavHeader />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/sidebar/index.vue";
import NavHeader from "./components/NavHeader.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;

    .el-header {
      padding: 0;
    }
  }
}
</style>
