import * as api from '@/api'
import * as types from './mutation-types'

export default {
  GetRingChartData ({
    commit
  }) {
    api.getRingChartData().then((data) => {
      commit(types.SET_RINGCHARTDATA, data)
    })
  },
  GetCityAreaAlarmData ({
    commit
  }) {
    api.getCityPowerData().then((data) => {
      commit(types.SET_CITYAREAALARMDATA, data)
    })
  },
  GetLineLossData ({
    commit
  }) {
    api.getLineLossData().then((data) => {
      commit(types.SET_LINELOSSDATA, data)
    })
  },
  GetLoadRateData ({
    commit
  }) {
    api.getLoadRateData().then(data => {
      commit(types.SET_LOADRATEDATA, data)
    })
  },
  GetElectricityAnalysisData ({
    commit
  }) {
    api.getElectricityAnalysisData().then(data => {
      commit(types.SET_ELECTRICITYANALYSISDATA, data)
    })
  },
  GetLoadAnalysisData ({
    commit
  }) {
    api.getLoadAnalysisData().then(data => {
      commit(types.SET_LOADANALYSISDATA, data)
    })
  },
  GetElectricityData ({
    commit
  }) {
    api.getElectricityData().then(data => {
      commit(types.SET_ELECTRICITYDATA, data)
    })
  },
  GetUsersPowerData ({
    commit
  }) {
    api.getUsersPowerData().then(data => {
      commit(types.SET_USERSPOWERDATA, data)
    })
  }
}
