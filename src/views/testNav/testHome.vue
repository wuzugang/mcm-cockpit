<template>
  <div class="hello">
    <v-nav @changeTab = "clickIndex" :swiperSendIndex="swiperToNav"></v-nav>
    <v-swiper :swiperIndex="slideIndex" @slideTab="slideSendNav"></v-swiper>
  </div>
</template>

<script>
import nav from '../../components/nav/nav.vue'
import swiper from '../../components/swiperAssembly/swiper.vue'
export default {
  name: 'HelloWorld',
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
      swiperToNav: 0 // swiper滑动下标值传给nav导航
    }
  },
  methods: {
    // 点击导航菜单通过emit传给父亲然后父亲再传给子组件swiper组件
    clickIndex (index) {
      console.log('导航传的下标', index)
      this.slideIndex = index
      this.$store.commit('saveNavIndex', index)
    },
    // swiper滑动后下标通过emit传给父亲。父亲再传给子组件nav
    slideSendNav (index) {
      console.log('swiper传的下标', index)
      this.swiperToNav = index
      this.$store.commit('saveSwiperIndex', index)
    }
  },
  mounted () {
    this.swiperToNav = this.$store.state.navInde
    this.slideIndex = this.$store.state.swpierIndex
    console.log(this.$store.state.navInde)
    console.log(this.$store.state.swpierIndex)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello{
  height:100%;
}
</style>
