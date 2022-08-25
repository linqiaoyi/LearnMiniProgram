// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad(){
      if(!this.data.isLoad){
        this.triggerEvent('imageLoad')
        // 这样改页面不会刷新，没有用setData
        this.data.isLoad = true
        console.log('图片加载完成')
      }
    }
  }
})
