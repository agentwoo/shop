<!-- 商品页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
import imgUrl from '@/assets/category/pig.jpeg'

const shopItem = computed(() => {
    return [
        {
            goods_id: '1', imgUrl: imgUrl, goods_title: '132132121312132313', present_price: '1', views: '123',
        },
        {
            goods_id: '2', imgUrl: imgUrl, goods_title: '132132121312132313', present_price: '1', views: '123',
        },
        {
            goods_id: '3', imgUrl: imgUrl, goods_title: '132132121312132313', present_price: '1', views: '123',
        },
        {
            goods_id: '4', imgUrl: imgUrl, goods_title: '132132121312132313', present_price: '1', views: '123',
        },
        {
            goods_id: '5', imgUrl: imgUrl, goods_title: '132132121312132313', present_price: '1', views: '123',
        },
    ]
})

</script>

<template>
    <div class="container" v-for="item in shopItem" :key="item.goods_id">
        <div class="container_img">
            <img :src="item.imgUrl" alt="商品图片" />
        </div>
        <div class="container_text">
            <div class="container_text_title">{{ item.goods_id }}</div>
            <div class="container_text_info">
                <div class="container_text_info_price">￥{{ item.present_price }}</div>
                <div class="container_text_info_views">{{ item.views }}看过</div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    width: 45vw;
    height: 22vh;
    padding: 2vw;
    overflow: hidden;
    margin-bottom: 1vh;
    border: 1px solid red;

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