
<!-- 贷款TOP10 -->
<template>
  <div class="business_loan_top">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
        <!-- 图表区域 -->
        <div class="chart">
          <div id="myChart_top" class="content_chart"></div>
        </div>
    </div>
  </div>
</template>
<script>
import { accounting } from "@/assets/js/accounting.js"

export default {
  name: "loanTop",
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
            text: "最大10户贷款占比",
            x:'center',
            y:'top',
            textAlign:'left'
        },
        tooltip: {
            trigger: "item",
      //       formatter: function(data){
      //           // var txt =data.name+":   "+dataNum[data.dataIndex]+"人   ("+data.value+"%)";
      //           // return txt;
      //        }
        },
        grid:{//直角坐标系内绘图网格
            show:false,//是否显示直角坐标系网格。[ default: false ]
            left:"20%",//grid 组件离容器左侧的距离。
            right:"32%",
        },
         xAxis: [{
             type: 'value',
             show: false,
             boundaryGap : [ 0.1 ],
             barGap:'50%',//柱图间距
             axisLabel:{
                 margin:0
             },  
         }],
        yAxis: [
            {   
              type: 'category',
              position:'left',
              boundaryGap:false,
              scale:true,
              axisTick:{
                 show:false
              },
              // y 轴线
              axisLine:{
                 show:true,  
                  lineStyle: {
                       type: 'solid',
                       color:'#DADDDF',
                   }      
              },  
              // 分割线设置
              splitLine:{
                 show:false,  //显示分割线         
              },
              axisLabel : {//坐标轴刻度标签的相关设置。
                    textStyle: {
                       color: '#333333'
                   },
                interval:0,
                // rotate:"45",
                formatter : function(params){
                  let newParamsName = "";// 最终拼接成的字符串
                  let paramsNameNumber = params.length;// 实际标签的个数
                  let provideNumber = 4;// 每行能显示的字的个数
                  let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                  /**
                   * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                   */
                  if (paramsNameNumber > provideNumber) {
                      /** 循环每一行,row表示行 */
                      for (let row = 0; row < rowNumber; row++) {
                        newParamsName += params.substring(
                          row * provideNumber,
                          (row + 1) * provideNumber
                        ) + '\n';
                      }
                  } else {
                      // 将旧标签的值赋给新标签
                      newParamsName = params;
                  }
                  //将最终的字符串返回
                  return newParamsName
                }

              },
              data: ["田七", "赵六", "王五", "李四", "王麻子", "张三", "得事得", "水水水水水啊啊啊啊", "赵露", "周芒"],
              nameTextStyle: {
                color: "#ABADAE"
              }
            }
        ],
        toolbox: {
            feature: {
                magicType: {
                    type: ["line", "bar"],
                    show: false
                }
            }
        },
        calculable: true,
         series : [
             { 
                 name:'',
                 type:'bar',
                 barWidth : 10,//柱图宽度
                 itemStyle : {
                     normal: {
                        color: function(params) {
                             var colorList = [
                                 '#D1DBEB','#C9D4E8','#C1CDE4','#B2C0DE','#A2B2D7',
                                 '#93A5D0','#8397C9','#748AC3','#647CBC','#556FB5'
                             ];
                             return colorList[params.dataIndex]
                         },
                         label : {
                             show: true,
                             position: 'right',
                             color: '#7287C1',
                             formatter:function(params){
                                 return '{a|' + params.value/100 + '%}' + "  " +  '{b|' + accounting.formatMoney(params.value, "") + '}';
                             },
                             rich: {
                                  a: {
                                      color: '#3E637E',
                                      fontSize: 13
                                  },
                                  b: {
                                      color: '#3A3B3B',
                                      fontSize: 13
                                  }
                              }
                         }
                     },
                     emphasis:{
                         label : {
                             show: true,
                             textStyle:{
                                 fontSize:12
                             }

                         }
                     }
                 },
                 data: [2100, 3050, 4200, 5000, 6100, 8900, 11000, 13000, 18000, 20000]
             }
         ],
        color: ["#0B9F53"]
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
        let myChart = this.$echarts.init(document.getElementById('myChart_top'))
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
  .business_loan_top {
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