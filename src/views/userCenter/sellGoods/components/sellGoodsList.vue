<!-- 卖出列表 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { IgoodsDesc } from '@/utils/store'


type Props = {
    sellGoodsList?: IgoodsDesc[]
}
defineProps<Props>()


const deleted = () => {
    console.log('删除');
}

</script>

<template>
    <div class="container">
        <div class="container_item" v-for="item in sellGoodsList" :key="item.goods_id">
            <div class="container_item_img">
                <img :src="item.imgUrl" alt="商品封面图">
            </div>
            <div class="container_item_detail">
                <div class="container_item_detail_title">
                    <div>{{ item.goods_title }}</div>
                    <div>￥{{ item.present_price }}</div>
                </div>
                <div class="container_item_detail_edit">
                    <el-button type="danger" round @click="deleted">删除</el-button>
                </div>
            </div>
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

            &_title {

                div:nth-child(1) {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 20px;
                    font-weight: 400;
                    margin-top: 10px;
                }

                div:nth-child(2) {
                    position: relative;
                    left: 0px;
                    top: 50px;
                    color: red;
                    font-size: 20px;
                }
            }

            &_edit {
                position: relative;
                left: 70%;
                top: 20px;
            }
        }
    }
}
</style>