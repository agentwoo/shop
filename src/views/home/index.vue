<!-- 首页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import router from '@/router';
import { Search } from '@element-plus/icons-vue'

import swiper from '@/components/swiper/index.vue'
import category from '@/views/home/category/index.vue'
import shopItem from '@/components/shopItem/index.vue'


const data = reactive({
    inputVal: ''
})
const search = () => {
    router.push({
        path: '/search'
    })
}

</script>

<template>
    <div class="container">
        <div class="container_input">
            <el-input v-model="data.inputVal" placeholder="搜索" @keyup.enter="search">
                <template #suffix>
                    <el-icon class="el-input__icon" @click="search">
                        <Search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <swiper></swiper>
        <category></category>
        <div class="container_recommend">推荐商品</div>
        <div class="container_shopList">
            <shopItem></shopItem>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    &_input {
        padding: 5px 0;
    }

    &_recommend {
        height: 50px;
        line-height: 50px;
        background-color: red;
        text-align: center;
        font-size: 20px;
        font-weight: 400;

    }

    &_shopList {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>