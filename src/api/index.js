import {
  getRandom
} from '@/utils';

/* 获取模拟数据 */
export function getRingChartData () {
  let ringCharData = [{
    name: '累计用电量',
    value: 2500 + Math.floor(Math.random() * 100),
    unit: 'kw.h'
  },
  {
    name: '台区编号',
    value: 584000 + Math.floor(Math.random() * 1000),
    unit: ''
  },
  {
    name: '台区总数',
    value: 300 + Math.floor(Math.random() * 100),
    unit: ''
  },
  {
    name: '煤改电户数',
    value: Math.floor(Math.random() * 100),
    unit: ''
  }
  ]
  return new Promise(function (resolve, reject) {
    resolve(ringCharData)
  })
}

/* 获取区域告警数据 */
export function getCityPowerData () {
  var city = ['唐山市', '秦皇岛市', '承德市', '廊坊市', '张家口市'];
  var area = ['曙光小区一变', '曙光小区二变', '幸福小区二变', '保利小区一变', '锦绣小区一变'];
  var power = 2000 + Math.floor(Math.random() * 2000);
  var alarm;
  if (power < 2500) {
    alarm = '正常'
  } else if (power < 3500) {
    alarm = '中过载'
  } else {
    alarm = '重过载'
  }
  var cityAreaAlarmData = {
    'city': city[Math.floor(Math.random() * 5)],
    'area': area[Math.floor(Math.random() * 5)],
    'power': power,
    'alarm': alarm
  }
  return new Promise(function (resolve, reject) {
    resolve(cityAreaAlarmData)
  })
}

/* 获取线损率数据 */
export function getLineLossData () {
  let lineLossData = {
    '线损率': Math.floor(Math.random() * 100),
    '同比增长': Math.floor(Math.random() * 100)
  }
  return new Promise(function (resolve, reject) {
    resolve(lineLossData)
  })
}

/* 获取煤改电数据 */
export function getElectricityData () {
  let electricityData = [{
    name: '供电量',
    value: 2000 + Math.floor(Math.random() * 1000)
  },
  {
    name: '用电量',
    value: 6000 + Math.floor(Math.random() * 1000)
  },
  {
    name: '煤改电户用电',
    value: 200 + Math.floor(Math.random() * 100)
  }
  ]
  return new Promise(function (resolve, reject) {
    resolve(electricityData)
  })
}

/* 获取表格用户用电数据 */
export function getUsersPowerData () {
  var datas = []
  var total = getRandom(19, 24)
  for (var i = 1; i < total; i++) {
    var data = {
      id: i,
      name: '户A',
      power: getRandom(20, 25) + ' KW.h',
      time: getRandom(10, 11) + '/' + getRandom(10, 20) + ' ' + getRandom(10, 20) + ':' + getRandom(10, 59),
      mark: '改'
    }
    datas.push(data);
  }
  return new Promise(function (resolve, reject) {
    resolve({
      totalUsers: total,
      list: datas
    })
  })
}

export function getLoadRateData () {
  let loadRateData = {
    loadTate: {
      name: '负载率',
      value: Math.floor(Math.random() * 100)
    },
    state: {
      "key": ["轻载", "正常", "过载", "重载"],
      "value": [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
    }
  }
  return new Promise(function (resolve, reject) {
    resolve(loadRateData)
  })
}

/* 获取电量分析数据 */
export function getElectricityAnalysisData () {
  let electricityAnalysisData = {
    day: {
      date: ['1日', '2日', '3日', '4日', '5日', '6日', '7日', '8日', '9日', '10日', '11日', '12日', '13日', '14日', '15日', '16日', '17日', '18日', '19日', '20日', '21日', '22日', '23日', '24日', '25日', '26日', '27日', '28日', '29日', '30日', '31日'],
      data: {
        "总电量": [72, 71, 70, 62, 64, 66, 70, 72, 73, 71, 73, 76, 78, 73, 74, 70, 68, 65, 64, 66, 62, 67, 70, 72, 70, 67, 68, 65, 64, 62, 61],
        "谷电量": [12, 21, 30, 22, 24, 26, 30, 22, 23, 21, 23, 26, 38, 33, 34, 30, 28, 25, 34, 36, 32, 37, 30, 32, 20, 23, 28, 25, 24, 12, 21],
        "同比总电量": [52, 61, 50, 62, 54, 56, 60, 52, 63, 61, 63, 66, 68, 63, 64, 60, 58, 55, 54, 56, 52, 60, 60, 62, 60, 61, 62, 55, 54, 52, 54],
        "同比谷电量": [16, 26, 36, 24, 28, 36, 32, 32, 33, 28, 23, 21, 28, 30, 24, 30, 24, 25, 32, 26, 22, 27, 30, 35, 28, 26, 28, 23, 28, 18, 24]
      }
    },
    month: {
      date: ['10月', '11月', '12月', '1月', '2月', "3月"],
      data: {
        "总电量": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)],
        "谷电量": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)],
        "同比总电量": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)],
        "同比谷电量": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)]
      }
    }
  }
  return new Promise(function (resolve, reject) {
    resolve(electricityAnalysisData)
  })
}

export function getLoadAnalysisData () {
  var loadAnalysisData = {
    loadAnalysis: {
      time: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      data: {
        "负载率": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)],
        "同比负载率": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)]
      }
    },
    powerAnalysis: {
      time: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
      data: {
        "负载率": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)],
        "同比负载率": [getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100), getRandom(10, 100)]
      }
    }
  }
  return new Promise(function (resolve, reject) {
    resolve(loadAnalysisData)
  })
}
