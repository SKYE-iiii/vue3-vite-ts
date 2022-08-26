<!--
 * @Description: 菜单项
 * @Author: zyj
 * @Date: 2022-08-08 16:33:59
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-08 16:58:48
 * @FilePath: /vue-components/src/layout/components/sidebar/SiderbarItem.vue
 * 
-->
<template>
  <!-- 有子集菜单渲染 -->
  <el-sub-menu :index="route.path" v-if="route.children?.length > 1">
    <template #title>
      <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
    </template>
    <Siderbar-Item v-for="(item, i) in route.children" :key="i" :route="item" />
  </el-sub-menu>
  <!--  无子集菜单渲染 -->
  <el-menu-item :index="route.path" v-else>
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
  </el-menu-item>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
import SiderbarItem from './SiderbarItem.vue'
const props = defineProps({
  route: {
    type: Object,
    default: {},
  },
})
console.log(props.route, 'props')
</script>
<style scoped lang="scss"></style>
