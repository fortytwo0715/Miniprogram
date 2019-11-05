// pages/stories/stories.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    title: 'Huh?',
    stories: [],
  },

  changeTitle() {
    this.setData({
      title: 'Indeed'
    })

    wx.setStorageSync('story-title', 'Indeed')

    wx.showToast({
      title: 'Wow',
      icon: 'success'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  /** Below sets data for title from browser cache, otherwise display 'Huh?'
   */
    this.setData({
    title: wx.getStorageSync('story-title') || 'Huh?'
    })

  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    /** Below gets data from app global data for 'stories' */
    this.setData({
      stories: app.globalData.stories
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})