任务时效指标 -->
<template>
  <div class="business_content" :style="{ height: contentHeight() }">
    <vue-title>
      <template v-slot:text>
        任务时效指标
      </template>
    </vue-title>
    <nav-swiper :navList="navList" :list="list" :initialSlide="initialSlide"></nav-swiper>
  </div>
</template>

<script>
  import Title from '../../components/vue-title';
  import navSwiper from '../../components/navSwiper/navSwiper.vue'
  import CreditApproveTab from './tabPage/creditApproveTab'
  import PutoutApproveTab from './tabPage/putoutApproveTab'

  export default {
    name: 'orgIndexView',
    components: {
      'nav-swiper': navSwiper,
      'vue-title':Title
    },
    data () {
      return {
        slideIndex: 0, // 点击导航发送给swiper的值
        swiperToNav: 0, // swiper滑动下标值传给nav导航
        list: [
          {path: '/creditApproveTab', component: CreditApproveTab},
          {path: '/putoutApproveTab', component: PutoutApproveTab},

        ],
        navList: [
          {name: '授信审批'},
          {name: '放款审批'},
        ],
        initialSlide: this.$router.path === '/creditApproveTab' ? 0 : this.$router.path === '/putoutApproveTab' ? 1:0
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
