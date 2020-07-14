
<!-- 任务时效统计指标 -->
<template>
  <div class="container" :style="{ height: contentHeight() }">
    <vue-title>
      <template v-slot:text>
        任务时效指标
      </template>
    </vue-title>

    <!--授信审批流程任务时效-->
    <div class="content_canvas" :style="chartBackground">
      <div id="creditApproveChart" class="content_canvas_chart"></div>
    </div>

    <!--放贷审批流程任务时效-->
    <div class="content_canvas" :style="chartBackground">
      <div id="putoutApproveChart" class="content_canvas_chart"></div>
    </div>

  </div>
</template>
<script>
  import Title from '../../components/vue-title';
  export default {
    name: "taskIndexView",
    components: {
      'vue-title':Title
    },
    data() {
      return {
        // 图表背景图
        chartBackground: {
          backgroundImage: 'url(' + require('@/assets/img/contentImg/dashboard.png') + ')',
          backgroundRepeat:'no-repeat',
          backgroundSize:'100% 100%'
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
