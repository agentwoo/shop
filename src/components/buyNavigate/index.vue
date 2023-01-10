<!-- 购买底部导航 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, watch, onMounted } from 'vue'
import { ShoppingCart } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import { errMessage, successMessage, dialog } from '@/utils/index'
import { IgoodsDesc } from '@/utils/store'
import { useGoodsItemStore } from '@/store/index'

const goodsItemStore = useGoodsItemStore()
type Props = {
    buyOrCollectItem: IgoodsDesc,
}
defineProps<Props>()

// 监听路由，获取商品id
const route = useRoute()
const goodsId = ref()
watch(() => route.params, newVal => {
    goodsId.value = newVal.id
}, {
    immediate: true
})

// 获取商品是否被购买并给icon赋予初始值
let data = goodsItemStore.goodsItem.find(v => v.goods_id === goodsId.value)
let isCollect = data?.is_collect
let iconDate = ref('Star')
if (isCollect === '0') {
    iconDate.value = 'Star'
} else {
    iconDate.value = 'StarFilled'
}


// 添加、取消收藏
async function collect(item: IgoodsDesc) {
    const collect = item.is_collect === '1' ? '0' : '1'
    let index = goodsItemStore.goodsItem.findIndex(v => v.goods_id === item.goods_id)
    if (index === -1) return errMessage('添加失败')
    // 更改原始数据中的collect状态
    goodsItemStore.goodsItem.splice(index, 1, { ...item, is_collect: collect })

    // 添加到收藏列表里
    let index1 = goodsItemStore.collectGoodsList.findIndex(v => v.goods_id === item.goods_id)
    if (index1 === -1) {
        goodsItemStore.collectGoodsList.unshift({ ...item, is_collect: collect })
    } else {
        goodsItemStore.collectGoodsList.splice(index1, 1)
    }

    // 动态绑定icon
    if (iconDate.value === 'Star') {
        iconDate.value = 'StarFilled'
        successMessage('收藏成功')
    } else {
        iconDate.value = 'Star'
        successMessage('取消收藏')
    }
}

// 商品购买
async function buy(item: IgoodsDesc) {
    // console.log('购买', item.goods_id);
    // 点击进入商品购买页面
    dialog('13', '123')
}

</script>

<template>
    <div class="container">
        <div class="container_btn">
            <el-button type="warning" v-bind:icon="iconDate" round @click="collect(buyOrCollectItem)">收藏</el-button>
            <el-button type="danger" :icon="ShoppingCart" round @click="buy(buyOrCollectItem)">购买</el-button>
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