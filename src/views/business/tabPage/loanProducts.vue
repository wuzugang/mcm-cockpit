
<!-- 贷款产品 -->
<template>
  <div class="business_loan_product">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
        <!-- 图表区域 -->
        <div class="chart">
          <div id="myChart_product" class="content_chart"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loanProducts",
  data() {
    return {
      // 图表背景图
      chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'90% 95%'
      },
      // 图表option
      option: {
        tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            color:'#000', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"black",
            }
        },
        legend: {  //图例
            orient: 'vertical',  //图例的布局，竖直    horizontal为水平
            x: 'right',//图例显示在右边
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            textStyle:{    //图例文字的样式
                color:'#333',  //文字颜色
                fontSize:12    //文字大小
            }
        },
        series: [
            {
                name:'访问来源',
                type:'pie', //环形图的type和饼图相同
                radius: ['50%', '70%'],//饼图的半径，第一个为内半径，第二个为外半径
                avoidLabelOverlap: false,
                color:['#D1FBEF','#F9D858','#4CD0DD','#DF86F0','#F5A7C1'],
                label: {
                    normal: {  //正常的样式
                        show: true,
                        position: 'left'
                    },
                    emphasis: { //选中时候的样式
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },  //提示文字
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
            }
      ]},
      // 图表数据
      data: [],
    };
  },
  methods: {
    /**
     * 绘制图表
     */
    draw() {
        // 初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart_product'))
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = myChart.resize;
        // 设置option
        myChart.setOption(this.option, true);
    },
  },
  mounted(){
      // 初始化图表
      this.draw();
  },
};
</script>
<style lang="less" scoped>
  .business_loan_product {
    height: 100%;
    width: 100%;

    .content{
      width: 100%;
      height: 58%;
      margin-top: 8%;
      background-position-x: center;
      background-position-y: center;

      .chart{
        width: 86%;
        height: 83%;
        margin-left: 7%;
        margin-top: 8%;
        float: left;

        .content_chart{
            width: 100%;
            height: 100%;
        }
      }
      
    }

  }
</style>