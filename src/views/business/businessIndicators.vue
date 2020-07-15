
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
      list: [
        {path: '/loanTerm', component: LoanTerm},
        {path: '/loanAmount', component: LoanAmount},
        {path: '/guarantyMethod', component: GuarantyMethod},
        {path: '/loanTop', component: LoanTop},
        {path: '/industryInvest', component: IndustryInvest},
        {path: '/loanProduct', component: LoanProducts}
      ],
      navList: [
        {name: '贷款期限'},
        {name: '贷款金额'},
        {name: '担保方式'},
        {name: '贷款TOP10'},
        {name: '行业投向'},
        {name: '贷款产品'}
      ],
      initialSlide: this.$router.path === '/loanTerm' ? 0 : this.$router.path === '/loanAmount' ? 1 : this.$router.path === '/guarantyMethod' 
                    ? 2 : this.$router.path === '/loanTop' ? 3 : this.$router.path === '/industryInvest' ? 4 : this.$router.path === '/loanProduct' ? 5 : 0
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
