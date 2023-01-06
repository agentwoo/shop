<!-- 头部标题 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue'
import { useRouter } from 'vue-router';

const data = reactive({
    title: ''
})
const router = useRouter()
watch(() => router.currentRoute.value.path, newVal => {
    switch (newVal) {
        // 导航栏
        case '/home':
            data.title = '首页'
            break;
        case '/pubGoods':
            data.title = '商品发布'
            break;
        case '/userCenter':
            data.title = '个人中心'
            break;
        // 搜索页
        case '/search':
            data.title = '商品列表'
            break;
        // 推荐栏
        case '/home/allShop':
            data.title = '所有商品'
            break;
        case '/home/newShop':
            data.title = '最新商品'
            break;
        case '/home/hotShop':
            data.title = '热门商品'
            break;
        case '/home/freeShop':
            data.title = '免费商品'
            break;
        // 个人中心
        case '/userCenter/getGoods':
            data.title = '已买到'
            break;
        case '/userCenter/sellGoods':
            data.title = '已卖出'
            break;
        case '/userCenter/pubGoods':
            data.title = '已发布'
            break;
        case '/userCenter/collectGoods':
            data.title = '我的收藏'
            break;
        case '/userCenter/userInfo':
            data.title = '用户详情'
            break;
        // 登录注册
        case '/login':
            data.title = '登录/注册'
            break;
        default:
            data.title = '商品详情'
    }
}, {
    immediate: true
})

const back = () => {
    router.back()
}


</script>

<template>
    <div class="title">
        <span class="title_icon" @click="back" v-show="
        router.currentRoute.value.path !== '/home'
        &&router.currentRoute.value.path !== '/pubGoods'
        &&router.currentRoute.value.path !== '/userCenter'
        ">
            <el-icon>
                <ArrowLeftBold />
            </el-icon>
        </span>
        <span>{{ data.title }}</span>
    </div>
</template>

<style lang='scss' scoped>
.title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    background-color: greenyellow;

    &_icon {
        position: absolute;
        left: 5px;
        top: 2px;
    }
}
</style>