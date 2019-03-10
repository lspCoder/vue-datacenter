<template>
  <div id="app">
    <grid-layout
      :col-num="12"
      :is-draggable="draggable"
      :is-resizable="resizable"
      :layout="layout"
      :row-height="32"
      :use-css-transforms="true"
      :vertical-compact="true"
    >
      <grid-item
        :h="item.h"
        :i="item.i"
        :static="item.static"
        :w="item.w"
        :x="item.x"
        :y="item.y"
        v-for="(item) in layout"
        :key="item.id"
      >
      <!-- 动态组件 -->
        <component v-bind:is="item.component"> </component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import { GridLayout, GridItem } from 'vue-grid-layout'

var testLayout = [
  { x: 0, y: 0, w: 12, h: 2, i: 'top', static: false, component: 'Top' },

  { x: 0, y: 2, w: 3, h: 5, i: 'left1', static: false, component: 'Left1' },
  { x: 0, y: 7, w: 3, h: 4, i: 'left2', static: false, component: 'Left2' },
  { x: 0, y: 13, w: 3, h: 6, i: 'left3', static: false, component: 'Left3' },
  { x: 0, y: 17, w: 3, h: 8, i: 'left4', static: false, component: 'Left4' },

  { x: 3, y: 2, w: 6, h: 11.5, i: 'center1', static: false, component: 'Center1' },
  { x: 3, y: 2, w: 6, h: 11.5, i: 'center2', static: false, component: 'Center2' },

  { x: 9, y: 2, w: 3, h: 4, i: 'right1', static: false, component: 'Right1' },
  { x: 9, y: 9, w: 3, h: 19, i: 'right2', static: false, component: 'Right2' }
]

export default {
  name: 'dashboard',
  components: {
    GridLayout,
    GridItem
  },
  data () {
    return {
      layout: testLayout,
      draggable: true,
      resizable: true,
      index: 0,
      timerId: null
    }
  },
  mounted: function () {
    var self = this;
    this.timerId = setInterval(() => {
      self.updateAll();
    }, 5000);
  },
  methods: {
    updateAll: function () {

    }
  },
  beforeDestroy () {
    clearInterval(this.timerId);
  }
}
</script>
<style lang="less" scoped>

.vue-grid-item:not(.vue-grid-placeholder) {
  border: 1px solid #FFF;
}

.vue-grid-item.resizing {
  opacity: 0.9;
}

.vue-grid-item.static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}

.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

