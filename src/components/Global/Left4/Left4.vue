<template>
  <div class="content">
    <Title :iconUrl="img" text="负载率"/>
    <div class="chart">
      <chart :option="topOption" autoResize="true" height="70px" id="top-chart" width="360px"/>
      <chart
        :option="bottomOption"
        autoResize="true"
        height="200px"
        id="bottom-chart"
        width="360px"
      />
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import chart from '@/components/chart'
import { getLoadRateData } from '@/api';

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'
import power from '@/assets/img/power.png'

export default {
  name: 'Left4',
  components: {
    chart
  },
  data () {
    return {
      img: img,
      loadTate: {},
      stateData: {},
      topOption: {},
      bottomOption: {}
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
      this._initTopChart()
      this._initBottomChart()
    },
    _initData () {
      getLoadRateData().then((data) => {
        this.loadTate = data['loadTate']
        this.stateData = data['state']
        this.topOption.yAxis[1].data[0] = data['loadTate'];
        this.topOption.series[0].data[0] = data['loadTate'];

        this.bottomOption.yAxis[1].data = data['state'].value;
        this.bottomOption.series[0].data = data['state'].value
      })
    },
    _refreshData () {
      this._initData();
    },
    _initTopChart () {
      this.topOption = {
        tooltip: {
          trigger: 'axis',
          formatter: '{a}: {c0}'
        },
        grid: {
          left: 80
        },
        calculable: true,
        xAxis: [{
          type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        }],
        yAxis: [{
          type: 'category',
          data: [0],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 10,
            formatter: function (value) {
              return `{${value}| }`;
            },
            rich: {
              0: {
                height: 35,
                padding: [0, 0, 0, 0],
                align: 'center',
                backgroundColor: {
                  image: power
                }
              }
            }
          }
        }, {
          type: 'category',
          data: [75],
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 2,
            textStyle: {
              color: "#ffae00",
              fontSize: 14
            },
            formatter: function (value) {
              return value + "%";
            }
          }
        }],
        series: [{
          name: '负载率',
          type: 'bar',
          itemStyle: {
            normal: {
              //  柱形图圆角，初始化效果
              barBorderRadius: [0, 14, 14, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                  offset: 0,
                  color: '#0084ff'
                },
                {
                  offset: 1,
                  color: '#5bffff'
                }
                ]
              )
            }
          },
          data: [70],
          barWidth: 14,
          label: {
            show: true,
            normal: {
              show: true,
              formatter: (value) => {
                return '负载率';
              },
              position: 'insideTopLeft',
              textStyle: {
                color: 'rgba(255,255,255,0.6)',
                fontSize: 16
              },
              offset: [0, -25]
            }
          }
        },
        {
          name: '背景',
          type: 'bar',
          data: [100, 100, 100, 100],
          barWidth: 14,
          itemStyle: {
            normal: {
              color: 'rgba(125, 125, 125, 0.05)',
              barBorderRadius: [0, 14, 14, 0]
            }
          },
          barCategoryGap: "10%",
          barGap: '-100%',
          zlevel: -1
        }]
      }
    },
    _initBottomChart () {
      this.bottomOption = {
        tooltip: {
          trigger: 'axis',
          formatter: '{b0}: {c0}'
        },
        grid: {
          left: 80,
          top: 20,
          bottom: 20
        },
        calculable: true,
        xAxis: [{
          type: 'value',
          axisLine: {
            show: true
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(255,255,255,0.6)",
              fontSize: 16
            }
          }
        }],
        yAxis: [{
          type: 'category',
          // 坐标轴小标记
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "rgba(255,255,255,0.6)",
              fontSize: 16
            }
          },
          data: ["轻载", "正常", "过载", "重载"]
        },
        {
          type: 'category',
          data: [75, 25, 25, 22],
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 2,
            textStyle: {
              color: "#ffae00",
              fontSize: 14
            },
            formatter: function (value) {
              return value;
            }
          },
          data: [10, 20, 40, 26]
        }],
        series: [{
          type: 'bar',
          smooth: true,
          data: [10, 20, 40, 26],
          barWidth: 14,
          barCategoryGap: "10%",
          itemStyle: {
            normal: {
              //  柱形图圆角，初始化效果
              barBorderRadius: [0, 14, 14, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                  offset: 0,
                  color: '#0084ff'
                },
                {
                  offset: 1,
                  color: '#5bffff'
                }])
            }
          }
        }, {
          name: '背景',
          type: 'bar',
          silent: true,
          data: [100, 100, 100, 100],
          barWidth: 14,
          itemStyle: {
            normal: {
              color: 'rgba(125, 125, 125, 0.2)',
              barBorderRadius: [0, 14, 14, 0]
            }
          },
          barGap: '-100%',
          zlevel: -1
        }]
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 100%;
}
#top-chart {
  height: 70px;
  max-width: 360px;
  margin: 0 auto;
  border-bottom: 2px solid rgba(125, 125, 125, 0.3);
}
#bottom-chart {
  height: 200px;
  max-width: 360px;
  margin: 0 auto;
}
</style>

