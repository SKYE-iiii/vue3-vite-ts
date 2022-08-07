import { ElMessage } from 'element-plus'

export const copy = (text: string, tips: string) => {
  // 创建 input 标签
  let input = document.createElement('input')
  // 设置 input 标签的值
  input.value = text
  // 添加标签
  document.body.appendChild(input)
  // 选中值
  input.select()
  // 复制
  document.execCommand('copy')
  // 复制成功提示消息
  ElMessage.success(tips)

  // 移除标签
  document.body.removeChild(input)
}
