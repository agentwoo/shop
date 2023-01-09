<!-- 首页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import router from '@/router';
import { Search } from '@element-plus/icons-vue'

import Swiper from '@/components/swiper/index.vue'
import Category from '@/views/home/category/index.vue'
import ShopItem from '@/components/shopItem/index.vue'
import { useGoodsItemStore } from '@/store/index'
import { successMessage, errMessage } from '@/utils/index'

const goodsItemStore = useGoodsItemStore()


// 查询待办事项
const search = () => {
    let res = goodsItemStore.searchItem(goodsItemStore.searchVal)
    if (res === 0) return errMessage('输入不能为空')
    if (res === 1) {
        goodsItemStore.searchRes = []
        router.push({ path: '/search' })
        return errMessage('暂无该商品')
    }

    goodsItemStore.searchRes = res
    router.push({ path: '/search' })
    successMessage('查询成功！')
    goodsItemStore.searchVal = ''
}

</script>

<template>
    <div class="container">
        <div class="container_input">
            <el-input v-model="goodsItemStore.searchVal" placeholder="搜索" @keyup.enter="search">
                <template #suffix>
                    <el-icon class="el-input__icon" @click="search">
                        <Search />
                    </el-icon>
                </template>
            </el-input>
        </div>
        <Swiper></Swiper>
        <div class="container_recommend">推荐商品</div>
        <Category></Category>
        <div class="container_layout">
            <ShopItem :goodsItemDesc="goodsItemStore.goodsItem"></ShopItem>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    &_input {
        padding: 5px;

        :deep(.el-input__wrapper) {
            border-radius: 18px;
        }
    }

    &_recommend {
        height: 50px;
        line-height: 50px;
        background-color: #68A1D9;
        color: white;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        border-bottom: 1px solid white;
    }

    &_layout {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1vh;
        padding: 0 2.5vw;
    }
}
</style>