<!-- 轮播图 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'

import img1 from '@/assets/swiper/1.webp'
import img2 from '@/assets/swiper/2.webp'
import img3 from '@/assets/swiper/3.webp'
import img4 from '@/assets/swiper/4.webp'

const swiper = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
]

</script>

<template>
    <div class="container">
        <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in swiper" :key="item">
                <img :src="item.img" alt="轮播图">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style lang='scss' scoped>
.container {
    padding: 2px 5px;

    :deep(.el-carousel__item) {
        border-radius: 20px;
    }

    img {
        width: 100%;
    }
}
</style>