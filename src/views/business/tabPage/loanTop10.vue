
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
         grid:{ 
            borderWidth:0,
            x:'20%',
            y:'25%',
            x2:'20%',
            y2:'15%',    
         },
         xAxis: [{
             type: 'value',
             show:false,
             boundaryGap:true,
             axisLabel:{
                 margin:0
             },  
         }],
        yAxis: [
            {   
              type: 'category',
              position:'left',
              boundaryGap:false,
              axisTick:{
                 show:false
              },
              // y 轴线
              axisLine:{
                 show:false,        
              },  
              // 分割线设置
              splitLine:{
                 show:false,  //显示分割线         
              },
              axisLabel:{

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
                                 return params.value/100+'%'  + "  " +  params.value;
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