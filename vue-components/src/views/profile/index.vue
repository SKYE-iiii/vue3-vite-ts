<!--
 * @Description: 
 * @Author: zyj
 * @Date: 2022-07-28 15:43:10
 * @LastEditors: zyj
 * @LastEditTime: 2022-07-28 15:48:22
 * @FilePath: /vue-components/src/views/profile/index.vue
 * 
-->
<template>
  <div>
    个人中心

    <el-button @click="handleClick"> 点击 </el-button>
    <EditDialog @cancel="closeDialog" v-if="isShowDialog" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import EditDialog from './components/EditDialog.vue'
let isShowDialog = ref(false)
const handleClick = () => {
  isShowDialog.value = true
}

const closeDialog = () => {
  isShowDialog.value = false
}
</script>
<style scoped lang="scss"></style>
