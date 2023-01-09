<!-- 首页 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import headerTitle from '@/components/headerTitle/index.vue'
import navigate from '@/components/navigate/index.vue'

</script>

<template>
    <div class="homePage_container">
        <div class="homePage_container_header">
            <headerTitle></headerTitle>
        </div>
        <div class="homePage_container_routerView">
            <RouterView></RouterView>
        </div>
        <div class="homePage_container_navigate">
            <navigate></navigate>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.homePage_container {
    height: 100%;
    overflow: hidden;

    &_header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    &_routerView {
        margin-top: 50px;
        padding-bottom: 50px;
    }

    &_navigate {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
}
</style>