
<!-- 机构统计类指标 -->
<template>
  <div class="business_content" :style="{ height: contentHeight() }">
    <vue-title>
      <template v-slot:text>
        机构统计指标
      </template>
    </vue-title>
    <nav-swiper :navList="navList" :list="list" :initialSlide="initialSlide"></nav-swiper>
  </div>
</template>

<script>
  import Title from '../../components/vue-title';
  import navSwiper from '../../components/navSwiper/navSwiper.vue'
  import ManagerTab from './tabPage/managerTab'
  import OrgTab from './tabPage/orgTab'

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
          {path: '/orgTab', component: OrgTab},
          {path: '/managerTab', component: ManagerTab},

        ],
        navList: [
          {name: '机构'},
          {name: '客户经理'},
        ],
        initialSlide: this.$router.path === '/orgTab' ? 0 : this.$router.path === '/managerTab' ? 1:0
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
