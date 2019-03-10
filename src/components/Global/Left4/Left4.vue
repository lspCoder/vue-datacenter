<template>
  <div class="content">
    <Title text='负载率' :iconUrl='img' />
    <div class="chart">
      <div id="top-chart"></div>
      <div id="bottom-chart"></div>
    </div>
  </div>
</template>

<script>
import Title from '../Title'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'

export default {
  name: 'Left4',
  components: {
    Title
  },
  data () {
    return {
      img: img
    }
  },
  mounted () {

  },
  methods: {
    drawTopChart () {

    },
    drawBottomChart () {

    }
  }
}
</script>

<style lang="less" scoped>

</style>

