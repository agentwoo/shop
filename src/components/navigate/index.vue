<!-- 导航栏 -->
<script lang='ts' setup>
import router from '@/router';
import { reactive, toRefs, ref, computed, watch } from 'vue'

const navigate = computed(() => {
    return [
        {
            icon: 'House', title: '首页', path: '/home'
        },
        {
            icon: 'Plus', title: '发布', path: '/pubGoods'
        },
        {
            icon: 'User', title: '我的', path: '/userCenter'
        },
    ]
})

const toNavigate = (path: string) => {
    router.push({
        path: path
    })
}
</script>

<template>
    <div class="container">
        <el-row>
            <el-col :span="8" v-for="item in navigate" @click="toNavigate(item.path)">
                <div class="container_icon">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <div class="container_icon_text">{{ item.title }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 50px;
    background-color: white;
    text-align: center;

    &_icon {
        margin-top: 8px;

        &_text {
            font-size: small;
        }
    }
}
</style>