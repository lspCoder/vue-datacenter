<template>
  <div class="content">
    <CurvePath id="usersPower"/>
    <div class="users">
      <span class="name">煤改电用户数：</span>
      <span class="total">{{usersData.totalUsers}}</span>
    </div>
    <div :style="{ background: background }" class="row">
      <span>户号</span>
      <span>户名</span>
      <span>最大负荷</span>
      <span>发生时间</span>
      <span>标识</span>
    </div>
    <div
      :key="item.id"
      :style="{background: item.id % 2 === 0 ? background : '' }"
      class="row"
      v-for="item in usersData.list"
    >
      <span>{{item.id}}</span>
      <span>{{item.name}}</span>
      <span>{{item.power}}</span>
      <span>{{item.time}}</span>
      <span>{{item.mark}}</span>
    </div>
  </div>
</template>

<script>
import { getUsersPowerData } from '@/api'

export default {
  name: 'Right2',
  data () {
    return {
      usersData: {},
      background: 'linear-gradient(rgba(0, 68, 132, 0.6), rgba(0, 90, 116, 0.6))'
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
      getUsersPowerData().then((data) => {
        this.usersData = data;
      })
    },
    _refreshData () {
      this._initData();
    }
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
  font-family: SourceHanSansCN-Normal;
  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    border-image: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      )
      1 round;
  }
}
.total {
  font-family: Pirulen;
  color: rgb(91, 255, 255);
  font-size: 20px;
}
.hightLine {
  // display: inline-block;
  width: 100%;
  height: 1px;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}
</style>

