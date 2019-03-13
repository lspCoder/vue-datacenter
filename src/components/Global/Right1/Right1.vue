<template>
  <div class="content">
    <div
      :class="{borderLR: item.name === '用电量'}"
      :key="item.name"
      class="center"
      v-for="item in electricityData"
    >
      <p>
        <img :src="img" alt="power">
      </p>
      <p class="name">{{item.name}}</p>
      <p class="value">{{item.value}}</p>
    </div>
  </div>
</template>

<script>
import { getElectricityData } from '@/api'

import power from '@/assets/img/power.png'

export default {
  name: 'Right1',
  data () {
    return {
      img: power,
      electricityData: []
    }
  },
  mounted () {
    this._initData();
    setInterval(() => {
      this._refreshData();
    }, 5000);
  },
  methods: {
    _initData () {
      getElectricityData().then((data) => {
        this.electricityData = data
      })
    },
    _refreshData () {
      this._initData()
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.center {
  text-align: center;
}

.name {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 5px;
}

.value {
  color: rgb(91, 255, 255);
  font-size: 12px;
  font-family: Pirulen;
  font-weight: bold;
}
.borderLR {
  padding: 0 40px;
  border-left: 1px solid rgba(57, 60, 69, 0.9);
  border-right: 1px solid rgba(57, 60, 69, 0.9);
}
</style>

