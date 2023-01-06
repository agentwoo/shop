import { computed, reactive, toRefs } from "vue";
import { defineStore } from 'pinia';

import imgUrl from '@/assets/category/pig.jpeg';
import { IgoodsDesc } from '@/utils/store'

const goodsItem = computed(() => {
    return [
        {
            goods_id: '1', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '1111111111111111111111',
            present_price: '1', origin_price: '666', views: '123', kind: '1', pub_time: '',
        },
        {
            goods_id: '2', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '2222222222222222222222',
            present_price: '2', origin_price: '777', views: '123', kind: '2', pub_time: '',
        },
        {
            goods_id: '3', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '3333333333333333333333',
            present_price: '3', origin_price: '888', views: '123', kind: '3', pub_time: '',
        },
        {
            goods_id: '4', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
            present_price: '4', origin_price: '999', views: '123', kind: '4', pub_time: '',
        },
        {
            goods_id: '5', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
            present_price: '5', origin_price: '1010', views: '123', kind: '5', pub_time: '',
        },
    ]
})

export const useGoodsItemStore = defineStore('goods', () => {
    const state = reactive({
        goodsItem: goodsItem,
        searchVal: '',
        searchRes: [] as IgoodsDesc[],
    })

    // 查找事项
    function searchItem(Val: string): 0 | 1 | IgoodsDesc[] {
        let val = Val.trim()
        if (!val) return 0
        let arr = state.goodsItem.filter((v) => v.goods_title.indexOf(val) !== -1)
        if (arr.length === 0) return 1
        return arr
    }

    return {
        ...toRefs(state),
        searchItem,
    }
})