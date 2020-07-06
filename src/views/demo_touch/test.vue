<!-- 移动驾驶舱首页 -->
<template>
    <!-- <div id="slider" class="slider">
        <swiper :options="swiperOption" ref="mySwiper" style="height: 100%;">
            <swiper-slide v-for="(img, index) in images" :key="index">
              <div class="swiper-zoom-container">
                <img :src="img.url" alt="" />
              </div>
            </swiper-slide>
          </swiper>
    </div> -->

    <div>
        <swiper :options="swiperOption">
        　　<swiper-slide>slide1</swiper-slide>
        　　<swiper-slide>slide2</swiper-slide>
        　　<div class="swiper-pagination" slot="pagination"></div>
        　　<div class="swiper-button-prev" slot="button-prev"></div>
        　　<div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import { query } from "@/api/api"
    import { MessageBox } from "element-ui"

	export default {
		name: "user",
		data() {
			return {
                swiperOption: {
                　　pagination: {
                　　　　el: '.swiper-pagination',
                　　　　clickable: true // 允许点击小圆点跳转
                　　},
                　　autoplay: {
                　　　　delay: 3000,
                　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
                　　},
                　　loop: true,
                　　navigation: {
                　　　　nextEl: '.swiper-button-next',
                　　　　prevEl: '.swiper-button-prev'
                　　}
                },
			}
		},
		methods: {
            show(index){
                this.changePointX=this.startPointX;
                let slider = document.getElementById('slider');
                slider.style.marginLeft=`-${330*index}px`;
            },
            touchstart(e){
                this.startPointX = e.changedTouches[0].pageX;
            },
            touchmove(e){
                if(this.startPointX==this.changePointX){
                    return ;
                }
                let currPointX = e.changedTouches[0].pageX;
                let leftSlide = this.startPointX-currPointX;
                if(leftSlide>30&&this.showIndex<9){
                    this.show(++this.showIndex)
                }else if(leftSlide<-30&&this.showIndex>0){
                    this.show(--this.showIndex)
                }
            },
		},
		created() {
            
        },
        mounted () {
           
        },
        computed: {
            
        },
		filters: {
            
		}
	}

</script>

<style lang="less" scoped>

</style>
