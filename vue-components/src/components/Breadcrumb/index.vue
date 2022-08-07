<!--
 * @Description: 面包屑导航
 * @Author: zyj
 * @Date: 2022-08-04 16:00:43
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 16:32:00
 * @FilePath: /vue-components/src/components/Breadcrumb/index.vue
 * 
-->
<template>
  <el-breadcrumb :separator="separator">
    <el-breadcrumb-item
      :to="{ path: v.path }"
      v-for="(v, i) in breadcrumbs"
      :key="i"
    >
      {{ v.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute, RouteLocationMatched } from "vue-router";
import { defineProps, watch, shallowReactive } from "vue";
const props = defineProps({
  separator: {
    type: String,
    default: "/",
  },
});

const route = useRoute();

let breadcrumbs = shallowReactive([] as Array<RouteLocationMatched>);

const caleBreamcrumbs = () => {
  breadcrumbs = route.matched.filter(
    (v) => v.meta && v.meta.title && v.meta.icon
  );
};

watch(
  () => route.path,
  () => {
    caleBreamcrumbs();
  },
  { immediate: true }
);
</script>
<style scoped lang="scss"></style>
