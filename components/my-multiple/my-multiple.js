// components/my-multiple/my-multiple.js
Component({
  options:{
    multipleSlots:true,
    // styleIsolation:
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:'',
      observers: function(newVal,oldVal){
        console.log(newVal)
      }
  }
},
  /**
   * 组件的初始数据
   */
  data: {
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    foo(){

    }
  },

  /**
   *  监听变化data/properties
   */
  observers:{
    counter:function(newVal){
      console.log(newVal)
    }
  },

  /**
   * 外界给组件传入额外的样式
   */
  externalClasses:[

  ],
  /**
   * 监听组件/页面的生命周期
   */
  // 1.监听页面的生命周期
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来时')
    },
    hide(){
      console.log('监听组件所在页面隐藏起来时')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    }
  },
  // 2.监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log('组件被创建')
    },
    attached(){
      console.log('组件被添加到页面中')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    moved(){
      console.log('组件被移动到结点数的另一个位置')
    },
    detached(){
      console.log('组件被移除')
    }
  }
})
