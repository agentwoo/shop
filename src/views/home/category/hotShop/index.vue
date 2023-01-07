<!-- 热门商品 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import HeaderTitle from '@/components/headerTitle/index.vue'
import ShopItem from '@/components/shopItem/index.vue'
import { useGoodsItemStore } from '@/store/index'

const goodsItemStore = useGoodsItemStore()

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_tip" v-if="goodsItemStore.freeGoods$.length === 0">
            <el-empty :image-size="250" description="暂无热门商品" />
        </div>
        <div class="container_show" v-else>
            <ShopItem :goodsItemDesc="goodsItemStore.freeGoods$"></ShopItem>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
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
        margin-top: 60px;
    }
}
</style>