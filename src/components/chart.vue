<template>
  <div :id="id"></div>
</template>

<script>
export default {
  name: 'chart',
  props: {    //  父组件需要传递的参数：id，width，height，option
    id: {
      type: String
    },
    // width: {
    //   type: String,
    //   default: "100%"
    // },
    // height: {
    //   type: String,
    //   default: "300px"
    // },
    autoResize: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      required: true
    }
  },
  computed: {
    // style () {
    //   return {
    //     height: this.height,
    //     width: this.width
    //   };
    // }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.chart = this.$echarts.init(document.getElementById(this.id));
      this.chart.setOption(this.option);

      if (this.autoResize) {
        this.$el.addEventListener('resize', this.chart.resize);
      }
    }
  },
  //  在Chart.vue中加入watch
  watch: {
    option: {
      handler (newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal);
          } else {
            this.chart.setOption(oldVal);
          }
        } else {
          this.init();
        }
      },
      deep: true // 对象内部属性的监听，关键。
    }
  }
}
</script>

<style>
</style>
