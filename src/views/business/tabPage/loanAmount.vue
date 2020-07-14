
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
                 show:true,        
              },  
              // 分割线设置
              splitLine:{
                 show:false,  //显示分割线         
              },
              axisLabel:{
                
              },
              data: ["100万以上", "80-100万", "60-80万", "40-60万", "20-40万", "1-20万", "总计"],
              nameTextStyle: {
                color: "#ABADAE"
              }
            }
        ],

        // toolbox: {
        //     feature: {
        //         dataView: {
        //             readOnly: true
        //         },
        //         magicType: {
        //             type: ["line", "bar"],
        //             show: false
        //         }
        //     }
        // },
        // calculable: true,
      
         series : [
             {
                 name:'',
                 type:'bar',
                 itemStyle : {
                     normal: {
                         label : {
                             show: true,
                             position: 'right',
                             formatter:function(params){
                                 return params.value + "  " + params.value/100+'%';
                             },
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

  .content {
    width: 100%;
    height: 58%;
    margin-top: 8%;
    background-position-x: center;
    background-position-y: center;

    .chart {
      width: 86%;
      height: 83%;
      margin-left: 7%;
      margin-top: 8%;
      float: left;

      .content_chart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

