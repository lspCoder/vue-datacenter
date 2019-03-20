<template>
  <div :style="{left: left + 'px', top: top + 'px'}" class="btn-container">
    <span
      :key="text"
      class="btn"
      v-bind:class="{active : active == text}"
      v-for="text in textArr"
      v-on:click="selected(text)"
    >{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button-Group',
  data () {
    return {
      active: this.textArr[0]
    }
  },
  props: {
    textArr: {
      type: Array,
      default: function () {
        return ['按钮', '按钮']
      }
    },
    left: {
      type: Number
    },
    top: {
      type: Number
    }
  },
  methods: {
    selected: function (text) {
      this.active = text;
    }
  }
}
</script>

<style lang="less" scoped>
.btn-container {
  position: absolute;
  z-index: 10;
}
.btn {
  color: rgba(255, 255, 255, 0.6);
  width: 80px;
  height: 30px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  margin: 0 5px;
  font-family: SourceHanSansCN-Normal;
  background-image: url('../../../assets/img/default.png');
}
.active {
  color: rgba(255, 255, 255);
  width: 80px;
  height: 30px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  margin: 0 5px;
  font-family: SourceHanSansCN-Normal;
  background-image: url('../../../assets/img/selected.png');
}
</style>

