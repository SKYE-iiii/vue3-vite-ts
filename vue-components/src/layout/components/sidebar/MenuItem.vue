<!--
 * @Description: 菜单子项
 * @Author: zyj
 * @Date: 2022-08-08 16:44:36
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-08 16:57:46
 * @FilePath: /vue-components/src/layout/components/sidebar/MenuItem.vue
 * 
-->
<template>
  <component :is="`el-icon-${toLine(icon)}`"></component>
  <span class="ml4">{{ title }}</span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { toLine } from '@/utils'
const props = defineProps({
  title: {
    type: String,
    default: '无标题',
  },
  icon: {
    type: String,
    default: 'el-icon-helpfilled',
  },
})
</script>
<style scoped lang="scss">
.ml4 {
  margin-left: 4px;
}
</style>
