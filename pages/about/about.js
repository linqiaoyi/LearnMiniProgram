// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好，小程序',
    firstname:'kobe',
    lastname:'bryant',
    age:20,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score:58,
    students:[
      {id:'001',name:'张三',age:18},
      {id:'002',name:'李四',age:23},
      {id:'003',name:'王五',age:25}
    ],
    movies:['盗梦空间','金陵十三钗','最好的我们'],
    nums:[
      [10,12,13,16],
      [1,2,3,4],
      [7,8,9,10]
    ],
    letters:['a','b','c']
  },
  handleChangeColor(){
    this.setData({
      isActive : !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 10
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
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