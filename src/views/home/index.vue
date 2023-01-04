<!-- 首页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import swiper from '@/components/swiper/index.vue'
import { Search } from '@element-plus/icons-vue'
import router from '@/router';

const data = reactive({
    inputVal: ''
})
const search = () => {
    router.push({
        path: '/search'
    })
}

</script>

<template>
    <div class="input">
        <el-input v-model="data.inputVal" placeholder="搜索" @keyup.enter="search">
            <template #suffix>
                <el-icon class="el-input__icon" @click="search">
                    <Search />
                </el-icon>
            </template>
        </el-input>
    </div>
    <swiper></swiper>
</template>

<style lang='scss' scoped>
.input {
    padding: 5px 0;
}
</style>