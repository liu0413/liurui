
var list = {

  "List": [

          {

                  'A': [

                          { name: '品类1' },

                          { 'picture': '../../images/dish1.jpg', 'desc': 'item1' },

                          { 'picture': '../../images/dish2.jpg', 'desc': 'item2' },

                          { 'picture': '../../images/dish3.jpg', 'desc': 'item3' },

                          { 'picture': '../../images/dish4.jpg', 'desc': 'item4' }

                  ],

                  'B': [

                          { name: '品类1' },

                          { 'picture': '../../images/dish7.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish8.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish9.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish9.jpg', 'desc': '汾酒' }

                  ],

                  'C': [

                          { name: '品类2' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

                  'D': [

                          { name: '品类3' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

                  'E': [

                          { name: '品类4' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

                  'F': [

                          { name: '品类5' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

                  'G': [

                          { name: '品类6' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

                  'H': [

                          { name: '品类7' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '葡萄酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '洋酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' },

                          { 'picture': '../../images/dish1.jpg', 'desc': '汾酒' }

                  ],

          }

  ],
}
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
      { id: 1, name: '产品1', price: '100元', image: '../../images/dish1.jpg', category: '种类1' },
      { id: 2, name: '产品2', price: '200元', image: '../../images/dish2.jpg', category: '种类1' },
      { id: 3, name: '产品3', price: '300元', image: '../../images/dish3.jpg', category: '种类1' },
      { id: 4, name: '产品4', price: '300元', image: '../../images/dish4.jpg', category: '种类1' },
      { id: 5, name: '产品5', price: '300元', image: '../../images/dish5.jpg', category: '种类2' },
      { id: 6, name: '产品6', price: '300元', image: '../../images/dish6.jpg', category: '种类2' },
      
      { id: 7, name: '产品7', price: '300元', image: '../../images/dish7.jpg', category: '种类3' },
      { id: 8, name: '产品8', price: '300元', image: '../../images/dish8.jpg', category: '种类3' },
      { id: 9, name: '产品9', price: '300元', image: '../../images/dish9.jpg', category: '种类3' },
      { id: 10, name: '产品9', price: '300元', image: '../../images/dish9.jpg', category: '种类4' },
      { id: 11, name: '产品9', price: '300元', image: '../../images/dish9.jpg', category: '种类5' },
      { id: 12, name: '产品9', price: '300元', image: '../../images/dish9.jpg', category: '种类6' },
      { id: 13, name: '产品9', price: '300元', image: '../../images/dish9.jpg', category: '种类7' },

      // ...
    ]
  };
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 左侧点击类样式

    curNav: 'A',

    scrollTop: 0,

    // 定义一个空数组，用来存放右侧滑栏中每一个商品分类的 Height

    listHeight: ''

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

  onReady: function () {

              var that = this;

              // 定义右侧标题的 rpx 高度 和 px 高度

              var right_titleRpxHeight = 60;

              var right_titleHeight;

              // 定义右侧单个商品的 rpx 高度 和 px 高度

              var right_contentRpxHeight = 180;

              var right_contentHeight;

              // 定义左侧单个tab的 rpx 高度 和 px 高度

              var left_titleRpxHeight = 140;

              var left_titleHeight;

              //  获取可视区屏幕高度

              wx.getSystemInfo({

                      success: function (res) {

                              // percent 为当前设备1rpx对应的px值

                              var percent = res.windowWidth / 750;

                              that.setData({

                                      winHeight: res.windowHeight,

                                      right_titleHeight: Number(right_titleRpxHeight * percent),

                                      right_contentHeight: Number(right_contentRpxHeight * percent),

                                      left_titleHeight: Number(left_titleRpxHeight * percent)

                              })

                      }

              })

              // 把请求到的 list 中的数据赋值给  listChild1

              var listChild1 = list.List[0];

              // 定义一个 names ，用于存放 scroll-into-view 使用的 id

              var names = '';

              // 循环 listChild1 中的每一项

              for (var item in listChild1) {

                      // 把 listChild1 中每一项的键值用“：”（便于后期处理）分隔开，存入 names 中，数据格式见图‘names中的数据’

                      names += ":" + item;

                      // 计算右侧每一个分类的 Height 。

                      // listChild1 下的每一个 item 中包含该分类的 title，所以 listChild1[item].length 需要减一

                      // 右侧每一个分类中每一行放两个商品，所以 this.data.right_contentHeight 除二

                      // 最后加上 right_titleHeight，此时 height 为右侧一个完整分类的高度

                      var height = (listChild1[item].length - 1) * this.data.right_contentHeight / 2 + this.data.right_titleHeight;

                      // 同上面 names 的道理，把每一个 height 用“：”隔开放入 listHeight 中

                      this.data.listHeight += ":" + height;

                      this.setData({

                              // 把 listChild1 赋值给 list ，供 wxml 中循环使用

                              list: listChild1,

                              listHeight: this.data.listHeight

                      })

              }

              // 把 names 的数据切成数组

              var names = names.substring(1).split(':');

              this.setData({

                      names: names

              })

      },

        // 右侧滑栏的 bindscroll 事件函数（ES6写法）

  scroll(event) {

          // 把 listHeight 切割成数组

          var height = this.data.listHeight.substring(1).split(':');

          // 定义一个 index 供左侧边栏联动使用

          var index = 1;

          var num = 0;

          for (var i = 0; i < height.length; i++) {

                  // 累计右侧滑栏滚动上去的每一个分类的 Height

                  num += parseInt(height[i]);

                  // 循环判断 num 是否大于右侧滑栏滚动上去的 Height ，然后 get 到 i 值赋给 index

                  if (num > event.detail.scrollTop) {

                          index = i + 1;

                          // 如果右侧滑栏滚动高度小于单个类别高度的 1/2 时，index 为 0

                          if (event.detail.scrollTop < height[0] / 2) {

                                  index = 0;

                          }

                          break;

                  }

          }

          // 定义并设置左侧边栏的滚动高度

          var left_scrollTop = this.data.left_titleHeight * index

          this.setData({

                  scrollTop: left_scrollTop,

                  // 动态给左侧滑栏传递对应该项的 id，用于高亮效果显示

                  curNav: this.data.names[index]

          })

  },

        //点击左侧 tab ，右侧列表相应位置联动 置顶

  switchRightTab: function (e) {

          var id = e.target.id;

          this.setData({

                  scrollTopId: id,

                  // 左侧点击类样式

                  curNav: id,

          })

  }
})