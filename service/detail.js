import request from './network.js'

// 1.获取详情页数据
export function getDetail(iid){
  return request({
    url:'/detail',
    data:{
      iid
    }
  })
}

//获取商品基本信息
export class GoodsBaseInfo{
  constructor(itemInfo,columns,services){
    this.discountDesc = itemInfo.discountDesc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.desc = itemInfo.desc
    this.title = itemInfo.title
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

//获取商品评论
export function getRecommends(){
  return request({
    url:'/recommend'
  })
}

//获取店铺信息
export class ShopInfo{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.fans = shopInfo.cFans,
    this.sells = shopInfo.cSells,
    this.score = shopInfo.score,
    this.goodsCount = shopInfo.cGoods
  
  }
}

//获取商品参数信息
export class ParamInfo{
  constructor(info,rule){
    this.image = info.image ? info.image: '',
    this.infos = info.set,
    this.size = rule.tables
  }
}