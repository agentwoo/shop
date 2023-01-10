<!-- 商品页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, watch } from 'vue'

import router from '@/router';
import { IgoodsDesc } from '@/utils/store'
import { useGoodsItemStore } from '@/store/index'

type Props = {
    goodsItemDesc?: IgoodsDesc[]
}
defineProps<Props>()

const goodsItemStore = useGoodsItemStore()
// 跳转商品详情页
const toGoodsDesc = (goodsId: string) => {
    router.push({
        name: 'goodsDesc',
        params: { id: goodsId }
    })
    // 点击时views数量加一，还需调用后台接口
    let index = goodsItemStore.goodsItem.findIndex(v => v.goods_id === goodsId)
    let item = goodsItemStore.goodsItem.find(v => v.goods_id === goodsId)
    if (!item) return
    let views = Number(item.views) + 1
    goodsItemStore.goodsItem.splice(index, 1, { ...item, views: String(views) })
}

</script>

<template>
    <!-- <div class="layout"> -->
    <div class="container" v-for="item in goodsItemDesc" :key="item.goods_id" @click="toGoodsDesc(item.goods_id)">
        <div class="container_img">
            <img :src="item.imgUrl" alt="商品图片" />
        </div>
        <div class="container_text">
            <div class="container_text_title">{{ item.goods_title }}</div>
            <div class="container_text_info">
                <div class="container_text_info_price">￥{{ item.present_price }}</div>
                <div class="container_text_info_views">
                    <!-- <span class="container_text_info_views_icon">
                            <el-icon>
                                <View />
                            </el-icon>
                        </span> -->
                    <span>{{ item.views }}热度</span>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<style lang='scss' scoped>
// .layout {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     margin-top: 1vh;
//     padding: 0 2.5vw;
// }

.container {
    width: 42vw;
    height: 25vh;
    padding: 2vw;
    overflow: hidden;
    margin-bottom: 1vh;
    background-color: white;
    border-radius: 6%;

    &_img {
        img {
            width: 45vw;
            height: 18vh;
        }
    }

    &_text {
        &_title {
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        &_info {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;

            &_price {
                color: red;
            }

            &_views {
                font-size: 12px;
            }
        }
    }

}
</style>