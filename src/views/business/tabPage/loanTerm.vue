
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
            x: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // legend: {
        //     data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6"],
        //     selectedMode: false,
        //     x: "center",
        //     y: "bottom"
        // },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                name: "面积模式",
                type: "pie",
                radius: [30, 90],
                center: ["50%", "50%"],
                roseType: "area",
                data: [
                    {
                        value: 10,
                        name: "rose1"
                    },
                    {
                        value: 5,
                        name: "rose2"
                    },
                    {
                        value: 15,
                        name: "rose3"
                    },
                    {
                        value: 25,
                        name: "rose4"
                    },
                    {
                        value: 15,
                        name: "rose5"
                    },
                    {
                        value: 30,
                        name: "rose6"
                    }
                ]
            }
        ],
        color: ["rgb(56, 163, 165)", "rgb(34, 87, 122)", "rgb(250, 192, 94)", "rgb(87, 204, 153)", "rgb(81, 135, 110)", "rgb(211, 158, 158)"]
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
