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

import Swiper from '../../../static/swiper-4.3.3.min.js'
import '../../../static/swiper-4.3.3.min.css'
export default {
  props: ['swiperIndex', 'list', 'initialSlide'],
  components: {

  },
  watch: {
  	swiperIndex (value, oldvalue) {
  		// 接收 nav组件传过来的导航按钮索引，跳转到相应的内容区
  		this.mySwiper.slideTo(value, 0, false)
    }
  },
  data () {
    return {
      slide: '',
      mySwiper: null
    }
  },
  mounted () {
  	this.mySwiper = new Swiper('.swiper-container', {
		//  设定初始化时silde的索引
		initialSlide: this.initialSlide,
      	freeMode: false,
    })
  	this.mySwiper.on('slideChange', () => {
  		// 监控滑动后当前的索引，将索引发送到导航组件
  		this.$emit('slideTab', this.mySwiper.activeIndex)
  	})
  }
}
</script>
<style lang="less" scoped>
  .swiper-box{
	width: 100%;
	height:89%;
	margin-top: 3%;
  }
  .swiper-container{
	  width: 100%;
	  height: 100%;
  }
</style>
