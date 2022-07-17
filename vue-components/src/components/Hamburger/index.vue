<template>
  <div class="hamburger-container" @click="toggleClick">
    <el-icon-expand v-if="store.getters.isCollapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex"
const store = useStore()
const toggleClick = () => {
  store.commit('layout/setCollapse')
}
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
    background-color: rgba(135, 206, 235, .7);
  }
}
</style>