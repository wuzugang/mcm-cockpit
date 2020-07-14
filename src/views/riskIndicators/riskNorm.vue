<!-- 风险类指标 -->
<template>
  <div class="content" :style="{ height: contentHeight() }">
    <nav-swiper :navList="navList" :list="list" :initialSlide="initialSlide"></nav-swiper>
  </div>
</template>

<script>
import navSwiper from '../../components/navSwiper/navSwiper.vue'

export default {
  name: 'risk',
  components: {
    'nav-swiper': navSwiper
  },
  data () {
    return {
      slideIndex: 0, // 点击导航发送给swiper的值
      swiperToNav: 0, // swiper滑动下标值传给nav导航
      list: [],
      navList: [],
      initialSlide: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.content{
  width: 100%;
}
</style>
