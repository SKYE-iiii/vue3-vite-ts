<template>
  <el-button :type="type" @click="handleClick">
    <slot>{{ buttonText }}</slot>
  </el-button>
  <copy-icons title="图标选择器" v-model:visible="visible" />
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import copyIcons from './components/copyIcons.vue'

let props = defineProps({
  buttonText: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'primary',
  },
})

let visible = ref<boolean>(false)

const handleClick = () => {
  visible.value = true
}
</script>

<style scoped lang="scss"></style>
