<template>
	<div class="swiper-box">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" :key="index" v-for="(item,index) in list">
					<keep-alive>
						<component :is="item.component"></component>
					</keep-alive>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import one from '@/views/testNav/one'
import tow from '@/views/testNav/tow'
import three from '@/views/testNav/three'
import four from '@/views/testNav/four'
import five from '@/views/testNav/five'
import Swiper from '../../../static/swiper-4.3.3.min.js'
import '../../../static/swiper-4.3.3.min.css'
export default {
  props: ['swiperIndex'],
  components: {
    one,
    tow,
    three,
    four,
    five
  },
  watch: {
  	swiperIndex (value, oldvalue) {
  		// 接收 nav组件传过来的导航按钮索引，跳转到相应的内容区
  		this.mySwiper.slideTo(value, 0, false)
  	}
  },
  data () {
    return {
      list: [
        {path: '/one', component: one},
        {path: '/tow', component: tow},
        {path: '/three', component: three},
        {path: '/four', component: four},
        {path: '/five', component: five}
      ],
      mySwiper: null
    }
  },
  mounted () {
  	this.mySwiper = new Swiper('.swiper-container', {
  		//  设定初始化时silde的索引
  		initialSlide: this.$router.path === '/one' ? 0 : this.$router.path === '/two' ? 1 : this.$router.path === '/three' ? 2 : this.$router.path === '/four' ? 3 : this.$router.path === '/five' ? 4 : 0,
      freeMode: false,
    })
  	this.mySwiper.on('slideChange', () => {
  		// 监控滑动后当前的索引，将索引发送到导航组件
  		this.$emit('slideTab', this.mySwiper.activeIndex)
  	})
  	console.log(this.mySwiper)
  }
}
</script>
<style lang="less" scoped>
</style>
