// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'我是默认的标题',
      observer:function(newVal,oldVal){
        console.log(newVal,oldVal)
      }
    },
    content:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  externalClasses:['titleclass'],
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
