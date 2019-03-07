<template>
  <div class="top">
    <div class="left">
      <div class="topTitle">用电信息采集系统</div>
      <div class="bottomTitle">全景监控</div>
    </div>
    <div class="center">煤改电分析</div>
    <div class="right">{{currentTime}}</div>
  </div>
</template>

<script>
export default {
  name: 'Top',

  computed: {
    currentTime: function () {
      return this.formatTime(new Date(), 'yyyy/MM/dd/HH:mm:ss');
    }
  },
  methods: {
    formatTime (date, fmt) {
      var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(),   // 日
        'H+': date.getHours(),  // 小时
        'm+': date.getMinutes(),  // 分
        's+': date.getSeconds(),  // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3),  // 季度
        'S': date.getMilliseconds()   // 毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
      }
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
      }
      return fmt;
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  .left {
    float: left;
    width: 200px;
    .topTitle {
      margin: 10px 0px 0px 25px;
      color: #ffffff;
      font-size: 18px;
      letter-spacing: 2px;
    }
    .bottomTitle {
      margin: 10px 0px 0px 25px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      letter-spacing: 1px;
    }
  }
  .center {
    letter-spacing: 7px;
    line-height: 60px;
    margin-left: 20px;
    margin-right: 300px;
    color: #5bffff;
    font-size: 30px;
    font-weight: bolder;
    text-shadow: 0 0 10px #00adff, 0 0 20px #00adff;
    display: inline-block;
  }
  .right {
    width: 300px;
    float: right;
    color: #ffffff;
    font-family: 'Pirulen';
    font-size: 18px;
    margin-top: 50px;
  }
}
</style>


