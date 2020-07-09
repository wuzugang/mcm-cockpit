//按需引入echarts的组件，以便减少资源
import Vue from "vue";
//折线图
// import VeLine from 'v-charts/lib/line.common';
// Vue.component(VeLine.name, VeLine)
 
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 


