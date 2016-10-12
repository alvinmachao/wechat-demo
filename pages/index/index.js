Page({
  data:{
    listDisplay: false,
    songs: []
  },
  inputfn: function(e) {
    var searchContent = e.detail.value;
    if (searchContent) {
      this.setData({
        listDisplay: true
      })
    } else {
      this.setData({
        listDisplay: false
      })
    }
    
    var that = this;
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=' + searchContent,
      success: function(res) {
        that.setData({
          songs: res.data.song
        })
      }
    })
  },
  lryfn: function(e) {
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  }
})