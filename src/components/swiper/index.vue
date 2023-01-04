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
                <h3 class="small justify-center" text="2xl">
                    <img :src="item.img" alt="轮播图">
                </h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<style lang='scss' scoped>
.container {
    img {
        width: 100%;
    }
}
</style>