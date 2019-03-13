<template>
  <div :style="{left: left + 'px', top: top + 'px'}" class="btn-container">
    <span class="btn">{{text[0]}}</span>\
    <span class="btn">{{text[1]}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button-Group',
  props: {
    text: {
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
  }
}
</script>

<style lang="less" scoped>
.btn-container {
  position: absolute;
}
.btn {
  color: rgba(255, 255, 255, 0.6);
  width: 80px;
  height: 30px;
  display: inline-block;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  font-family: SourceHanSansCN-Normal;
  background-image: url('../../../assets/img/default.png');
}
</style>

