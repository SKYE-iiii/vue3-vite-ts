<!--
 * @Description: 头像下拉组件
 * @Author: zyj
 * @Date: 2022-08-03 14:19:38
 * @LastEditors: zyj
 * @LastEditTime: 2022-08-04 15:30:37
 * @FilePath: /vue-components/src/components/Avatar/index.vue
 * 
-->
<template>
  <el-dropdown class="avatar" trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="userStore.avatar" />
      <el-icon-arrowdown class="ml10"></el-icon-arrowdown>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="toProfile">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
const router = useRouter();
const userStore = useUserStore();

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case "toProfile":
      toProfile();
      break;
    case "logout":
      logout();
      break;
  }
};

const toProfile = () => {
  router.push("/profile");
};

const logout = () => {
  userStore.logout();
};
</script>
<style scoped lang="scss">
.avatar {
  margin-right: 30px;
  cursor: pointer;
}
</style>
