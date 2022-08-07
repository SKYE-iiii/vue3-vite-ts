<template>
  <el-dialog draggable :model-value="visible" :title="title" width="42%" @close="handleClose">
    <el-scrollbar height="400px">
      <div class="icons-container">
        <div v-for="(v, i) in Object.keys(Icons)" :key="i" class="icon" @click="copyIcon(v)">
          <component :is="`el-icon-${toLine(v)}`"></component>
          <span class="icon-text"> {{ `el-icon-${toLine(v)}` }}</span>
        </div>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue' // 引入icons
import * as Icons from '@element-plus/icons-vue'
import { toLine } from '@/utils'
import { copy } from '@/hooks'
let props = defineProps({
  title: {
    type: String,
    default: '选择图标',
  },
  visible: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['update:visible'])
const handleClose = () => {
  emits('update:visible', false)
}

const copyIcon = (v: string) => {
  const tagName = `<el-icon-${toLine(v)} />`
  copy(tagName, '标签复制成功')
  // 复制完成 关闭弹窗
  handleClose()
}
</script>

<style scoped lang="scss">
::v-deep .el-dialog__body {
  height: 400px !important;
  overflow-y: scroll;
}
.icons-container {
  display: flex;
  flex-wrap: wrap;
  .icon {
    width: 25%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
    box-sizing: border-box;
    cursor: pointer;
    .icon-text {
      flex: 1;
      font-size: 12px;
    }
    &:hover {
      color: #409efa;
    }
  }
  svg {
    width: 1.5em;
    height: 1.5em;
  }
}
</style>
