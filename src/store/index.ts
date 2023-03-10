import { computed, reactive, toRefs } from "vue";
import { defineStore } from 'pinia';

import imgUrl from '@/assets/category/pig.jpeg';
import { IgoodsDesc } from '@/utils/store'

const goodsItem = [
    {
        goods_id: '1', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '1111111111111111111111111111111111111',
        goods_desc: '13131213121312111111111111111111111', present_price: '1', origin_price: '666', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '2', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '2222222222222222222222',
        goods_desc: '13131213121312', present_price: '2', origin_price: '777', views: '0', kind: '2',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '3', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '3333333333333333333333',
        goods_desc: '13131213121312', present_price: '3', origin_price: '888', views: '0', kind: '3',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '4', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '4', origin_price: '999', views: '0', kind: '4',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '5', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '0', kind: '5',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '6', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '0', kind: '6',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '7', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '0', kind: '7',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '8', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '9', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '10', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '11', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '5', origin_price: '1010', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '12', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '4444444444444444444444',
        goods_desc: '13131213121312', present_price: '0', origin_price: '999', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },
    {
        goods_id: '13', imgUrl: imgUrl, swiper_img: [{ img: imgUrl }], goods_title: '555555555555555555555',
        goods_desc: '13131213121312', present_price: '0', origin_price: '1010', views: '0', kind: '1',
        pub_time: '', is_collect: '0',
    },

]

const arr = {
    replace: function <T>(list: T[], item: T, key: keyof T) {
        let index = list.findIndex(v => v[key] === item[key])
        if (index === -1) {
            list.push(item)
        } else {
            list.splice(index, 1, item)
        }
    }
}

export const useGoodsItemStore = defineStore('goods', () => {
    const state = reactive({
        goodsItem: goodsItem,//????????????
        collectGoodsList: [] as IgoodsDesc[],//????????????
        orderGoodsList: [] as IgoodsDesc[], //????????????

        searchVal: '',//??????
        searchRes: [] as IgoodsDesc[],//???????????????
    })

    // ????????????
    const hotGoodsList$ = computed(() => {
        return state.goodsItem.slice(0).sort(function (x, y) {
            return Number(y.views) - Number(x.views)
        });
    })
    // ????????????
    const freeGoods$ = computed(() => {
        return state.goodsItem.filter((v) => v.present_price === '0')
    })


    // ????????????
    function searchItem(Val: string): 0 | 1 | IgoodsDesc[] {
        let val = Val.trim()
        if (!val) return 0
        let arr = state.goodsItem.filter((v) => v.goods_title.indexOf(val) !== -1)
        if (arr.length === 0) return 1
        return arr
    }

    //??????????????????
    function goodsKind(kind: string) {
        return state.goodsItem.filter((v) => v.kind === kind)
    }

    // ????????????
    function newGoods(kind: string) {
        // ?????????????????????????????????api??????
        return state.goodsItem.filter((v) => v.kind === kind)
    }


    return {
        ...toRefs(state),
        freeGoods$,
        hotGoodsList$,
        searchItem,
        goodsKind,
        newGoods,
    }
})



const kindMenus = [
    {
        title: '????????????', kind: '1',
    },
    {
        title: '????????????', kind: '2',
    },
    {
        title: '????????????', kind: '3',
    },
    {
        title: '????????????', kind: '4',
    },
    {
        title: '????????????', kind: '5',
    },
    {
        title: '????????????', kind: '6',
    },
    {
        title: '??????', kind: '7',
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