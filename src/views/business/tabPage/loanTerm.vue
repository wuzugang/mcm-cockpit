
<!-- 贷款期限 -->
<template>
  <div class="business_loan_term">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
        <!-- 图表区域 -->
        <div class="chart">
          <div id="myChart_term" class="content_chart"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loanTerm",
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
              text: "贷款金额按期限分布",
              subtext: "（贷款金额单位：万元）",
              x: "center",
              padding: 10
          },
          tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)",
              show: true
          },
          toolbox: {
              show: false,
          },
          series: [
              {
                  name: "",
                  type: "pie",
                  center: ["50%", "55%"],
                  roseType: "radius",
                  label: {
                    normal: {
                      show: true,
                      formatter: '{c|{c}} {d|{d}%}\n{hr|}\n{b|{b}}',
                      rich: {
                        a: {
                          padding: 4
                        },
                        b: {
                          fontSize: 12,
                          align: 'left',
                          padding: 4,
                          color: "#A5A7A9"
                        },
                        hr: {
                          borderColor: '#4681ec',
                          width: '100%',
                          borderWidth: 1,
                          height: 0
                        },
                        d: {
                          fontSize: 12,
                          align: 'left',
                          padding: 4
                        },
                        c: {
                          fontSize: 12,
                          align: 'left',
                          color: "#333333"
                        }
                      }
                    },
                    emphasis: {
                      position: 'left',
                      show: true,
                      textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                      },
                      length: 1
                    }
                  },
                  labelLine: {
                      show: true,
                      length: 2,
                      length2: 5
                  },
                  data: [
                      {
                          value: 7000,
                          name: "1-5年"
                      },
                      {
                          value: 6000,
                          name: "5-10年"
                      },
                      {
                          value: 2000,
                          name: "10-15年"
                      },
                      {
                          value: 5000,
                          name: "15年以上"
                      }
                  ],
                  // selectedMode: "multiple",
                  radius: [60, 90],
                  clockWise: false,　　　　　　　　//默认逆时针
                  avoidLabelOverlap: false,　　　//避免标注重叠
              }
          ],
          color: ["#38A3A5", "#FAC05E", "#57CC99", "#22577A", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
          animation: true,
          animationDuration: 2000,
          animationEasing: "SinusoidalOut"
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
        let myChart = this.$echarts.init(document.getElementById('myChart_term'))
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
  .business_loan_term {
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
