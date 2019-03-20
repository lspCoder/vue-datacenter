import * as types from './mutation-types'

export default {
  [types.SET_RINGCHARTDATA] (state, ringChartData) {
    state.ringChartData = ringChartData
  },
  [types.SET_CITYAREAALARMDATA] (state, cityAreaAlarmData) {
    state.cityAreaAlarmData = cityAreaAlarmData
  },
  [types.SET_LINELOSSDATA] (state, lineLossData) {
    state.lineLossData = lineLossData
  },
  [types.SET_LOADRATEDATA] (state, loadRateData) {
    state.loadRateData = loadRateData
  },
  [types.SET_ELECTRICITYANALYSISDATA] (state, electricityAnalysisData) {
    state.electricityAnalysisData = electricityAnalysisData
  },
  [types.SET_LOADANALYSISDATA] (state, loadAnalysisData) {
    state.loadAnalysisData = loadAnalysisData
  },
  [types.SET_ELECTRICITYDATA] (state, electricityData) {
    state.electricityData = electricityData
  },
  [types.SET_USERSPOWERDATA] (state, usersPowerData) {
    state.usersPowerData = usersPowerData
  }
}
