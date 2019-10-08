<template>
  <div class="content">
    <Title :iconUrl="img" text="负荷分析" />
    <Button-Group :left="80" :textArr="['负荷分析', '负载分析']" :top="50" v-on:select="changeData"></Button-Group>
    <chart :autoResize="true" :option="option" height="400px" id="powerAnalysis" width="780px" />
  </div>
</template>

<script>
import echarts from 'echarts'
import chart from '@/components/chart'

import { getLoadAnalysisData } from '@/api'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'
import type3 from '@/assets/img/type3.png'
import type4 from '@/assets/img/type4.png'

export default {
  name: 'Center1',
  components: {
    chart
  },
  data () {
    return {
      img: img,
      lineColorMap: {
        "负载率": "#00ffff",
        "同比负载率": "#00aaff"
      },
      iconMap: {
        "负载率": type3,
        "同比负载率": type4
      },
      areaStyle: {
        "负载率": {
          fromColor: "rgba(0, 255, 228, 0.6)",
          toColor: "rgba(0, 255, 228, 0.1)"
        },
        "同比负载率": {
          fromColor: "rgba(0, 170, 255, 0.6)",
          toColor: "rgba(0, 170, 255, 0.1)"
        }
      },
      option: {},
      currentData: 'loadAnalysis'
    }
  },
  mounted () {
    this._initData();
    this.initChartOption();
    setInterval(() => {
      this._refreshData();
    }, 5000);
  },
  methods: {
    changeData (data) {
      var map = {
        '负荷分析': 'loadAnalysis',
        '负载分析': 'powerAnalysis'
      }
      this.currentData = map[data];
      this.getData(this.currentData)
    },
    _initData () {
      this.getData(this.currentData)
    },
    getData (type) {
      getLoadAnalysisData().then((data) => {
        this._createSeries(data[type].data);
        this._createLegendData(data[type].data);
        this.option.xAxis[0].data = data[type].time;
      })
    },
    _refreshData () {
      this.getData(this.currentData)
    },
    initChartOption () {
      this.option = {
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
          itemGap: 32,
          data: []
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          // data: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "24:00"],
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
        }],
        series: []
      }
    },
    _createSeries: function (data) {
      this.option.series = [];
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
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [{
                offset: 0,
                color: this.areaStyle[key].fromColor
              },
              {
                offset: 1,
                color: this.areaStyle[key].toColor
              }])
          }
        }
        this.option.series.push(item);
      }
    },
    _createLegendData: function (data) {
      this.option.legend.data = [];
      for (var key in data) {
        this.option.legend.data.push({
          name: key,
          icon: 'image://' + this.iconMap[key]
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
#powerAnalysis {
  height: 400px;
  width: 780px;
  margin: 0 auto;
}
</style>

