// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
}
from '../../service/category'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories:{
      type:Array,
      value:[]
    },
    categoryData:{
      type:Object,
      value:{}
    },
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory(){
    getCategory().then(res =>{
      // 1.获取categories
      const categories = res.data.category.list;
      
      // 2.初始化每个类别的子数据
      const categoryData = {}
      for(let i=0;i<categories.length;i++){
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      } 

      // 3.修改data中的数据
      this.setData({
        categories:res.data.category.list,
        categoryData:categoryData
      })
      console.log(res.data.category.list)
      // 4.请求第一个类别的数据
      this._getSubcategory(0)
      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(0)
    })
  },
  _getSubcategory(currentIndex){

    // 1.获取对应的maitKey
    const maitKey = this.data.categories[currentIndex].maitKey;

    // 2.请求的数据
    getSubcategory(maitKey).then(res => {
      const temp = this.data.categoryData;
      temp[currentIndex].subcategories = res.data.list;
      this.setData({
        categoryData: temp
      })
      console.log(res)
    })
  },
  _getCategoryDetail(currentIndex){
    // 1.获取对应的miniWallkey
    const miniWallkey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求该类别的详情数据
    this._getRealCategoryDetail(currentIndex,miniWallkey,'pop');
    // this._getRealCategoryDetail(currentIndex,miniWallkey,'sell');
    // this._getRealCategoryDetail(currentIndex,miniWallkey,'new');
  },
  _getRealCategoryDetail(index,miniWallkey,type){
    getCategoryDetail(miniWallkey,type).then(res=>{
      // 1.获取categoryData
      const categoryData = this.data.categoryData;

      // 2.修改数据
      categoryData[index].categoryDetail = res
      console.log(res)
      // 3.修改data中的数据
      this.setData({
        categoryData:categoryData
      })
    })
  },
   menuClick(e){
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    //请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex);
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