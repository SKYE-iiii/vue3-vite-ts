<template>
  <div class="login-container">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="0px" class="demo-ruleForm login-form"
      :size="formSize" status-icon>
      <el-form-item prop="account">

        <el-input v-model="ruleForm.account" clearable prefix-icon="el-icon-avatar" />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="ruleForm.pwd" clearable type="password" prefix-icon="el-icon-lock" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'

const router = useRouter()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  account: 'admin',
  pwd: '123456'
})

const rules = reactive<FormRules>({
  account: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  pwd: [
    {
      required: true, message: '请输入密码', trigger: 'blur',
    },
  ],
})


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (ruleForm.pwd !== '123456') {
        ElMessage.error('账户或密码错误')
        return
      }
      router.push('/Home')

    } else {
      console.log('error submit!', fields)
    }
  })
}




</script>

<style lang='scss' scoped>
.login-container {
  height: 100%;
  background: url('../../assets/bg.jpg') no-repeat;
  background-size: cover;
  position: relative;

  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 200px;
    padding: 40px 20px;
    background: rgba(255, 255, 255, .5);
    box-sizing: border-box;

    border-radius: 12px;

    button {
      width: 100%;
    }
  }
}
</style>