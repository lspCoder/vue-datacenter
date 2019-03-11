<template>
  <div class="content">
    <Title :iconUrl="img" text="负荷分析"/>
    <div id="powerAnalysis"></div>
  </div>
</template>

<script>
import Title from '../Title'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'

export default {
  name: 'Center1',
  components: {
    Title
  },
  data () {
    return {
      img: img
    }
  },
  mounted () {
    this.drawLineChart()
  },
  methods: {
    drawLineChart () {
      let myChart = this.$echarts.init(document.getElementById('powerAnalysis'));
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 160,
          top: 118,
          right: 30,
          bottom: 78
        },
        legend: {
          textStyle: {
            fontFamily: 'SourceHanSansCN-Normal',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#fff'
          },
          right: this._data._class === "electricityAnalysis" ? 28 : 27,
          top: this._data._class === "electricityAnalysis" ? 75 : 100,
          padding: 0,
          itemGap: 32
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          data: ['10月', '11月', '12月', '1月', '2月', "3月"],
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
              width: 2
            }
          },
          // 控制块级显示还是点级显示
          boundaryGap: false,
          axisLabel: {
            show: true,
            margin: 12,
            textStyle: {
              color: "rgba(255,255,255,0.6)",
              fontSize: 16
            }
          }
        }],
        yAxis: [{
          type: 'value',
          // 标签
          axisLabel: {
            show: true,
            margin: 15,
            formatter: function (value) {
              return value;
            },
            textStyle: {
              color: "rgba(255,255,255,0.6)",
              fontSize: 16
            }
          },
          // 分割线
          splitLine: {
            show: true,
            lineStyle: {
              "color": [
                "rgba(255,255,255,0.2)"
              ],
              "width": 1,
              "type": "solid"
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.2)",
              width: 2
            }
          },
          // 坐标轴小标记
          axisTick: {
            show: false
          }
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

