<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon-expand v-if="layoutStore.isCollapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from "@/store/modules/layout";
const layoutStore = useLayoutStore();
const toggleClick = () => {
  layoutStore.setCollapse();
};
</script>

<style lang="scss" scoped>
.hamburger-container {
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: hsla(192, 22%, 95%, 0.97);
  }
}
</style>
