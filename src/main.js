import Vue from 'vue';
import ElementUI from "element-ui"
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import * as filters from "./filters" // global filters
import components from "@/components" //全局组件
import base from './base' // 全局函数
import VueTouch from 'vue-touch'
import 'vant/lib/index.css'
import "@/components/vant/vant";
import "@/components/echarts/v-charts";
import "@/components/f2/f2";
import "@/components/particles/particles";
import "@/components/swiper/swiper";
// rem
import "lib-flexible";

// 导航钩子放在Vue实例化之前
import "./assets/js/navGuard" 

// Vue.config.productionTip = false;


Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
	threshold: 100 // 手指左右滑动距离
}

Vue.use(ElementUI, {
	size: "small"
})
Vue.use(components)
Vue.use(base);


// register global utility filters.
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

var globalVue = new Vue({
	router,
	store,
	render: (h) => h(App),
  }).$mount('#app');

window.globalVue = globalVue
window.log = console.log.bind(console)
window.logJSON = param => {
	console.log(JSON.stringify(param, null, 2))
}
