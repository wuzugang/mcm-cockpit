<template>
  <div class="nav">
    <div class="nav-list" :style="{ width: navListWidth }">
      <div class="item" :style="{ width: itemWidth }" :key="index" v-for="(item, index) in navList" :class="{'active': nowIndex === index}" @click="tabClick(index)">
        {{item.name}}
      </div>
    </div>
	</div>
</template>
<script>
export default {
  props: ['swiperSendIndex', 'navList'],
  watch: {
    swiperSendIndex (value, oldvalue) {
      // 接收 swiper组件传过来的索引，导航高亮
      this.nowIndex = value
    }
  },
  data () {
    return {
      nowIndex: 0,
      navListWidth: "100%",
      itemWidth: 0
    }
  },
  methods: {
    tabClick (index) {
      this.nowIndex = index
      // 点击导航按钮时向swiper组件发送index
      this.$emit('changeTab', index)
    }
  },
  created() {
    // 初始化nav宽度
    if (this.navList.length == 2) {
      this.itemWidth = "35%";
    }
    if (this.navList.length == 3) {
      this.itemWidth = "30%";
    }
    if (this.navList.length == 4) {
      this.itemWidth = "23%";
    }
    if (this.navList.length == 5) {
      this.navListWidth = "105%";
      this.itemWidth = "19%";
    }
    if (this.navList.length == 6) {
      this.navListWidth = "120%";
      this.itemWidth = "16%";
    }
    if (this.navList.length == 7) {
      this.navListWidth = "140%";
      this.itemWidth = "14%";
    }
  }
}
</script>
<style lang="less" scoped>
  .nav{
    padding-top: 3%;
    height: 100%;
    text-align: center;
    overflow-x: auto;
  }

  .nav::-webkit-scrollbar{
    display: none;
  }

  .nav-list{
    height: 80%;
    display:inline-block;
  }
  
  .nav-list>div {
    border: 1px solid #ADBDCA;
    position: relative;		
    text-align: center;
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    border-top-right-radius: 15%;
    border-top-left-radius: 15%;
  }
  
  .nav-list>div.active {				//设置激活样式,可更改字体大小和颜色等等
      font-size: 25px;
      color: #FFFFFF;
      background-color: #03629A;
      transition: all linear 0.5s;						   //设置动画切换效果
      font-weight: 100;
  }
</style>
