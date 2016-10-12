Page({
  data:{
    text: "",
    hidden: false
  },
  onLoad:function(options){
    var that = this
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=' + options.id,
      success: function(res) {
        setTimeout(function(){
          that.setData({
            hidden: true,
            text: res.data.lrcContent
          })
        }, 2000)  //模拟网速不好的情况进行loading
      }
    })
  }
})