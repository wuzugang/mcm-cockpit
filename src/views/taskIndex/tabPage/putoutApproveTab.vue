
<!--任务时效指标 -->
<template>
  <div class="container" >
    <!-- 内容区 -->

    <!--授信流程任务时效图-->
    <div class="content_canvas" :style="chartBackground">
      <div id="putoutApproveLineChart" class="content_canvas_chart"></div>
    </div>



  </div>
</template>
<script>
  export default {
    name: "putoutApproveTab",
    data() {
      return {
        // 图表背景图
        chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%'
        },
        putoutApproveOption:{
          title: {
            text: "放贷审批流程时效",
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
              name: "时间/小时"
            }
          ],
          series: [
            {
              name: "时间/小时",
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
                        offset: 0, color: '#7272F4' // 0% 处的颜色
                      }, {
                        offset: 1, color: '#7272F4' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                    }
                  }
                }
              },
              data: [10, 8, 8, 8, 12]
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
        let putoutApproveChart = this.$echarts.init(document.getElementById('putoutApproveLineChart'));
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = putoutApproveChart.resize;
        // 设置option
        putoutApproveChart.setOption(this.putoutApproveOption, true);
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
      margin: 2% auto;
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

  }
</style>
