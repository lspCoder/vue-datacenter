<template>
  <div class="left1">
    <Title :iconUrl="img" text="概述" />
    <div class="content">
      <chart :autoResize="true" :option="option" id="ringChart" />
      <div class="legend">
        <ul>
          <li :key="data.name" style="margin-bottom: 5px" v-for="(data) in ringChartData">
            <img :src="iconMap[data.name]" alt />
            <div class="text">
              <p class="name">{{data.name}}</p>
              <countTo
                :autoplay="true"
                :duration="3000"
                :endVal="data.value"
                :startVal="0"
                class="value"
              ></countTo>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import chart from '@/components/chart'
import countTo from 'vue-count-to'

import Title from '../Title'

import { getRingChartData } from '@/api'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'
import power from '@/assets/img/power.png'
import area from '@/assets/img/area.png'
import hushu from '@/assets/img/hushu.png'

export default {
  name: 'Left1',
  components: {
    Title,
    chart,
    countTo
  },
  data () {
    return {
      img: img,
      iconMap: {
        '累计用电量': power,
        '台区编号': area,
        '台区总数': area,
        '煤改电户数': hushu
      },
      ringChartData: {},
      option: {}
    }
  },
  created () {
    this._initData();
    this.initChartOption();
    setInterval(() => {
      this._refreshData();
    }, 20000);
  },
  methods: {
    initChartOption: function () {
      let placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      };
      this.option = {
        "title": {
          "text": "0%",
          "textStyle": {
            color: '#ffae00',
            fontFamily: 'Pirulen',
            fontSize: 25,
            fontWeight: 'normal',
            align: 'right'
          },
          itemGap: 0,
          "subtext": "煤改电占比",
          "subtextStyle": {
            color: '#ffffff',
            fontFamily: 'SourceHanSansCN-Normal',
            fontSize: 15,
            fontWeight: 'normal',
            align: 'right'
          },
          "x": "center",
          "y": "center"
        },
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          hoverAnimation: false,
          radius: [60, 62],
          center: ['50%', '55%'],
          itemStyle: {
            normal: {
              color: 'rgba(197,197,197,0.4)'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          avoidLabelOverlap: false,
          data: [{
            value: 1
          }]
        },
        {
          name: '煤改电占比',
          type: 'pie',
          radius: [58, 60],
          center: ['50%', '55%'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: this.num,
            itemStyle: {
              normal: {
                borderWidth: 4,
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: '#0084ff'
                }, {
                  offset: 1,
                  color: '#5bffff'
                }]),
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: '#0084ff'
                }, {
                  offset: 1,
                  color: '#5bffff'
                }])
              }
            }
          },
          {
            value: this.totalNum - this.num,
            itemStyle: placeHolderStyle
          }]
        }]
      }
    },
    _initData () {
      getRingChartData().then((data) => {
        this.ringChartData = data;
        let [, , totalNum, num] = data;
        this.option.title.text = Math.floor(num.value / totalNum.value * 100) + '%';
        this.option.series[1].data[0].value = num.value;
        this.option.series[1].data[1].value = totalNum.value - num.value;
      })
    },
    _refreshData: function () {
      this._initData()
    }
  }
}
</script>

<style lang="less" scoped>
.left1 {
  height: 100%;
}
.content {
  display: flex;
  justify-content: center;
}
#ringChart {
  width: 155px;
  height: 155px;
  display: inline-block;
  background: url('../../../assets/img/ringChart.png') no-repeat 50% 70%;
}
.legend {
  display: inline-block;
}
.text {
  display: inline-block;
  margin-left: 15px;
}
.name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
}
.value {
  display: inline-block;
  color: rgb(91, 255, 255);
  font-size: 16px;
  font-family: Pirulen;
  min-width: 120px;
}
.unit {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-family: SourceHanSansCN-Normal;
}
</style>


