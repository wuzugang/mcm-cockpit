import Vue from 'vue';
import Router from 'vue-router';

import errorPage from "@/views/errorPage/errorPage"  // error页面
import Home from "@/views/home/homePage"

import Demo from '@/views/Demo.vue';
import DemoChart from '@/views/DemoChart.vue';
import DemoF2 from '@/views/DemoF2.vue';

// 首页
import Touch from "@/views/demo_touch/touch"
import Test from "@/views/demo_touch/test"
import Meter from "@/views/demo_touch/meter"

import testHome from '@/views/testNav/testHome'

import one from '@/views/testNav/one'
import tow from '@/views/testNav/tow'
import three from '@/views/testNav/three'
import four from '@/views/testNav/four'
import five from '@/views/testNav/five'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: Home,
			name: "home",
		},
		{
			path: '/chart',
			name: 'demoChart',
			component: DemoChart,
		},
		{
			path: '/f2chart',
			name: 'demof2',
			component: DemoF2,
		},
		{
			path: "/errorPage",
			component: errorPage,
			name: "errorPage"
		},
		{
			path: "/touch",
			component: Touch,
			name: "touch",
			meta: {
				breadIndex: 0,
				pageName: "首页"
			}
		},
		{
			path: "/test",
			component: Test,
			name: "test",
			meta: {
				breadIndex: 0,
				pageName: "首页"
			}
		},
		{
			path: "/meter",
			component: Meter,
			name: "meter",
			meta: {
				breadIndex: 0,
				pageName: "首页"
			}
		},

		{
			path: '/testHome',
			name: 'testHome',
			component: testHome
		  },
			{
			  path: '/one',
			  name: 'one',
			  component: one
			},
			{
			  path: '/tow',
			  name: 'tow',
			  component: tow
			},
			{
			  path: '/three',
			  name: 'three',
			  component: three
			},
			{
			  path: '/four',
			  name: 'four',
			  component: four
			},
			{
			  path: '/five',
			  name: 'five',
			  component: five
			}
		  ]
})
