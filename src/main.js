import Vue from 'vue'
import Dashboard from './Dashboard.vue'
// import router from './router'
// import store from './store'

import './assets/css/base.less'

/* 引入全局组件 */
import './components'

/* 引入echarts */
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(Dashboard)
}).$mount('#app')
