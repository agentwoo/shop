<!-- 登录 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import HeaderTitle from '@/components/headerTitle/index.vue'
import LoginForm from '@/views/login/component/loginForm.vue';
import RegisterForm from '@/views/login/component/registerForm.vue';
import imgUrl from '@/assets/swiper/1.webp'


const activeName = ref<'login' | 'register'>('login')


</script>

<template>
    <div class="container">
        <HeaderTitle></HeaderTitle>
        <div class="container_img">
            <img :src="imgUrl" alt="登陆注册背景图">
        </div>
        <div class="container_login">
            <el-tabs stretch v-model="activeName" class="continer_tabs">
                <el-tab-pane label="登录" name="login">
                    <LoginForm></LoginForm>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <RegisterForm></RegisterForm>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    &_img {
        img {
            width: 100%;
            height: 260px;
        }
    }

    &_login {
        height: 40%;
        width: 80%;
        margin-left: 10%;
        display: flex;
        justify-content: center;
    }

    &_ tabs {
        width: 100%;
    }
}
</style>