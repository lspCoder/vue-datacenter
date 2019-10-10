<template>
  <div class="content">
    <Title :iconUrl="img" text="线损率" />
    <chart :autoResize="true" :option="option" id="LineLOsschart" />
  </div>
</template>

<script>
import Title from '../Title'
import echarts from 'echarts'
import chart from '@/components/chart'

import { colorRgb } from '@/utils';

import { getLineLossData } from '@/api'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'

export default {
  name: 'Left3',
  components: {
    Title,
    chart
  },
  data () {
    return {
      img: img,
      lineLossData: [],
      total: 100,
      colors: ['#0084ff', '#5bffff'],
      fontColor: '#ffffff',
      fontFamily: 'SourceHanSansCN-Normal',
      option: {}
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
    initChartOption () {
      let kt = ['线损率', '同比增长'];
      let vt = [0, 0];

      let dataStyle = {
        normal: {
          borderWidth: 4,
          borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: '#0084ff'
          }, {
            offset: 1,
            color: '#5bffff'
          }]),
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: this.colors[0]
          }, {
            offset: 1,
            color: this.colors[1]
          }])
        }
      }
      let placeHolderStyle = {
        normal: {
          color: 'rgba(172,172,172,0.6)',
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      }

      let option = this.option = {
        tooltip: {
          trigger: 'item',
          show: true,
          formatter: function (value) {
            return value.value;
          },
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: [8, 10],
          extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);'
        },
        series: []
      }
      option.series.push({
        name: 'Line name',
        type: 'pie',
        clockWise: false,
        radius: [55, 60],
        center: ['33%', '50%'],
        animationDuration: 5000,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        startAngle: 90,
        data: [{
          value: vt[0],
          itemStyle: dataStyle
        }, {
          value: this.total - vt[0],
          name: '',
          tooltip: {
            show: false
          },
          itemStyle: placeHolderStyle
        }],
        markLine: {               /* 绘制线和文字 */
          symbol: ['none', 'circle'],
          smooth: true,
          symbolSize: 5,
          lineStyle: {
            color: "white",
            type: 'solid'
          },
          label: {
            position: "end",
            color: colorRgb(this.fontColor, 0.6),
            fontSize: this.fontSize,
            fontFamily: this.fontFamily
          },
          data: [
            [
              { value: ' ' + kt[0], x: 121, y: 31 },
              { x: 215, y: 80 }
            ]
          ]
        }
      });
      option.series.push({
        name: 'Line value',
        type: 'pie',
        markLine: {
          symbol: ['none', 'none'],
          smooth: false,
          symbolSize: 3,
          lineStyle: {
            opacity: 0
          },
          label: {
            position: "end",
            color: '#C18614',
            fontSize: 25,
            fontFamily: 'Pirulen'
          },
          data: [
            [
              { value: ' ' + vt[0] + '%', x: 121, y: 46 },
              { x: 265, y: 85 }
            ]
          ]
        }
      });
      option.series.push({
        name: 'Line 4 name',
        type: 'pie',
        clockWise: false,
        radius: [70, 75],
        center: ['33%', '50%'],
        animationDuration: 5000,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        hoverAnimation: false,
        startAngle: 90,
        data: [{
          value: vt[1],
          itemStyle: dataStyle
        }, {
          value: this.total - vt[1],
          name: '',
          tooltip: {
            show: false
          },
          itemStyle: placeHolderStyle
        }],
        markLine: {
          symbol: ['none', 'circle'],
          smooth: true,
          symbolSize: 5,
          lineStyle: {
            color: "white",
            type: 'solid'
          },
          label: {
            position: "end",
            color: colorRgb(this.fontColor, 0.6),
            fontSize: this.fontSize,
            fontFamily: this.fontFamily
          },
          data: [
            [
              { value: ' ' + kt[1], x: 121, y: 16 },
              { x: 215, y: 55 }
            ]
          ]
        }
      });
      option.series.push({
        name: 'Line 4 value',
        type: 'pie',
        markLine: {
          symbol: ['none', 'none'],
          smooth: true,
          symbolSize: 3,
          lineStyle: {
            opacity: 0
          },
          label: {
            position: "end",
            color: '#C18614',
            fontSize: 25,
            fontFamily: 'Pirulen'
          },
          data: [
            [
              { value: ' ' + vt[1] + '%', x: 191, y: 82 },
              { x: 265, y: 55 }
            ]
          ]
        }
      })
    },
    _initData () {
      getLineLossData().then((data) => {
        this.lineLossData = data;
        let kt = Object.keys(data);
        let vt = Object.values(data);
        this.option.series[0].data[0].value = vt[0];
        this.option.series[0].data[1].value = this.total - vt[0];
        this.option.series[0].markLine.data[0][0].value = ' ' + kt[0];
        this.option.series[1].markLine.data[0][0].value = ' ' + vt[0] + '%';
        this.option.series[2].data[0].value = vt[1];
        this.option.series[2].data[1].value = this.total - vt[1];
        this.option.series[2].markLine.data[0][0].value = ' ' + kt[1];
        this.option.series[3].markLine.data[0][0].value = ' ' + vt[1] + '%';
      })
    },
    _refreshData () {
      this._initData();
    }
  }
}
</script>

<style lang="less" scoped>
#LineLOsschart {
  width: 395px;
  height: 200px;
  margin: 0 auto;
}
</style>
