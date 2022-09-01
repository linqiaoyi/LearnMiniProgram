// pages/detail/detail.js
const TOP_DISTANCE = 1000;
import {
  getDetail,
  GoodsBaseInfo,
  getRecommends,
  ShopInfo,
  ParamInfo
}
from '../../service/detail.js'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:{
      type:String,
      value:''
    },
    imageList:{
      type:Array,
      value:[]
    },
    baseInfo:{
      type:Object,
      value:{}
    },
    shopInfo:{
      type:Object,
      value:{}
    },
    detailInfo:{
      type:Object,
      value:{}  
    },
    paramInfo:{
      type:Object,
      value:{} 
    },
    commentInfo:{
      type:Array,
      value:[]
    },
    recommends:{
      type:Array,
      value:[]
    },
    showBackTop:false
  },
  showIid(event){
    console.log(event)
  },
  onAddCart(){
    // 1. 获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageUrl = this.data.imageList[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;

    // 2.加入到购物车列表
    app.addToCart(obj)

    // 3.加入成功提示
    wx.showToast({
      title:'加入购物车成功'
    })
  },
  /**
   * 页面监听
   */
  onPageScroll(options){
    const scrollTop = options.scrollTop;
    const flag = scrollTop >= TOP_DISTANCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: flag
      }) 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.获取传入的iid
    this.setData({
      iid:options.iid
    })

    // 2.请求商品详情数据
    this._getDetailData()

    // 3.请求推荐的数据
    this._getRecommends()

  },

  /**
   * 网络请求相关函数
   */
  _getDetailData(){
    getDetail(this.data.iid).then(res =>{
      console.log(res.result)
      const data = res.result;
      
      // 1.取出顶部的照片
        const imageList = data.itemInfo.topImages
      
      // 2.创建BaseInfo对象
        const baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services)

      // 3.创建shopInfo对象
        const shopInfo = new ShopInfo(data.shopInfo)

      // 4.创建detailInfo对象
        const detailInfo = data.detailInfo

      // 5.创建paramInfo对象
        const paramInfo = new ParamInfo(data.itemParams.info,data.itemParams.rule) 

      // 6.创建commentInfo对象
        const commentInfo = data.rate.list

        
      // 修改data中的数据
        this.setData({
          imageList,
          baseInfo,
          shopInfo,
          detailInfo,
          paramInfo,
          commentInfo
        })
    })
  },

  _getRecommends(){
    getRecommends().then(res => {
      this.setData({
        recommends: res.data.list
      })
      console.log(res.data.list)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})