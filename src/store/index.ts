import { computed, reactive, toRefs } from "vue";
import { defineStore } from 'pinia';

import imgUrl from '@/assets/category/pig.jpeg';
import { IgoodsDesc } from '@/utils/store'

const goodsItem = [
    {
        goods_id: '1', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '1111111111111111111111111111111111111',
        goods_desc: '13131213121312111111111111111111111', present_price: '1', origin_price: '666', views: '123', kind: '1',
        pub_time: '', is_collect: '1',
    },
    {
        goods_id: '2', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '2222222222222222222222',
        goods_desc: '13131213121312', present_price: '2', origin_price: '777', views: '123', kind: '2',
        pub_time: '', is_collect: '1',
    },
    {
        goods_id: '3', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '3333333333333333333333',
        goods_desc: '13131213121312', present_price: '3', origin_price: '888', views: '123', kind: '3',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '4', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '4', origin_price: '999', views: '123', kind: '4',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '5', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '123', kind: '5',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '6', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '123', kind: '6',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '7', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '123', kind: '7',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '8', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '9', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '10', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '11', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '12', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '13', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '123', kind: '1',
        pub_time: '', is_collect: '0',
    },

]

export const useGoodsItemStore = defineStore('goods', () => {
    const state = reactive({
        goodsItem: goodsItem,
        searchVal: '',
        searchRes: [] as IgoodsDesc[],
    })
    // 免费商品
    const freeGoods$ = computed(() => {
        return state.goodsItem.filter((v) => v.present_price === '0')
    })

    // 收藏列表
    const collectGoodsList$ = computed(() => {
        return state.goodsItem.filter((v) => v.is_collect === '1')
    })

    // 查找事项
    function searchItem(Val: string): 0 | 1 | IgoodsDesc[] {
        let val = Val.trim()
        if (!val) return 0
        let arr = state.goodsItem.filter((v) => v.goods_title.indexOf(val) !== -1)
        if (arr.length === 0) return 1
        return arr
    }

    //商品详情分类
    function goodsKind(kind: string) {
        return state.goodsItem.filter((v) => v.kind === kind)
    }

    // 最新商品
    function newGoods(kind: string) {
        // 接收后端经过时间排序的api数据
        return state.goodsItem.filter((v) => v.kind === kind)
    }

    // 热门商品
    function hotGoods(kind: string) {
        // 接收后端经过浏览量的api数据
        return state.goodsItem.filter((v) => v.kind === kind)
    }

    return {
        ...toRefs(state),
        freeGoods$,
        collectGoodsList$,
        searchItem,
        goodsKind,
        newGoods,
        hotGoods,
    }
})



const kindMenus = [
    {
        title: '学习用品', kind: '1',
    },
    {
        title: '生活用品', kind: '2',
    },
    {
        title: '衣服鞋帽', kind: '3',
    },
    {
        title: '运动健身', kind: '4',
    },
    {
        title: '电子产品', kind: '5',
    },
    {
        title: '零食饮料', kind: '6',
    },
    {
        title: '其它', kind: '7',
    },
]
export const useMenusStore = defineStore('menus', () => {
    const state = reactive({
        menus: kindMenus,
    })

    return {
        ...toRefs(state)
    }
})



const user = {
    user_id: '1',
    username: 'zhangsan',
    password: '123456',
    user_head_img: 'https://imgsa.baidu.com/forum/pic/item/fb530f3b5bb5c9ea472928e4d839b6003bf3b323.jpg',
    nickname: 'helloWorld',
    is_admin: '0'
}
export const useUserStore = defineStore('user', () => {
    const state = reactive({
        user: user
    })

    return {
        ...toRefs(state)
    }
})