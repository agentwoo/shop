<!-- 所有商品 -->
<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useMenusStore } from '@/store/index'
import HeaderTitle from '@/components/headerTitle/index.vue'

const menusStore = useMenusStore()
const router = useRouter()

const toGoodsKind = (kind: string) => {
    router.replace({
        name: 'goodsKind',
        params: { kind }
    })
}

</script>

<template>
    <div class="container">
        <div class="container_header">
            <HeaderTitle></HeaderTitle>
        </div>
        <div class="container_menus">
            <el-menu active-text-color="black" background-color="#E7DFDF"
                :default-active="router.currentRoute.value.path" text-color="black">
                <el-menu-item :index="item.kind" v-for="item in menusStore.menus" @click="toGoodsKind(item.kind)">
                    <span>{{ item.title }}</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="container_view">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.container {
    height: 100%;
    overflow-y: hidden;

    &_header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    &_menus {
        position: fixed;
        top: 50px;
        left: 0;
        bottom: 0;
        width: 70px;
        background-color: #E7DFDF;

        :deep(.el-menu-item) {
            margin-left: -14px;
            border-bottom: 1px solid white;
        }
    }

    &_view {
        width: calc(100% - 70px);
        margin-left: 70px;
    }
}
</style>