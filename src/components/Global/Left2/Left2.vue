<template>
  <div class="left2">
    <div class="content">
      <CurvePath id="cityToArea"/>
      <div class="left-text">
        <p class="city">{{cityAreaAlarmData.city}}</p>
        <p class="area">{{cityAreaAlarmData.area}}</p>
      </div>
      <div class="right-text">
        <p class="power">
          <countTo
            :autoplay="true"
            :duration="3000"
            :endVal="cityAreaAlarmData.power"
            :startVal="0"
          ></countTo>
          <span class="unit">KVA</span>
        </p>
        <p :style="{color: alarmColor}" class="alarm">{{cityAreaAlarmData.alarm}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

/* 获取模拟数据 */
import { getCityPowerData } from '@/api';

export default {
  name: 'Left2',
  components: {
    countTo
  },
  data () {
    return {
      cityAreaAlarmData: {}
    }
  },
  computed: {
    alarmColor: function () {
      let colorMap = {
        '重过载': '#f00',
        '中过载': '#ff0',
        '正常': '#00ff00'
      }
      return colorMap[this.cityAreaAlarmData.alarm];
    }
  },
  mounted () {
    this._initData();
    setInterval(() => {
      this._refreshData();
    }, 10000);
  },
  methods: {
    _initData () {
      getCityPowerData().then((data) => {
        this.cityAreaAlarmData = data
      })
    },
    _refreshData () {
      this._initData();
    }
  }
}
</script>

<style lang="less" scoped>
.left2 {
  height: 100%;
  .content {
    height: 100%;
    background: url('../../../assets/img/gridBg.png') 50% 50% no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-text {
    display: inline-block;
    width: 145px;
    .city {
      font-size: 18px;
      color: #ffffff;
      letter-spacing: 3px;
      font-family: SourceHanSansCN-Normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .area {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 3px;
      font-family: SourceHanSansCN-Normal;
      margin-top: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .right-text {
    display: inline-block;
    width: 165px;
    margin-left: 10px;
    .power {
      color: rgb(91, 255, 255);
      letter-spacing: 3px;
      font-size: 24px;
      font-family: Pirulen;
      min-width: 110px;
    }
    .alarm {
      font-size: 18px;
      color: rgb(0, 255, 0);
      letter-spacing: 3px;
      font-weight: bolder;
      font-family: SourceHanSansCN-Normal;
      margin-top: 12px;
    }
  }
}
#cityToArea {
  margin-top: 12px;
  margin-right: 2px;
}
.unit {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: bold;
  font-family: SourceHanSansCN-Normal;
}
</style>

