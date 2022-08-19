// pages/home/home.js
// getApp可以获取App产生的实例对象
const app = getApp()
const name = app.gobalData.name
const age = app.gobalData.age
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好',
    age:18,
    students:[
      {id:'001',name:'kobe',age:35},
      {id:'002',name:'coder1',age:45},
      {id:'003',name:'coder2',age:40}
    ],
    counter:2,
    list:[]
  },
  handleGetUserInfo(event){
    console.log(event)
  },
  handleBtnClick(){
    //1.错误做法：页面是不会刷新的
    // this.data.counter++;
    // console.log(this.data.counter)
    // 2.正确做法
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handSubClick(){
    this.setData({
      counter:this.data.counter - 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    const _this = this;
    wx.request({
      url:'http://152.136.185.210:7878/api/hy66/recommend',
      // url:'http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1',
      // success:(res)=>{
      //   console.log(res)
      //   const data = res.data.data.list
      //   this.setData({
      //     list: data
      //   })
      // }
      
      success:function(res){
        console.log(res)
        const data = res.data.data.list
        _this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新这里可以重新请求数据')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部')
  },
  /**
   *  页面滚动监听
   */
  onPageScroll(obj){
    console.log(obj)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})