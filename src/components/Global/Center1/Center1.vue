<template>
  <div class="content">
    <Title text='电量分析' :iconUrl='img' />
  </div>
</template>

<script>
import Title from '../Title'

/* 这里需要导入图片才能使用否则引入图片不显示 */
import img from '@/assets/img/title.png'

export default {
  name: 'Center1',
  components: {
    Title
  },
  data () {
    return {
      img: img
    }
  }
}
</script>

<style lang="less" scoped>

</style>

