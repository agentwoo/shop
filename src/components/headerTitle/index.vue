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
        case '/home':
            data.title = '首页'
            break;
        case '/pubGoods':
            data.title = '商品发布'
            break;
        case '/userCenter':
            data.title = '个人中心'
            break;
        case '/search':
            data.title = '商品列表'
            break;
        default:
            data.title = 'helloworld'
    }
}, {
    immediate: true
})

const back = () => {
    router.replace({
        path: '/home'
    })
}


</script>

<template>
    <div class="title">
        <span class="title_icon" @click="back" v-show="router.currentRoute.value.path === '/search' ">
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