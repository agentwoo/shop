// 商品页详情相关配置
export interface IgoodsDesc {
    goods_id: string;
    imgUrl: string;
    swiper_img: {
        img: string;
    }[];
    goods_title: string;
    present_price: string;
    origin_price: string;
    views: string;
    kind: string;
    pub_time: string;
}