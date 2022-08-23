// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0,
    isShow:true
  },
  clickChangeShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  handleIncrement(event){
    this.setData({
      counter:this.data.counter + 1
    })
    // console.log(event.detail.name,event.detail.age)
  },
  handleTabClick(event){
    console.log(event)
  },
  handleIncrementCpn(){
    // 作用：修改my-sel中的counter

    // 1.获取组件对象
    const sel = this.selectComponent('#sel-id');
    console.log(sel)
    // 2.修改组件对象里面的setData
    // sel.setData({
    //   counter:sel.data.counter + 1
    // })
    // 3.通过方法进行修改
    sel.incrementCounter(10)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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