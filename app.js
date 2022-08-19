App({
  //生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成')
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      },
    })
    // 抛出错误
    // setTimeout(()=>{
    //   const err = new Error()
    //   throw err
    // },3000)
  },

  /**小程序界面显示出来之后执行的生命周期函数
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    // 1.判断小程序进入的场景   
     console.log('界面显示出来： onshow',options)
     switch(options.scene){
       case 1001:
         console.log('我是场景1001');
         break;
        case 1006:
          console.log('我是场景1006');
          break;
        default:
          console.log('我是其他场景')
     }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当小程序发生错误的时候',msg)
  },
  gobalData: {
    name:'coderwhy',
    age:18
  }
})
