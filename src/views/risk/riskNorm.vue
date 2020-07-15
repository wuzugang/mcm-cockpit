<!-- 风险类指标 -->
<template>
  <div class="content" :style="{ height: contentHeight() }">
    <nav-swiper :navList="navList" :list="list" :initialSlide="initialSlide"></nav-swiper>
  </div>
</template>

<script>

import navSwiper from '../../components/navSwiper/navSwiper.vue'
import BusinessSpread from './tabPage/businessSpread'
import BusinessTrend from './tabPage/businessTrend'
import OverdueTop from './tabPage/overdueTop10'

export default {
  name: 'risk',
  components: {
    'nav-swiper': navSwiper
  },
  data () {
    return {
      list: [
        {path: '/businessTrend', component: BusinessTrend},
        {path: '/businessSpread', component: BusinessSpread},
        {path: '/overdueTop', component: OverdueTop}
      ],
      navList: [
        {name: '业务走势'},
        {name: '业务分布'},
        {name: '逾期TOP10'}
      ],
      initialSlide: this.$router.path === '/businessTrend' ? 0 : this.$router.path === '/businessSpread' ? 1 : this.$router.path === '/overdueTop' ? 2 : 0
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
