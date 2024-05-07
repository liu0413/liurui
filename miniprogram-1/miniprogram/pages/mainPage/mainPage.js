const data = {
    // 广告栏数据
    swiperList: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      // ...
    ],
    // 种类菜单栏数据
    menuList: [
      { id: 1, name: '种类1' },
      { id: 2, name: '种类2' },
      { id: 3, name: '种类3' },
      { id: 4, name: '种类4' },
      { id: 5, name: '种类5' },
      { id: 6, name: '种类6' },
      { id: 7, name: '种类7' },
      // ...
    ],
    // 产品列表数据
    productList: [
      { id: 1, name: '产品1', price: '100元', image: 'https://example.com/product1.jpg', category: '种类1' },
      { id: 2, name: '产品2', price: '200元', image: 'https://example.com/product2.jpg', category: '种类1' },
      { id: 3, name: '产品3', price: '300元', image: 'https://example.com/product3.jpg', category: '种类1' },
      { id: 4, name: '产品4', price: '300元', image: 'https://example.com/product3.jpg', category: '种类1' },
      { id: 5, name: '产品5', price: '300元', image: 'https://example.com/product3.jpg', category: '种类2' },
      { id: 6, name: '产品6', price: '300元', image: 'https://example.com/product3.jpg', category: '种类2' },
      { id: 7, name: '产品7', price: '300元', image: 'https://example.com/product3.jpg', category: '种类3' },
      { id: 8, name: '产品8', price: '300元', image: 'https://example.com/product3.jpg', category: '种类3' },
      { id: 9, name: '产品9', price: '300元', image: 'https://example.com/product3.jpg', category: '种类3' },

      // ...
    ]
  };
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
        swiperList: data.swiperList,
        menuList: data.menuList,
        productList: data.productList
    });
  },
  scrollToProduct(e) {
    const { index } = e.currentTarget.dataset;
    const category = this.data.menuList[index].name;
    const firstProduct = this.data.productList.find(item => item.category === category);
    if (firstProduct) {
      wx.createSelectorQuery().select(`.product-item[data-index="${firstProduct.id - 1}"]`).boundingClientRect(res => {
        wx.pageScrollTo({
          scrollTop: res.top,
          duration: 300
        });
      }).exec();
    }
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