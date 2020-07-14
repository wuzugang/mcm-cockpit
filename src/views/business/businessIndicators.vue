
<!-- 业务类指标 -->
<template>
  <div class="business_content" :style="{ height: contentHeight() }">
    <nav-swiper :navList="navList" :list="list" :initialSlide="initialSlide"></nav-swiper>
  </div>
</template>

<script>
import navSwiper from '../../components/navSwiper/navSwiper.vue'
import LoanTerm from './tabPage/loanTerm'
import LoanAmount from './tabPage/loanAmount'
import GuarantyMethod from './tabPage/guarantyMethod'
import LoanTop from './tabPage/loanTop10'
import IndustryInvest from './tabPage/industryInvest'
import LoanProducts from './tabPage/loanProducts'
export default {
  name: 'business',
  components: {
    'nav-swiper': navSwiper
  },
  data () {
    return {
      slideIndex: 0, // 点击导航发送给swiper的值
      swiperToNav: 0, // swiper滑动下标值传给nav导航
      list: [
        {path: '/one', component: LoanTerm},
        {path: '/tow', component: LoanAmount},
        {path: '/three', component: GuarantyMethod},
        {path: '/four', component: LoanTop},
        {path: '/five', component: IndustryInvest},
        {path: '/six', component: LoanProducts},
        {path: '/six', component: LoanProducts}
      ],
      navList: [
        {name: '贷款期限'},
        {name: '贷款金额'},
        {name: '担保方式'},
        {name: '贷款TOP10'},
        {name: '行业投向'},
        {name: '贷款产品'},
        {name: '贷款产品'}
      ],
      initialSlide: this.$router.path === '/one' ? 0 : this.$router.path === '/two' ? 1 : this.$router.path === '/three' ? 2 : this.$router.path === '/four' ? 3 : this.$router.path === '/five' ? 4 : this.$router.path === '/six' ? 5 : 0
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
.business_content{
  width: 100%;
}
</style>
