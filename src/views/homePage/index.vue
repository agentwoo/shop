<!-- 首页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import headerTitle from '@/components/headerTitle/index.vue'
import navigate from '@/components/navigate/index.vue'

</script>

<template>
    <div class="homePage_container">
        <headerTitle class="header"></headerTitle>
        <RouterView></RouterView>
        <navigate class="navigate"></navigate>
    </div>
</template>

<style lang='scss' scoped>
.homePage_container {
    height: 100%;

    .navigate {
        position: absolute;
        top: calc(100% - 50px);
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>