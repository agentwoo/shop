<!-- 导航栏 -->
<script lang='ts' setup>
import router from '@/router';
import { reactive, toRefs, ref, computed } from 'vue'

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
    <div class="navigate">
        <el-row>
            <el-col :span="8" v-for="item in navigate" @click="toNavigate(item.path)">
                <div class="navigate_icon">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <div class="navigate_icon_text">{{ item.title }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang='scss' scoped>
.navigate {
    height: 50px;
    background-color: greenyellow;
    text-align: center;

    &_icon {
        margin-top: 8px;

        &_text {
            font-size: small;
        }
    }
}
</style>