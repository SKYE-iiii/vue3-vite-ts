<template>
  <div id="three"></div>
</template>

<script setup lang="ts">
import ThreeJs from '../../three/index'
import { onMounted } from 'vue'
onMounted(() => {
  const three = document.getElementById('three')
  new ThreeJs(three)
})
</script>

<style scoped>
#three {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
