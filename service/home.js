import request from './network.js'

// 1.获取轮播图数据和推荐数据
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}

// 2.获取商品数据
export function getGoodsInfo(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}
