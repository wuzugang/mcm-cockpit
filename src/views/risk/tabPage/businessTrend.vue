
<!-- 业务走势 -->
<template>
  <div class="risk_business_trend">
    <!-- 内容区 -->
    <!-- 逾期/不良率图表区域 -->
    <div class="content" :style="chartBackground">
      <div class="chart">
        <div id="myChart_trend" class="content_chart"></div>
      </div>
    </div>

    <!-- 五级分类金额走势图 -->
    <div class="content" :style="chartBackground" style="margin-top:2%;">
      <div class="chart">
        <div id="myChart_level" class="content_chart"></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "riskBusinessTrend",
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
          title: {
              text: "逾期/不良率走势图",
              x: "center",
              top: 10
          },
          tooltip: {
              trigger: "axis",
              show: true,
              showDelay: 20,
              hideDelay: 100,
              transitionDuration: 0.4
          },
          legend: {
              data: ["逾期", "不良"],
              selectedMode: false,
              x: "center",
              itemHeight: 12,
              padding: 40
          },
          toolbox: {
              feature: {
                  magicType: {
                      type: ["line", "bar", "stack", "tiled"],
                      show: false
                  }
              }
          },
          calculable: true,
          xAxis: [
              {
                  type: "category",
                  data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  boundaryGap: false
              }
          ],
          yAxis: [
              {
                  type: "value"
              }
          ],
          series: [
              {
                  name: "逾期",
                  type: "line",
                  smooth: true,
                  itemStyle: {
                      normal: {
                          areaStyle: {
                              type: "default"
                          }
                      }
                  },
                  data: [10, 12, 21, 54, 33, 67, 80, 10, 5, 18, 55, 47],
                  symbolSize: 1
              },
              {
                  name: "不良",
                  type: "line",
                  smooth: true,  // 是否平滑曲线
                  itemStyle: {
                      normal: {
                          areaStyle: {
                              type: "default"
                          }
                      }
                  },
                  data: [30, 66, 79, 58, 49, 14, 16, 25, 16, 23, 66, 84],
                  symbolSize: 1
              }
          ],
          backgroundColor: "rgba(0,0,0,0)",
          color: ["rgb(234, 160, 145)", "#87cefa"],
          grid: {
              x: 30,
              y: 70,
              x2: 10,
              height: 160,
          },
          animation: true,
          animationDuration: 1500,
          animationEasing: "QuadraticIn"
      },
      // 五级分类走势图
      option_level: {
          title: {
              text: "五级分类金额走势图",
              x: "center",
              top: 10
          },
          tooltip: {
              trigger: "axis",
              show: true
          },
          legend: {
              data: ["正常", "关注", "次级", "可疑", "损失"],
              selectedMode: false,
              x: "center",
              itemHeight: 12,
              itemWidth: 15,
              padding: 40,
              itemGap: 2
          },
          toolbox: {
              show: false,
              feature: {
                  dataView: {
                      readOnly: true
                  },
                  magicType: {
                      type: ["line", "bar"],
                      show: false
                  }
              }
          },
          xAxis: [
              {
                  type: "category",
                  data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  boundaryGap: false,
                  // name: "月份",
                  // nameLocation: "end",
                  // nameTextStyle: {
                  //     align: "left",
                  //     baseline: "middle"
                  // },
                  // position: "bottom"
              }
          ],
          yAxis: [
              {
                  type: "value",
                  name: "万元",
                  nameTextStyle: {
                      color: "#6DB3D3",
                      align: "right",
                      baseline: "bottom"
                  }
              }
          ],
          series: [
              {
                  name: "正常",
                  type: "line",
                  data: [11, 15, 2, 6, 8, 2, 15, 19, 24, 12, 5, 22],
                  smooth: false,
                  symbolSize: 2
              },
              {
                  name: "关注",
                  type: "line",
                  data: [2, 11, 5, 17, 15, 25, 9, 16, 6, 12, 20, 14],
                  smooth: false,
                  symbolSize: 2
              },
              {
                  type: "line",
                  name: "次级",
                  data: [1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 17, 20],
                  smooth: false,
                  symbolSize: 2
              },
              {
                  type: "line",
                  name: "可疑",
                  data: [21, 19, 17, 15, 12, 9, 6, 3, 14, 15, 17, 22],
                  smooth: false,
                  symbolSize: 2
              },
              {
                  type: "line",
                  name: "损失",
                  data: [9, 7, 6, 5, 3, 1, 4, 8, 12, 10, 5, 15],
                  smooth: false,
                  symbolSize: 2
              }
          ],
          animation: true,
          animationDuration: 2000,
          animationEasing: "QuadraticOut",
          grid: {
              x: 30,
              y: 70,
              x2: 10,
              height: 160,
          },
          color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed"]
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
        // 逾期/不良率走势图 
        // 初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart_trend'))
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = myChart.resize;
        // 设置option
        myChart.setOption(this.option, true);

        // 五级分类金额走势图
        // 初始化echarts实例
        let chart_level = this.$echarts.init(document.getElementById('myChart_level'))
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = chart_level.resize;
        // 设置option
        chart_level.setOption(this.option_level, true);
    },
  },
  mounted(){
      // 初始化图表
      this.draw();
  },
};
</script>
<style lang="less" scoped>
.risk_business_trend {
  height: 100%;
  width: 100%;

  .content{
      width: 100%;
      height: 49%;
      background-position-x: center;
      background-position-y: center;

      .chart{
        width: 86%;
        height: 90%;
        padding-top: 2%;
        margin-left: 7%;

        .content_chart{
            width: 100%;
            height: 100%;
        }
      }
  }
}
</style>

