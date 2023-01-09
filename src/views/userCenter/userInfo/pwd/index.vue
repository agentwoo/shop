<!-- 修改昵称 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import type { FormInstance } from 'element-plus'

import HeaderTitle from '@/components/headerTitle/index.vue'

const ruleFormRef = ref<FormInstance>()

// const username = (rule: any, value: any, callback: any) => {
//     console.log('用户名');
// }

const oldPwd = (rule: any, value: any, callback: any) => {
    console.log('旧密码');
}

const newPwd = (rule: any, value: any, callback: any) => {
    console.log('新密码');
}

const checkNewPwd = (rule: any, value: any, callback: any) => {
    console.log('检查新密码');
}

const ruleForm = reactive({
    // username: '',
    oldPwd: '',
    newPwd: '',
    checkNewPwd: '',
})

const rules = reactive({
    // username: [{ validator: username, trigger: 'blur', required: true, message: '请输入用户名', }],
    oldPwd: [{ validator: oldPwd, trigger: 'blur', required: true, message: '请输入原密码', }],
    newPwd: [{ validator: newPwd, trigger: 'blur', required: true, message: '请输入新密码', }],
    checkNewPwd: [{ validator: checkNewPwd, trigger: 'blur', required: true, message: '请在此输入新密码', }],
})

const submitForm = () => {
    console.log('提交信息');
}

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_content">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px"
                class="demo-ruleForm">
                <!-- <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username" type="password" autocomplete="off" />
                </el-form-item> -->
                <el-form-item label="原密码" prop="oldPwd">
                    <el-input v-model="ruleForm.oldPwd" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd">
                    <el-input v-model.number="ruleForm.newPwd" />
                </el-form-item>
                <el-form-item label="确认密码" prop="checkNewPwd">
                    <el-input v-model.number="ruleForm.checkNewPwd" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm" class="btn">确认修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 100%;
    overflow: hidden;

    &_header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    &_content {
        margin-top: 50px;
        padding: 5%;

        .btn {
            width: 100%;
        }
    }
}
</style>