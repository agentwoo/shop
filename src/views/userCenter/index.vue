<!-- 用户中心 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
import imgUrl from '@/assets/category/pig.jpeg'
import { useRouter } from 'vue-router';

const router = useRouter()

const menus = computed(() => {
    return [
        {
            path: '/userCenter/userInfo', icon: 'Sunny', title: '个人中心',
        },
        {
            path: '/userCenter/getGoods', icon: 'Sunny', title: '已买到',
        },
        {
            path: '/userCenter/sellGoods', icon: 'Sunny', title: '已卖出',
        },
        {
            path: '/userCenter/pubGoods', icon: 'Sunny', title: '我发布的',
        },
        {
            path: '/userCenter/collectGoods', icon: 'Sunny', title: '收藏商品',
        },
    ]
})


const toLoginOrRegister = () => {
    router.push({
        path: '/login'
    })
}
</script>

<template>
    <div class="container">
        <div class="container_header">
            <div @click="toLoginOrRegister">
                <img :src="imgUrl" alt="用户头像">
                <span class="container_header_span">登录/注册</span>
            </div>
        </div>
        <div>
            <el-menu active-text-color="blue" background-color="white" class="container_menus"
                :default-active="router.currentRoute.value.path" text-color="black" router>
                <el-menu-item :index="item.path" v-for="item in menus" class="container_menus_item">
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
    </div>
</template>

<style lang='scss' scoped>
.container {
    &_header {
        height: 140px;
        line-height: 140px;
        background-color: yellowgreen;
        text-align: center;


        img {
            height: 60px;
            border-radius: 50%;
        }

        &_span {
            position: absolute;
            top: 70px;
            left: 40.5vw;
        }
    }

    &_menus {
        margin-top: 10px;

        &_item {
            border-bottom: 1px solid gray;
        }
    }
}
</style>