//按需引入echarts的组件，以便减少资源
import Vue from "vue";
//折线图
// import VeLine from 'v-charts/lib/line.common';

// import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// /* 引入echarts工具 */
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'
 
// Vue.component('v-chart', ECharts)
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

// Vue.component(VeLine.name, VeLine)
