<!-- 分类 -->
<script lang='ts' setup>
import { reactive, toRefs, ref, computed } from 'vue'
import router from '@/router';
import imgUrl from '@/assets/category/pig.jpeg'

const category = computed(() => {
    return [
        {
            imgUrl: imgUrl, title: '所有商品', path: '/home/allShop'
        },
        {
            imgUrl: imgUrl, title: '最新商品', path: '/home/newShop'
        },
        {
            imgUrl: imgUrl, title: '热门商品', path: '/home/hotShop'
        },
        {
            imgUrl: imgUrl, title: '免费商品', path: '/home/freeShop'
        },
    ]
})

const toCategory = (path: string) => {
    router.push({
        path: path
    })
}

</script>

<template>
    <div class="container">
        <el-row>
            <el-col :span="(24 / category.length)" v-for="item in category" @click="toCategory(item.path)">
                <div class="container_icon">
                    <!-- <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon> -->
                    <img :src="item.imgUrl" alt="管理员头像">
                    <div class="container_icon_text">{{ item.title }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 60px;
    background-color: aquamarine;
    text-align: center;

    &_icon {
        margin-top: 6px;

        img {
            height: 30px;
            border-radius: 50%;
        }

        &_text {
            font-size: small;
        }
    }
}
</style>