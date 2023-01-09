<!-- 用户详情 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'

import { useRouter } from 'vue-router';
import HeaderTitle from '@/components/headerTitle/index.vue'
import { successMessage } from '@/utils/index'
const router = useRouter()

const menus = computed(() => {
    return [
        {
            path: '/updateHeaderImg', icon: 'Picture', title: '头像',
        },
        {
            path: '/updateNickname', icon: 'User', title: '昵称',
        },
        {
            path: '/updatePwd', icon: 'Lock', title: '密码',
        },
    ]
})

// 更新用户信息
const update = (path: string) => {
    router.push({
        path: `userInfo${path}`,
    })
}

const logout = () => {
    // 调用退出登录的api接口

    router.replace({
        path: '/login'
    })
    successMessage('退出登录成功！')
}

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_userInfo">
            <el-menu active-text-color="#348CCC" background-color="white"
                :default-active="router.currentRoute.value.path" text-color="black">
                <el-menu-item :index="item.path" v-for="item in menus" class="menus_item" @click="update(item.path)">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.title }}</span>
                    <span style="position:absolute;left:90%;">
                        <el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="container_logout" @click="logout">
            <el-button type="primary" round>退出登录</el-button>
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

    &_userInfo {
        margin-top: 50px;

        .menus_item {
            border-bottom: 1px solid #F2F2F2;
        }
    }

    &_logout {
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
</style>