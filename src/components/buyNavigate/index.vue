<!-- 购买底部导航 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import { Star, ShoppingCart } from '@element-plus/icons-vue'

import { successMessage } from '@/utils/index'

type Props = {
    buyOrCollectItemId: string,
}
defineProps<Props>()

async function collect(id: string) {
    console.log('收藏', id);
    successMessage('收藏成功！')
}

async function buy(id: string) {
    console.log('购买', id);
    // 点击进入商品购买页面
}

</script>

<template>
    <div class="container">
        <div class="container_btn">
            <el-button type="warning" :icon="Star" round @click="collect(buyOrCollectItemId)">收藏</el-button>
            <el-button type="danger" :icon="ShoppingCart" round @click="buy(buyOrCollectItemId)">购买</el-button>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 50px;
    background-color: white;

    &_btn {
        position: relative;
        left: 45%;
        top: 9px;

        :deep(.el-button) {
            width: 100px;
        }
    }
}
</style>