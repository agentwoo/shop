<!-- 登录表 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

const data = reactive({
    loginForm: {
        username: '',
        passWord: ''
    },
    rules: {
        username: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 24, message: '密码长度需要在6-24之间', trigger: 'blur' }
        ],
        passWord: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 24, message: '密码长度需要在6-24之间', trigger: 'blur' },
        ]
    }
})

const loginFormRef = ref()
async function submitForm() {
    const $form = loginFormRef.value
    if (!$form) return
    const valid = await $form.validate()
    if (!valid) return

}
</script>

<template>
    <div>
        <el-form ref="loginFormRef" :model="data.loginForm" status-icon :rules="data.rules" label-width="70px"
            class="loginForm">
            <el-form-item label="账号:" prop="username">
                <el-input v-model="data.loginForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码:" prop="passWord">
                <el-input v-model="data.loginForm.passWord" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()" class="sub-btn">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<style lang='scss' scoped>
.sub-btn {
    width: 100%;
}
</style>