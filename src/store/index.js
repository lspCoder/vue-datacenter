import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    ringChartData: {}, // left1面板概述数据
    cityAreaAlarmData: {}, //  left2城市告警电量数据
    lineLossData: {}, //  left3线损率数据
    loadRateData: {}, //  left4负载率数据
    electricityAnalysisData: {}, //  center1电量分析数据
    loadAnalysisData: {}, //  center2负荷分析数据
    electricityData: {}, //  right1供电量数据
    usersPowerData: {} // right2用户煤改电数据
  },
  actions,
  mutations,
  plugins: debug ? [createLogger()] : []
})
