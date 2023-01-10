<!-- 商品列表-->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router';

import { StarFilled } from '@element-plus/icons-vue'
import { IgoodsDesc } from '@/utils/store'
import { useGoodsItemStore } from '@/store';
import { errMessage, successMessage } from '@/utils';

type Props = {
    goodsList?: IgoodsDesc[]
}
defineProps<Props>()

const router = useRouter()
const toGoodsDesc = (goodsId: string) => {
    router.push({
        name: 'goodsDesc',
        params: { id: goodsId }
    })
}

const goodsItemStore = useGoodsItemStore()
const cancelCollect = (item: IgoodsDesc) => {
    let index = goodsItemStore.collectGoodsList.findIndex(v => v.goods_id === item.goods_id)
    if (index === -1) return errMessage('出现错误')
    goodsItemStore.collectGoodsList.splice(index, 1)
    goodsItemStore.goodsItem.splice(index, 1, { ...item, is_collect: '0' })
    successMessage('取消收藏')
}

</script>

<template>
    <div class="container">
        <div class="container_item" v-for="item in goodsList" :key="item.goods_id" @click="toGoodsDesc(item.goods_id)">
            <div class="container_item_img">
                <img :src="item.imgUrl" alt="商品封面图">
            </div>
            <div class="container_item_detail">
                <div>{{ item.goods_title }}</div>
                <div>{{ item.goods_desc }}</div>
                <div>￥{{ item.present_price }}</div>
            </div>
            <el-button type="warning" :icon="StarFilled" circle class="btn" @click.stop="cancelCollect(item)" />
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    padding: 0 10px;

    &_item {
        display: flex;
        background-color: white;
        margin-top: 5px;
        border-radius: 12px;
        height: 120px;


        &_img {
            img {
                width: 120px;
                border-radius: 12px;
            }
        }

        &_detail {
            margin-left: 10px;
            width: 100%;
            overflow: hidden;

            div:nth-child(1) {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: 20px;
                font-weight: 400;
            }

            div:nth-child(2) {
                word-wrap: break-word;
                word-break: break-all;
                font-size: 15px;
                height: 70px;
            }

            div:nth-child(3) {
                color: red;
            }
        }

        .btn {
            position: relative;
            left: -10px;
            top: 80px;
        }
    }
}
</style>