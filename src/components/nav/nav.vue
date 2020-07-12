<template>
  <div class="nav">
		<ul class="nav-list">
			<li class="item" :key="index" v-for="(item, index) in navList" :class="{'active': nowIndex === index}" @click="tabClick(index)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  props: ['swiperSendIndex'],
  watch: {
    swiperSendIndex (value, oldvalue) {
      // 接收 swiper组件传过来的索引，导航高亮
      this.nowIndex = value
    }
  },
  data () {
    return {
      navList: [
        {name: '页面一'},
        {name: '页面二'},
        {name: '页面三'},
        {name: '页面四'},
        {name: '页面五'}
      ],
      nowIndex: 0
    }
  },
  methods: {
    tabClick (index) {
      this.nowIndex = index
      // 点击导航按钮时向swiper组件发送index
      this.$emit('changeTab', index)
    }
  }
}
</script>
<style lang="less" scoped>
  ul {
  	padding:0px;
  }
  .nav{
  	margin-bottom: 20px;
  }
  .nav-list{
  	width: 100%;
  	overflow: hidden;
  }
  .item{
  	width: 20%;
  	display: inline-block;
    text-align: center;
  	height: 48px;
  	line-height: 48px;
  }
  .active{
  	background: #ccc;
  }
</style>
