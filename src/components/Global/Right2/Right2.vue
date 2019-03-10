<template>
  <div class="content">
    <CurvePath id="usersPower" />
    <div class="users">
      <span class="name">煤改电用户数：</span>
      <span class="total">{{usersData.total}}</span>
    </div>
    <div class="row" :style="{ background: background }">
      <span>户号</span>
      <span>户名</span>
      <span>最大负荷</span>
      <span>发生时间</span>
      <span>标识</span>
    </div>
    <div class="row" v-for="item in usersData.list" :key="item.id" :style="{background: item.id % 2 === 0 ? background : '' }">
      <span>{{item.id}}</span>
      <span>{{item.name}}</span>
      <span>{{item.power}}</span>
      <span>{{item.time}}</span>
      <span>{{item.mark}}</span>
    </div>
  </div>
</template>

<script>
import { getTableData } from '@/api'

import CurvePath from '@/components/Global/CurvePath'

export default {
  name: 'Right2',
  components: {
    CurvePath
  },
  data () {
    return {
      usersData: {},
      background: 'linear-gradient(rgba(0, 68, 132, 0.6), rgba(0, 90, 116, 0.6))'
    }
  },
  mounted () {
    getTableData().then((data) => {
      this.usersData = data;
    })
  }
}
</script>

<style lang="less" scoped>
#usersPower {
  position: absolute;
  top: 10px;
}
.users {
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  margin-left: 35px;
}
.row {
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  height: 28px;
  line-height: 28px;
  margin-left: 35px;
  margin-right: 10px;
  margin-top: 5px;
}
</style>

