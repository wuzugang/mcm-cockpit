
<!-- 客户经理统计指标 -->
<template>
  <div class="container" >
    <!-- 内容区 -->

    <!--贷款金额图-->
    <div class="content_canvas" :style="chartBackground">
      <div id="managerLoanBarChart" class="content_canvas_chart"></div>
    </div>

    <!--贷款余额图-->
    <div class="content_canvas" :style="chartBackground">
      <div id="managerBalanceBarChart" class="content_canvas_chart"></div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "managerTab",
    data() {
      return {
        // 图表背景图
        chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%'
        },
        //贷款总额
        loanOption:{
          color: ['#32B16C'],
          title: {
            text: "前五贷款额",
            x: "center",
            y: "top",
            padding: 20,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['张三', '重庆某某某有限公司', '王小二', '那谁谁', '那谁'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel:{
                interval: 0,
                formatter : function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 4;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = "";// 表示每一次截取的字符串
                      var start = p * provideNumber;// 开始截取的位置
                      var end = start + provideNumber;// 结束截取的位置
                      // 此处特殊处理最后一行的索引值
                      if (p == rowNumber - 1) {
                        // 最后一次不换行
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        // 每一次拼接字符串并换行
                        tempStr = params.substring(start, end) + "\n";
                      }
                      newParamsName += tempStr;// 最终拼成的字符串
                    }

                  } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name:'(金额/万元)'
            }
          ],
          series: [
            {
              name: '放款总额',
              type: 'bar',
              barWidth: '20%',
              data: [1000, 52, 200, 334, 390],
              itemStyle: {
                normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[10, 10, 10, 10],
                  // label: {
                  //   show: true,//是否展示
                  //   textStyle: {
                  //     fontWeight:'bolder',
                  //     fontSize : '12',
                  //     fontFamily : '微软雅黑',
                  //   }
                  // }
                }
              }
            }
          ]
        },
        balanceOption:{
          color: ['#7272F4'],
          title: {
            text: "前五贷款余额",
            x: "center",
            y: "top",
            padding: 20,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['张三', '重庆某某某有限公司', '王小二', '那谁谁', '那谁'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel:{
                interval: 0,
                formatter : function(params){
                  var newParamsName = "";// 最终拼接成的字符串
                  var paramsNameNumber = params.length;// 实际标签的个数
                  var provideNumber = 4;// 每行能显示的字的个数
                  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  // 条件等同于rowNumber>1
                  if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                      var tempStr = "";// 表示每一次截取的字符串
                      var start = p * provideNumber;// 开始截取的位置
                      var end = start + provideNumber;// 结束截取的位置
                      // 此处特殊处理最后一行的索引值
                      if (p == rowNumber - 1) {
                        // 最后一次不换行
                        tempStr = params.substring(start, paramsNameNumber);
                      } else {
                        // 每一次拼接字符串并换行
                        tempStr = params.substring(start, end) + "\n";
                      }
                      newParamsName += tempStr;// 最终拼成的字符串
                    }

                  } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name:'(金额/万元)'
            }
          ],
          series: [
            {
              name: '贷款余额',
              type: 'bar',
              barWidth: '20%',
              data: [1000, 520, 200, 100, 390],
              itemStyle: {
                normal: {
                  //柱形图圆角，初始化效果
                  barBorderRadius:[10, 10, 10, 10],
                  // label: {
                  //   show: true,//是否展示
                  //   textStyle: {
                  //     fontWeight:'bolder',
                  //     fontSize : '12',
                  //     fontFamily : '微软雅黑',
                  //   }
                  // }
                }
              }
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
        let loanChart = this.$echarts.init(document.getElementById('managerLoanBarChart'));
        let balanceChart = this.$echarts.init(document.getElementById('managerBalanceBarChart'));
        // 绘制图表
        // 防止越界，重绘canvas
        window.onresize = loanChart.resize;
        window.onresize = balanceChart.resize;
        // 设置option
        loanChart.setOption(this.loanOption, true);
        balanceChart.setOption(this.balanceOption, true);
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
      height: 45%;
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
      }

    }

  }
</style>
