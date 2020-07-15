
<!-- 业务分布 -->
<template>
  <div class="risk_business_spread">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
      <!-- 五级分类数量分布 -->
      <div class="chart">
        <div id="myChart_spread" class="content_chart"></div>
      </div>
    </div>

    <!-- 客户预警分布 -->
    <div class="content" :style="chartBackground" style="margin-top:2%;">
      <div class="chart">
        <div id="myChart_warn" class="content_chart"></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "riskBusinessSpread",
  data() {
    return {
      // 图表背景图
      chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'90% 95%'
      },
      // 五级分类数量
      option: {
          tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)",
              show: true
          },
          legend: {
              orient: "vertical",
              x: "left",
              data: ["正常", "关注", "次级", "可疑", "损失"],
              selectedMode: false,
              y: "top",
              y: 20
          },
          toolbox: {
              show: false,
          },
          series: [
              {
                  name: "",
                  type: "pie",
                  radius: ["50%", "70%"],
                  label: {
                      normal: {
                          show: false,
                          position: 'center',
                          formatter: function(data){ // 设置圆饼图中间文字排版
                            return data.value + "\n" + data.name
                          }
                      },
                      emphasis: {
                          show: true, //文字至于中间时，这里需为true
                          textStyle: { //设置文字样式
                              fontSize: 25
                          }
                      }
                  },
                  data: [
                      {
                          value: 45,
                          name: "正常"
                      },
                      {
                          value: 25,
                          name: "关注"
                      },
                      {
                          value: 10,
                          name: "次级"
                      },
                      {
                          value: 15,
                          name: "可疑"
                      },
                      {
                          value: 5,
                          name: "损失"
                      }
                  ],
                  center: ["50%", "60%"],
              }
          ],
          color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed"],
          animation: true,
          animationDuration: 2000,
          animationEasing: "Linear",
          title: {
              text: "五级分类数量分布",
              x: "center",
              padding: 15
          }
      },
      // 客户预警
      option_warn: {
          title: {
              text: "客户预警分布",
              x: "center",
              top: 10,
              borderColor: "#ccc"
          },
          tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              orient: "vertical",
              x: "left",
              data: ["红色预警", "橙色预警", "黄色预警"],
              selectedMode: false,
              y: 20,
          },
          toolbox: {
              show: false,
          },
          calculable: true,
          series: [
              {
                  name: "",
                  type: "pie",
                  center: ["50%", "60%"],
                  itemStyle: {
                      normal: {
                          label: {
                              show: true,
                              formatter(v) {
                                let text = v.name;
                                let value_format = v.value;
                                let percent_format = Math.round(v.percent) + '%';
                                if (text.length <= 6) {
                                  return `${text}\n${value_format}\n${percent_format}`;
                                } else if (text.length > 6 && text.length <= 12) {
                                  return text = `${text.slice(0, 6)}\n${text.slice(6)}\n${value_format}\n${percent_format}`
                                } else if (text.length > 12 && text.length <= 18) {
                                  return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12)}\n${value_format}\n${percent_format}`
                                } else if (text.length > 18 && text.length <= 24) {
                                  return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18)}\n${value_format}\n${percent_format}`
                                } else if (text.length > 24 && text.length <= 30) {
                                  return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24)}\n${value_format}\n${percent_format}`
                                } else if (text.length > 30) {
                                  return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}\n${value_format}\n${percent_format}`
                                }
                              },
                              position: "top",
                              textStyle: {
                                  fontSize: 12,
                                  color: "rgb(0, 95, 191)"
                              }
                          },
                      }
                  },
                  labelLine: {
                    show: true,
                    normal: {
                      lineStyle: {
                        color: 'red',
                        length: 1,
                        length2: 1
                      },
                    }
                  },
                  data: [
                      {
                          value: 25,
                          name: "红色预警"
                      },
                      {
                          value: 66,
                          name: "橙色预警"
                      },
                      {
                          value: 234,
                          name: "黄色预警"
                      }
                  ],
                  radius: "55%",
                  selectedMode: "single",
              }
          ],
          animation: true,
          animationDuration: 2000,
          animationEasing: "BounceOut",
          color: ["rgb(255, 0, 0)", "rgb(255, 127, 0)", "rgb(255, 255, 0)"]
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
        let myChart = this.$echarts.init(document.getElementById('myChart_spread'))
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = myChart.resize;
        // 设置option
        myChart.setOption(this.option, true);

        // 初始化echarts实例
        let chart_warn = this.$echarts.init(document.getElementById('myChart_warn'))
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = chart_warn.resize;
        // 设置option
        chart_warn.setOption(this.option_warn, true);
    },
  },
  mounted(){
      // 初始化图表
      this.draw();
  },
};
</script>
<style lang="less" scoped>
.risk_business_spread {
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

