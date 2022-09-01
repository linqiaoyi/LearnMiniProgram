// pages/cart/childCpns/w-cart-item/w-cart-item.js
const app = getApp() 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type:Object,
      value:{}
    }, 
    cindex:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckClick(e){
      //查找到对应的商品
      const goods = app.globalData.cartList.find(item => item.iid == this.properties.goods.iid)
      goods.checked = !goods.checked
      // console.log('e',e)
      //获取当前商品的index
      const index = e.currentTarget.dataset.index;
      app.changeGoodsState(index,goods)
      
    }
  }
})
