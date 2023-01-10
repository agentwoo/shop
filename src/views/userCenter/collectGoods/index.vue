<!-- 收藏列表 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import HeaderTitle from '@/components/headerTitle/index.vue'
import GoodsList from '@/views/userCenter/collectGoods/components/goodsList.vue'

import { useGoodsItemStore } from '@/store/index'

const goodsItemStore = useGoodsItemStore()

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_tip" v-if="goodsItemStore.collectGoodsList.length === 0">
            <el-empty :image-size="250" description="暂无收藏商品" />
        </div>
        <div class="container_show" v-else>
            <GoodsList :goodsList="goodsItemStore.collectGoodsList"></GoodsList>
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

    &_tip {
        height: 80vh;
        display: flex;
        justify-content: center;
        font-weight: 900;
    }

    &_show {
        margin-top: 55px;
    }
}
</style>