<template>
  <el-dropdown class="avatar" trigger="click" @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="avatarUrl" />
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
const router = useRouter()
const userStore = useUserStore()

const avatarUrl = ref(
  'https://img2.baidu.com/it/u=414494141,4139921804&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
)

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'toProfile':
      toProfile()
      break
    case 'logout':
      logout()
      break
  }
}

const toProfile = () => {
  router.push('/profile')
}

const logout = () => {
  userStore.logout()
}
</script>
<style scoped lang="scss">
.avatar {
  margin-right: 30px;
  cursor: pointer;
}
</style>
