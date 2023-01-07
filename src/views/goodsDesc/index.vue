<!-- 商品详情 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue'

import { useRoute } from 'vue-router';

import HeaderTitle from '@/components/headerTitle/index.vue'
import BuyNavigate from '@/components/buyNavigate/index.vue'
import { useGoodsItemStore } from '@/store/index'

const route = useRoute()
const goodsItemStore = useGoodsItemStore()

const data = reactive({
    item: {
        goods_id: '',
        imgUrl: '',
        swiper_img: [
            { img: '' }
        ],
        goods_title: '',
        goods_desc: '',
        present_price: '',
        origin_price: '',
        views: '',
        kind: '',
        pub_time: '',
        is_collect: '',
    }
})

watch(() => route.params, newVal => {
    const item = goodsItemStore.goodsItem.find((v) => v.goods_id === newVal.id)
    if (item) {
        data.item = item;
    }
}, {
    immediate: true
})


</script>

<template>
    <div class="container">
        <HeaderTitle></HeaderTitle>
        <div class="container_goodsDesc">
            <div>
                <el-carousel trigger="click" height="300px">
                    <el-carousel-item v-for="item in data.item.swiper_img" :key="item">
                        <img :src="item.img" alt="轮播图" style="width:100%">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="container_goodsDesc_pirce">
                <span>￥{{ data.item.present_price }}</span>
                <span>原价￥{{ data.item.origin_price }}</span>
            </div>
            <div class="container_goodsDesc_title">
                <span>{{ data.item.goods_title }}</span>
            </div>
            <div class="container_goodsDesc_desc">
                <span>{{ data.item.goods_title }}</span>
            </div>
        </div>
        <div class="container_footNavigate">
            <BuyNavigate :buy-or-collect-item-id="data.item.goods_id"></BuyNavigate>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    &_goodsDesc_pirce {
        height: 60px;
        line-height: 60px;
        width: 100%;
        background-color: white;
        border-bottom: 1px solid rgb(202, 196, 196);
        border-top: 1px solid rgb(202, 196, 196);

        span:nth-child(1) {
            color: red;
            font-size: 20px;
            font-weight: 700;
            margin-left: 5px;
        }

        span:nth-child(2) {
            text-decoration: line-through;
            color: rgb(198, 196, 196);
            margin-left: 20px;
        }
    }

    &_goodsDesc_title {
        height: 30px;
        width: 100%;
        background-color: white;
        font-size: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    &_goodsDesc_desc {
        height: 70px;
        width: 100%;
        font-size: 20px;
        background-color: white;
        // text-overflow: ellipsis;
        // overflow: hidden;
        word-break: break-all;
        word-wrap: break-word;
        border-top: 1px solid rgb(202, 196, 196);
    }

    &_footNavigate {
        position: fixed;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0;
    }


}
</style>