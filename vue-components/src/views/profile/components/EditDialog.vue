<template>
  <el-dialog draggable :model-value="visible" :title="title" width="42%" @close="handleClose">
    编辑页面
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const visible = ref(true)
const title = ref('编辑弹窗')
const emits = defineEmits(['cancel'])
const handleClose = () => {
  emits('cancel')
}
</script>

<style scoped lang="scss"></style>
