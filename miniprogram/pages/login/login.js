// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:'',
    password:''
  },
  onInput(e){
    var val=e.target.dataset.val;//val=account或password
    this.setData({
      [val]:e.detail.value//输入框的值
    });
  },
  onLogin(){
    const {account,password}=this.data;
    //判断账户和密码是否为空
    if(!account||!password){
      wx.showToast({
        title: '账号和密码不能为空',
        icon:'none'
      });
      return;
    }
    //账号和密码不为空，再调用云函数登录
    wx.cloud.callFunction({
      name:'accountLogin',
      data:{
        account,
        password
      },
      success(res){
        console.log(res)
        if(res.result){
          wx.showToast({
            title: '登录成功',
            icon:'success'
          });
        }
        else{
          wx.showToast({
            title: '账号或密码错误',
            icon:'none'
          });
        }
      },
      fail(err){
        console.error('登录失败',err);
        wx.showToast({
          title: '登录失败',
          icon:'none'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})