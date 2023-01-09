<!-- 修改头像 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import HeaderTitle from '@/components/headerTitle/index.vue'
import { useUserStore } from '@/store';

const userStore = useUserStore()

const username = (rule: any, value: any, callback: any) => {
    console.log('用户名');
}

const ruleForm = reactive({
    username: userStore.user.nickname
})
const rules = reactive({
    username: [{ validator: username, trigger: 'blur', required: true, message: '请输入用户名', }],
})
const submitForm = () => {
    console.log('确认修改');
}

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_content">
            <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px"
                class="demo-ruleForm">
                <el-form-item label="昵称" prop="username">
                    <el-input v-model="ruleForm.username" autocomplete="off" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm" class="btn">确认修改</el-button>
                </el-form-item>
                <!-- <div class="tip">
                    <span>--------其他人将看到你的昵称--------</span>
                </div> -->
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
        padding: 4%;

        .btn {
            width: 100%;
        }

        .tip {
            font-size: xx-small;
            color: gray;
            text-align: center;
            padding-bottom: 4%;
        }
    }



}
</style>