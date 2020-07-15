
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
          tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)",
              show: true
          },
          legend: {
              orient: "horizontal",
              x: "center",
              selectedMode: "multiple",
              y: "bottom",
              //图例的形状，选择类型有："circle"（圆形）、
              // "rectangle"（长方形）、"triangle"（三角形）、"diamond"（菱形）、"emptyCircle"（空心圆）、
　　　　　　　　//"emptyRectangle"（空心长方形）、"emptyTriangle"（空心三角形）、"emptyDiamon"（空心菱形），还可以放自定义图片，格式为"image://path",
　　　　　　　　//path为图片路径
              icon: "diamond",
              itemWidth: 10,
              itemHeight: 8,
              itemGap: 8,
              formatter: [
                  '{a|{name}}'
              ].join('\n'),
              textStyle: {
                  rich: {
                      a: {
                          width: 120,
                          color: '#909399',
                          fontSize: 12,
                          lineHeight: 12
                      }
                  },
              },
          },
          toolbox: {
              show: false,
          },
          series: [
              {
                  name: "贷款笔数",
                  type: "pie",
                  radius: ["40%", "50%"],
                  itemStyle: {
                      normal: {
                          label: {
                              show: true,
                              formatter: '{d}%',
                              position: "top",
                              textStyle: {
                                  fontSize: 12,
                                  color: "#756A5E"
                              }
                          },
                          labelLine: {
                              show: true,
                              lineStyle: {
                                color: '#D6DBDE'
                              },
                          }
                      },
                      emphasis: {
                          label: {
                              show: true,
                              position: "center",
                              textStyle: {
                                  fontSize: "15",
                                  fontWeight: "bold"
                              }
                          }
                      }
                  },
                  data: [
                      {
                          value: 335,
                          name: "平安易贷"
                      },
                      {
                          value: 310,
                          name: "委托贷款"
                      },
                      {
                          value: 234,
                          name: "同业投资"
                      },
                      {
                          value: 135,
                          name: "医生贷"
                      },
                      {
                          value: 444,
                          name: "个人经营性贷款"
                      },
                      {
                          value: 231,
                          name: "个人一手住房贷款"
                      },
                      {
                          value: 222,
                          name: "个人二手住房贷款"
                      },
                      {
                          value: 333,
                          name: "个人一手商业住房贷款"
                      },
                      {
                          value: 444,
                          name: "个人二手商业住房贷款"
                      },
                      {
                          value: 555,
                          name: "个人消费贷款"
                      }
                  ],
                  // selectedMode: "multiple",
                  center: ["50%", "40%"]
              }
          ],
          animation: true,
          animationDuration: 2000,
          animationEasing: "BackInOut",
          title: {
              text: "贷款笔数按行业投向分类占比",
              x: "center",
              padding: 10
          },
          color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b"]
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
      height: 70%;
      margin-top: 6%;
      background-position-x: center;
      background-position-y: center;

      .chart{
        width: 86%;
        height: 90%;
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