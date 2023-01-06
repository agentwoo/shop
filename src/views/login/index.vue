<!-- 登录 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import HeaderTitle from '@/components/headerTitle/index.vue'
import LoginForm from '@/views/login/component/loginForm.vue';
import RegisterForm from '@/views/login/component/registerForm.vue';


const activeName = ref<'login' | 'register'>('login')


</script>

<template>
    <HeaderTitle></HeaderTitle>
    <div class="container">
        <el-tabs stretch v-model="activeName" class="demo-tabs">
            <el-tab-pane label="登录" name="login">
                <LoginForm></LoginForm>
            </el-tab-pane>
            <el-tab-pane label="注册" name="register">
                <RegisterForm></RegisterForm>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 40%;
    width: 80%;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
}

.demo-tabs {
    width: 100%;
}
</style>