// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['衣服','鞋子','裙子']
  },
  handleBtnClick(){
    console.log('按钮发生点击')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },
  handleEventClick(event){
    console.log('---',event)
  },
  handleEventEnd(event){
    console.log('+++',event)
  },
  handleInner(event){
    console.log('*****',event)
  },
  handleOuter(event){
    console.log('~~~~',event)
  },
  handleItemClick(event){
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index)
  },
  handleCaptureView1(){
    console.log('事件捕获1')
  },
  handleCaptureView2(){
    console.log('事件捕获2')
  },
  handleCaptureView3(){
    console.log('事件捕获3')
  },
  handleBindView1(){
    console.log('事件冒泡1')
  },
  handleBindView2(){
    console.log('事件冒泡2')
  },
  handleBindView3(){
    console.log('事件冒泡3')
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