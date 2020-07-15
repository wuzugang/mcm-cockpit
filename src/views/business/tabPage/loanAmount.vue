
<!-- 贷款金额 -->
<template>
  <div class="business_loan_amount">
    <!-- 内容区 -->
    <div class="content" :style="chartBackground">
      <!-- 图表区域 -->
      <div class="chart">
        <div id="myChart_amount" class="content_chart"></div>
      </div>
    </div>
  </div>
</template>
<script>

import { accounting } from "@/assets/js/accounting.js"
export default {
  name: "loanAmount",
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
            text: "贷款笔数按贷款金额分布",
            subtext: "（贷款笔数单位：笔）",
            x:'center',
            y:'top',
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
            left:"22%",//grid 组件离容器左侧的距离。
            right:"23%",
            top: "21%"
        },
         xAxis: [{
             type: 'value',
             show: false,
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
              offset: 2,
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
                       color: '#C1C4C5'
                   },
                interval:0,
              },
              data: ["100万以上", "80-100万", "60-80万", "40-60万", "20-40万", "1-20万", "总计"],
              nameTextStyle: {
                color: "#C1C4C5"
              }
            }
        ],
      
         series : [
            { // For shadow
                type: 'bar',
                barWidth : 15,//柱图宽度
                itemStyle: {
                    normal: {
                      color: 'rgba(0,0,0,0.05)'
                    },
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: [2264, 2264, 2264, 2264, 2264, 2264, 2264],   // TODO: 后端返回最大值
                animation: false
            },
            
             {
                 name:'',
                 type:'bar',
                 barWidth : 15,//柱图宽度
                 itemStyle : {
                     normal: {
                         label : {
                             show: true,
                             position: 'right',
                             formatter:function(params){
                                 return '{a|' + params.value + "  " + accounting.formatMoney(params.value/22.64, "") + '%}';   // 需后端返回比例
                             },
                             rich: {
                                  a: {
                                      color: '#3E637E',
                                      fontSize: 11,
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
                 data: [269, 100, 620, 385, 500, 390, 2264]
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
        let myChart = this.$echarts.init(document.getElementById('myChart_amount'))
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
.business_loan_amount {
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

