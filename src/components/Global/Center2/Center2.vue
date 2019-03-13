<template>
  <div class="content">
    <Title :iconUrl="img" text="电量分析"/>
    <Button-Group :left="80" :text="['月电量', '日电量']" :top="50"></Button-Group>
    <div id="electricityAnalysis"></div>
  </div>
</template>

<script>
/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'
import type1 from '@/assets/img/type1.png'
import type2 from '@/assets/img/type2.png'
import type3 from '@/assets/img/type3.png'
import type4 from '@/assets/img/type4.png'

export default {
  name: 'Center2',
  data () {
    return {
      img: img,
      lineColorMap: {
        "总电量": "#ffae00",
        "谷电量": "#00Ff66",
        "同比总电量": "#00ffff",
        "同比谷电量": "#00aaff"
      },
      iconMap: {
        "总电量": type1,
        "谷电量": type2,
        "同比总电量": type3,
        "同比谷电量": type4
      }
    }
  },
  mounted () {
    this.drawLineChart()
  },
  methods: {
    drawLineChart () {
      let myChart = this.$echarts.init(document.getElementById('electricityAnalysis'));
      window.myChart = myChart;
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: 90,
          top: 80,
          bottom: 30,
          right: 28
        },
        legend: {
          textStyle: {
            fontFamily: 'SourceHanSansCN-Normal',
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#fff'
          },
          right: 28,
          top: 50,
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
              return value + '万kw.h';
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
      let data = {
        "总电量": [72, 70, 62, 72, 70, 61],
        "谷电量": [15, 28, 12, 14, 22, 26],
        "同比总电量": [54, 62, 50, 71, 62, 54],
        "同比谷电量": [21, 33, 26, 34, 32, 24]
      }
      option.series = this._createSeries(data);
      option.legend.data = this._createLegendData(data);
      myChart.setOption(option)
    },
    _createSeries: function (data) {
      var series = [];
      for (var key in data) {
        var item = {
          name: key,
          type: 'line',
          smooth: true,
          symbolSize: 8,
          showSymbol: false,
          data: data[key],
          itemStyle: {
            normal: {
              lineStyle: {
                color: this.lineColorMap[key],
                type: 'solid',
                width: 2,
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              }
            }
          }
        }
        series.push(item);
      }
      return series;
    },
    _createLegendData: function (data) {
      var arr = [];
      for (var key in data) {
        arr.push({
          name: key,
          icon: 'image://' + this.iconMap[key]
        })
      }
      return arr;
    }
  }
}
</script>

<style lang="less" scoped>
#electricityAnalysis {
  width: 780px;
  height: 400px;
  margin: 0 auto;
}
</style>

