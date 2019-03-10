<template>
  <div class="title">
    <img class="icon" v-bind:src="iconUrl">
    <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    iconUrl: String,
    text: String
  }
}
</script>

<style lang="less" scoped>
.title {
  margin-left: 25px;
  .icon{
    display: inline-block;
    margin-top: 5px;
    vertical-align: middle;
  }
  .text {
    font-size: 24px;
    color: #FFFFFF;
    display: inline-block;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: middle;
  }
}
</style>

