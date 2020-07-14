<template>
  <div class="container">
    <vue-title>
      <template v-slot:text>
        机构统计指标
      </template>
    </vue-title>
    <div class="container-body">
      <van-tabs v-model="activeName" type="card" animated>
        <van-tab title="机构统计" name="a">

          <div class="container_canvas">
            <div class="container_canvas_chart" id="orgBarLoanChart">

            </div>
          </div>

          <div class="container_canvas">
            <div class="container_canvas_chart" id="orgBarBanlanceChart">

            </div>
          </div>

        </van-tab>

        <van-tab title="客户经理" name="b">

          <div class="container_canvas">
            <div class="container_canvas_chart" id="custBarLoanChart"></div>
          </div>

          <div class="container_canvas">
            <div class="container_canvas_chart" id="custBarBanlanceChart"></div>
          </div>

        </van-tab>
      </van-tabs>


    </div>
  </div>
</template>

<script>
    import Title from "../components/vue-title";

    export default {
      name: "orgStatisticsView",
      components: {
        'vue-title':Title
      },
      data(){
        return{
          activeName:"a",
          orgLoanOption:{
            title: {
              text: "机构前五贷款金额",
              x: "center"
            },
            tooltip: {
              trigger: "axis"
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: true
                },
                magicType: {
                  show: false,
                  type: ["line", "bar"]
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            calculable: true,
            xAxis: [
              {
                type: "category",
                data: ["总行", "万州分行", "重庆分行", "西永支行", "某某支行"],
                scale: true,
                splitLine: {
                  lineStyle: {
                    width: 0
                  }
                }
              }
            ],
            yAxis: [
              {
                type: "value"
              }
            ],
            series: [
              {
                name: "贷款金额",
                type: "bar",
                data: [1001, 999, 888, 666, 222]
              }
            ]
          },
        }

      },
      created() {

      },
      mounted() {
        this.heightInit();
        this.drawOrgLoan();

      },
      methods:{
        // 自适应手机屏幕高度
        heightInit(){
          let clientHeight= document.documentElement.clientHeight;
          document.getElementsByClassName('container')[0].style.height = clientHeight + 'px';
        },
        drawOrgLoan(){
          let pieChart=this.$echarts.init(document.getElementById('orgBarLoanChart'));
          pieChart.setOption(this.orgLoanOption);
        },

      }
    }

</script>

<style scoped lang="less">
  *{
    box-sizing: border-box;
  }
  body{
    background-color: #FFFEFE;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    overflow:hidden;
  }
  .container-body{
    width: 100%;
    /*height: 93%;*/

    /deep/.van-nav-bar{
      background-color: #02629F;
    }
    /deep/.van-nav-bar__title{
      color: #FFFEFE;
      font-size: 28px;
    }
    /deep/.van-tabs--card{
      margin-top: 10px;

    }

    /deep/.van-tabs__nav--card{
      border: none;
      background-color: #FFFEFE;

    }
    /deep/.van-tabs__nav--card .van-tab{
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border: 1px #C0CED3 solid ;
      border-right: 1px #C0CED3 solid ;
      background-color: #FEFEFE;
      z-index: 1;
    }
    /deep/.van-tab__text--ellipsis{
      color: #999999;
    }
    /deep/.van-nav-bar__title .van-ellipsis{
      font-size: 28px;
    }
    /deep/.van-tabs__nav--card .van-tab.van-tab--active{
      background-color: #0063A5;
      z-index: 99;
    }

    .container_canvas{
      width: 95%;
      height: 250px;
      margin: 10px auto;
      background-image: url("../assets/img/bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      /*margin-top:10px;*/
      .container_canvas_chart{
        width: 100%;
        height: 100%;
      }
    }

    /*/deep/.van-tabs__nav--card .van-tab:nth-of-type(2){*/
    /*   position: relative;*/
    /*   left: -10px;*/
    /* }*/
    /*/deep/.van-tabs__nav--card .van-tab:nth-of-type(3){*/
    /*  position: relative;*/
    /*  left: -20px;*/
    /*}*/
    /*/deep/.van-tabs__nav--card .van-tab:nth-of-type(4){*/
    /*  position: relative;*/
    /*  left: -30px;*/
    /*}*/
    /*/deep/.van-tabs__nav--card .van-tab:nth-of-type(5){*/
    /*  position: relative;*/
    /*  left: -40px;*/
    /*}*/


  }

</style>
