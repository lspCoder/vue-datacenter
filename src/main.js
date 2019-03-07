import Vue from 'vue'
import Dashboard from './Dashboard.vue'
// import router from './router'
import store from './store'

import './assets/css/base.less'

import './components'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(Dashboard)
}).$mount('#app')
