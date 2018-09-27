import wx from './wx'
//请求封装
function request(url, data, method='GET', header = {}) {
  wx.showLoading({
    title: '加载中' //数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading();
        resolve(res.data)
      },
      fail: function (error) {
        wx.hideLoading();
        reject(false)
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  })
}

export default request
