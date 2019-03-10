import { getRandom } from '@/utils';

/* 获取模拟数据 */
export function getRingChartData () {
  let ringCharData = [
    {
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

export function getElectricityData () {
  let electricityData = [
    {
      name: '供电量',
      value: 2000 + Math.floor(Math.random() * 1000) + 'KW.h'
    },
    {
      name: '用电量',
      value: 6000 + Math.floor(Math.random() * 1000) + 'KW.h'
    },
    {
      name: '煤改电户用电',
      value: 200 + Math.floor(Math.random() * 100) + 'KW.h'
    }
  ]
  return new Promise(function (resolve, reject) {
    resolve(electricityData)
  })
}

export function getTableData () {
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
