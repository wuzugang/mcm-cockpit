
<!-- 担保方式 -->
<template>
  <div class="business_loan_guaranty">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
        <!-- 图表区域 -->
        <div class="chart">
          <div id="myChart_guaranty" class="content_chart"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "guarantyMethod",
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
              text: "抵押/质押/信用贷款占比",
              x: "center",
              top: "5%"
          },
          tooltip: {
              trigger: "item",
              formatter: "{a} <br>{b} : {c} ({d}%)",
              show: true
          },
          calculable: true,
          series: [
              {
                  name: "",
                  type: "pie",
                  radius: "55%",
                  scale: true,
                  center: ["50%", "50%"],
                  label: {
                    normal: {
                      show: true,
                      // formatter(v) {
                      //   let text = v.name;
                      //   let value_format = v.value;
                      //   let percent_format = Math.round(v.percent) + '%';
                      //   if (text.length <= 6) {
                      //     return `${text}\n${value_format}\n${percent_format}`;
                      //   } else if (text.length > 6 && text.length <= 12) {
                      //     return text = `${text.slice(0, 6)}\n${text.slice(6)}\n${value_format}\n${percent_format}`
                      //   } else if (text.length > 12 && text.length <= 18) {
                      //     return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12)}\n${value_format}\n${percent_format}`
                      //   } else if (text.length > 18 && text.length <= 24) {
                      //     return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18)}\n${value_format}\n${percent_format}`
                      //   } else if (text.length > 24 && text.length <= 30) {
                      //     return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24)}\n${value_format}\n${percent_format}`
                      //   } else if (text.length > 30) {
                      //     return text = `${text.slice(0, 6)}\n${text.slice(6, 12)}\n${text.slice(12, 18)}\n${text.slice(18, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}\n${value_format}\n${percent_format}`
                      //   }
                      // },

                      formatter: '{d|{d}%}\n{hr|}\n{b|{b}}',
                      lineStyle: {
                        color: 'yellow',
                        width: 2
                      },
                      rich: {
                        a: {
                          padding: 4
                        },
                        b: {
                          fontSize: 12,
                          align: 'left',
                          padding: 4,
                          color: "#4B4C4D"
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
                          align: 'left'
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
                      length: 10,
                      length2: 25
                  },
                  data: [
                      {
                          value: 35,
                          name: "抵押"
                      },
                      {
                          value: 32,
                          name: "质押"
                      },
                      {
                          value: 33,
                          name: "信用贷"
                      }
                  ],
                  clockWise: false,　　　　　　　　//默认逆时针
                  avoidLabelOverlap: false,　　　//避免标注重叠
              }
          ],
          color: ["rgb(71, 123, 188)", "rgb(255, 149, 149)", "rgb(112, 190, 167)"]
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
        let myChart = this.$echarts.init(document.getElementById('myChart_guaranty'))
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
  .business_loan_guaranty {
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