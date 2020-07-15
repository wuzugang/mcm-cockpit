
<!--任务时效指标 -->
<template>
  <div class="container" >
    <!-- 内容区 -->

    <van-cell  title="选择条线" is-link :value="channelValue" @click="chooseChannel"/>
    <van-popup v-model="channelShow" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="channelShow = false"
        @confirm="confirmChannel"
      />
    </van-popup>

    <!--授信流程任务时效图-->
    <div class="content_canvas" :style="chartBackground">
      <div id="crditApproveLineChart" class="content_canvas_chart"></div>
    </div>


  </div>
</template>
<script>
  export default {
    name: "creditApproveTab",
    data() {
      return {
        // 图表背景图
        chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%'
        },
        columns:['总行条线','分行条线'],
        channelShow:false,
        channelValue:"总行条线",
        creditApproveOption:{
          title: {
            text: "授信审批流程时效",
            x: "center",
            y: "top",
            padding: 20
          },
          tooltip: {
            trigger: "axis"
          },
          calculable: true,
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["审查岗", "复核岗", "审批岗", "终批岗", "分发岗"]
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "时间/天"
            }
          ],
          series: [
            {
              name: "时间/天",
              type: "line",
              smooth: true,
              itemStyle: {
                normal: {
                  lineStyle:{
                    color:'#7272F4',
                  },
                  areaStyle: {
                    type: "default",
                    color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [{
                        offset: 0, color: '#00A0E9' // 0% 处的颜色
                      }, {
                        offset: 1, color: '#7272F4' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                    }
                  }
                }
              },
              data: [10, 12, 9, 11, 18]
            }
          ]
        },


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
        let creditApproveChart = this.$echarts.init(document.getElementById('crditApproveLineChart'));
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = creditApproveChart.resize;
        // 设置option
        creditApproveChart.setOption(this.creditApproveOption, true);
      },
      //选择条线
      chooseChannel () {
        this.channelShow=true;
      },
      //选择条线确认
      confirmChannel(value){
        this.channelValue=value;
        this.channelShow=false;
      },
    },
    mounted(){
      // 初始化图表
      this.draw();
    },
  };
</script>
<style lang="less" scoped>
  *{
    box-sizing: border-box;
  }
  .container {
    height: 100%;
    width: 100%;

    .content_canvas{
      width: 95%;
      height: 50%;
      margin: 5% auto;
      background-position-x: center;
      background-position-y: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .content_canvas_chart{
        width: 100%;
        height: 98%;
        /*border: 1px red solid;*/
      }

    }
    /deep/.van-cell{
      margin-top: 10PX;
      border-bottom: 1px silver solid;
      border-top: 1px silver solid;
    }

    /deep/.van-cell__title{
      text-align: left;
    }

  }
</style>
