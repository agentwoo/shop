<!-- 修改头像 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import HeaderTitle from '@/components/headerTitle/index.vue'
import { useUserStore } from '@/store';

const userStore = useUserStore()

const updateHeaderImg = () => {
    // 修改头像逻辑
    console.log('修改头像');
}

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_content">
            <div class="container_content_img">
                <img :src="userStore.user.user_head_img" alt="用户头像">
            </div>
            <div class="container_content_edit">
                <el-button type="primary" round @click="updateHeaderImg">修改头像</el-button>
            </div>
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

        &_img {
            width: 80%;
            padding: 10%;

            img {
                width: 100%;
                height: 260px;
            }
        }

        &_edit {
            padding: 0 10%;
            margin-top: 5vh;

            :deep(.el-button.is-round) {
                width: 100%;
                height: 50px;
            }

            :deep(.el-button>span) {
                font-size: 18px;
            }
        }
    }
}
</style>