export default function request(options){
  return new Promise((resolve,reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data:options.data || {},
      // success:function(res){
      //   resolve(res)
      //}
      success:resolve,
      // fail:function(err){
      //   reject(err)
      // }
      fail:reject
    })
  })
  
  

}

