import { debounce } from '@/utils'
export default {
  mounted() {
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
    // 监听侧边栏的变化重新绘制Echarts重绘
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.addEventListener('transitionend', this.__resizeHanlder)
  },
  beforeDestroy() {
    // 移除事件监听函数
    window.removeEventListener('resize', this.__resizeHanlder)
    const sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    sidebarElm.removeEventListener('transitionend', this.__resizeHanlder)
  }
}

