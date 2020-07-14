<template>
  <div class="nav_swiper" :style="{ height: contentHeight() }">
    <div class="nav_content">
      <v-nav @changeTab = "clickIndex" :swiperSendIndex="swiperToNav" :navList="navList"></v-nav>
    </div>
    <!-- 分割线 -->
    <!-- <div class="dividingLine"></div> -->
    <v-swiper :swiperIndex="slideIndex" @slideTab="slideSendNav" :list="list" :initialSlide="initialSlide"></v-swiper>
  </div>
</template>

<script>
import nav from '../nav/nav.vue'
import swiper from '../swiperAssembly/swiper.vue'
export default {
  name: 'navSwiper',
  props: ['navList', 'list', 'initialSlide'],
  components: {
    'v-nav': nav,
    'v-swiper': swiper
  },
  watch: {
    // 监听导航传给swiper时候，把数据传给父亲时候传参值的变化
    slideIndex (value, oldvalue) {
      // swiper滑动下标值传给nav导航,目的是为了导航的下标和swiper的下标索引能时时同步不存在bug
      this.swiperToNav = value
    },
    swiperToNav (value, oldValue) {
      // 点击导航发送给swiper的值,目的是为了导航的下标和swiper的下标索引能时时同步不存在bug
      this.slideIndex = value
    }
  },
  data () {
    return {
      slideIndex: 0, // 点击导航发送给swiper的值
      swiperToNav: 0, // swiper滑动下标值传给nav导航
    }
  },
  methods: {
    // 点击导航菜单通过emit传给父亲然后父亲再传给子组件swiper组件
    clickIndex (index) {
      this.slideIndex = index
      this.$store.commit('saveNavIndex', index)
    },
    // swiper滑动后下标通过emit传给父亲。父亲再传给子组件nav
    slideSendNav (index) {
      this.swiperToNav = index
      this.$store.commit('saveSwiperIndex', index)
    }
  },
  mounted () {
    this.swiperToNav = this.$store.state.navInde
    this.slideIndex = this.$store.state.swpierIndex
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .nav_swiper{
    width: 100%;
    height: 100%;
    text-align: center;

    .nav_content{
      text-align: center;
      width: 90%;
      height: 7%;
      margin: auto;
    }

    .dividingLine{
      border: 1px solid #237ad4;
      width: 100%;
      margin-top: 1%;
    }
  }
</style>
