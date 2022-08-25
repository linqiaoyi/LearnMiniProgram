// pages/home/home.js
import {
  getMultiData,
  getGoodsInfo
} from '../../service/home.js'

const types = ['pop','new','sell'];
const TOP_DISTANCE = 1000;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banner:{
      type:Array,
      value:[]
    },
    recommend:{
      type:Array,
      value:[]
    },
    titles:['流行','新款','精选'],
    goods: {
      'pop': {page: 0, list: []},
      'new': {page: 0, list: []},
      'sell': {page: 0, list: []}
    },
    currentType:'pop',
    showBackTop:false,
    isFixed:false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.请求轮播图和推荐数据
    getMultiData()
    .then(res => {
    // 2.取出轮播图和推荐的数据
    const banner = res.data.data.banner.list
    const recommend = res.data.data.recommend.list
    // 3.放到data中
      this.setData({
        banner,
        recommend
      })
    })
    .catch(err => {
      console.log(err)
    })
    // 2.获取商品数据
    this._getGoodsInfo('pop')
    this._getGoodsInfo('new')
    this._getGoodsInfo('sell')
  },
  // 网络请求函数
  _getGoodsInfo(type){
    // 1.获取页码
    const page = this.data.goods[type].page + 1;

    // 2.发送网络请求
    getGoodsInfo(type,page)
    .then(res =>{
      // 2.1取出数据
      const list = res.data.data.list;

      // 2.2将数据设置到对应的type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      
      // 2.3将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`
      this.setData({ 
        [typeKey]: oldList,
        [pageKey]: page
      })
    })
  },
  // 2.监听tabControl正在点击index
  handleTabControl(event){
    // 2.1取出index
    const index = event.detail.index;
    // 2.2设置currentType
    const type = types[index]
    // console.log(this.data.currentTabIndex) 
    this.setData({
      currentType:type
    })
    
},
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  onShow(){
  },

  onReachBottom(){
    this._getGoodsInfo(this.data.currentType);
  },

  onPageScroll(options){
    // console.log(options)
    // 1.取出scrollTop
    const scrollTop = options.scrollTop;
    console.log(scrollTop)
    // 2.修改showBackTop属性
    // 官方：不要在滚动的函数回调中频繁的调用this.setData
    const flag = scrollTop >= TOP_DISTANCE;
    if(flag != this.data.showBackTop){
      this.setData({
        showBackTop: flag
      }) 
    }
    // 3.改tabcontrol的样式
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if(flag2 != this.data.isFixed){
      this.setData({
        isFixed: flag2
      }) 
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})