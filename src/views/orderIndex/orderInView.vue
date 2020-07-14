<template>
  <div class="container">
    <vue-title>
      <template v-slot:text>
        进件统计指标
      </template>
    </vue-title>

    <div class="container_body">
      <div class="container_vant">
        <van-cell  title="选择渠道" is-link :value="channelValue" @click="chooseChannel"/>
        <van-popup v-model="channelShow" round position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @cancel="channelShow = false"
            @confirm="confirmChannel"
          />
        </van-popup>

        <van-cell  title="选择日期" is-link :value="dateValue" @click="chooseDate"/>
        <van-calendar v-model="dateShow" color="#00629E" @confirm="confirmDate"/>
      </div>
      <div class="container-bar"></div>

      <div class="container_canvas">
          <div class="container_canvas_chart" id="pieChart"></div>
      </div>

      <div class="container_piece">
        <div class="piece_tag">
          <span class="tag_value">{{applyTotal}}</span>
          <span class="tag_text">累计申请件数(件)</span>
        </div>

        <div class="piece_tag">
          <span class="tag_value">{{passRate}}</span>
          <span class="tag_text">审批通过率(%)</span>
        </div>

        <div class="piece_tag">
          <span class="tag_value">{{passTotal}}</span>
          <span class="tag_text">审批通过件数(件)</span>
        </div>

        <div class="piece_tag">
          <span class="tag_value">{{refuseTotal}}</span>
          <span class="tag_text">审批拒绝件数(件)</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Title from '../../components/vue-title';

  export default {
    components: {
      'vue-title':Title
    },
    data () {
      return{
        columns:['总行条线','分行条线'],
        channelShow:false,
        channelValue:"",
        dateShow:false,
        dateValue:"",
        applyTotal:9999,
        passTotal:8888,
        refuseTotal:88,
        passRate:88.89,
        option:{
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: "horizontal",
            x: "center",
            y:"bottom",
            data: ['审批中', '审批通过', '审批拒绝']
          },
          calculable: true,
          series: [
            {
              name: '类型',
              type: 'pie',
              radius: ['60%', '80%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 335, name: '审批中'},
                {value: 310, name: '审批通过'},
                {value: 20, name: '审批拒绝'}
              ]
            }
          ],
          color: ["rgb(255, 127, 80)", "#87cefa", "rgb(218, 112, 214)", "#32cd32", "#6495ed", "#ff69b4", "rgb(186, 85, 211)", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "rgb(123, 104, 238)", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"]
        }
      }

    },

    created() {

    },
    mounted(){
      // 自适应手机屏幕高度
      var clientHeight= document.documentElement.clientHeight;
      document.getElementsByClassName('container')[0].style.height = clientHeight + 'px';

      this. draw();

    },

    methods: {
      //选择渠道
      chooseChannel () {
        this.channelShow=true;
      },
      //选择日期
      chooseDate(){
        this.dateShow=true;
      },
      //格式化日期
      formatDate(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
      },
      //确认按钮
      confirmDate(date) {
        this.dateShow = false;
        this.dateValue = this.formatDate(date);
      },
      confirmChannel(value){
        this.channelValue=value;
        this.channelShow=false;
      },
      //画图
      draw(){
        let pieChart=this.$echarts.init(document.getElementById('pieChart'));
        pieChart.setOption(this.option);
      }

    }
  };
</script>

<style lang="less" >
  body{
    background-color: #FFFEFE;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .container_body{
    width: 100%;
    height: 93%;
    .container_vant{
      height: 15%;
    }
    .container-bar{
      width: 100%;
      height: 2%;
      background-color: #F3F3F3;
    }
    .container_canvas{
      width: 95%;
      margin: 1% auto;
      height: 45%;
      background-image: url("../../assets/img/bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .container_canvas_chart{
        width: 100%;
        height: 95%;
      }
    }
    .container_piece{
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      background-color: #F3F3F3;
      margin-top:3%;

      .piece_tag{
        width: 45%;
        height: 42%;
        border-radius: 10PX;
        background-color:#FFFEFE ;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .tag_value{
          color: #E18F19;
          font-size: 20PX;
        }

        .tag_text{
          font-size: 16PX;
        }
      }

    }
  }


</style>


