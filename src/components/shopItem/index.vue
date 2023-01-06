<!-- 商品页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
import router from '@/router';

import { IgoodsDesc } from '@/utils/store'

type Props = {
    goodsItemDesc?: IgoodsDesc[]
}
defineProps<Props>()


const toGoodsDesc = (goodsId: string) => {
    router.push({
        name: 'goodsDesc',
        params: { id: goodsId }
    })
}

</script>

<template>
    <div class="layout">
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
                        <span>{{ item.views }}看过</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1vh;
    padding: 0 2.5vw;
}

.container {
    width: 42vw;
    height: 22vh;
    padding: 2vw;
    overflow: hidden;
    margin-bottom: 1vh;
    background-color: white;
    border-radius: 6%;

    &_img {
        img {
            width: 45vw;
            height: 15vh;
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