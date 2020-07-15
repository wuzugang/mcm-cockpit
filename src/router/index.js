import Vue from 'vue';
import Router from 'vue-router';

import errorPage from "@/views/errorPage/errorPage"  // error页面
import Home from "@/views/home/homePage"

//demo
import DemoChart from '@/views/DemoChart.vue';
import DemoF2 from '@/views/DemoF2.vue';

// 首页
import Touch from "@/views/demo_touch/touch"
import Test from "@/views/demo_touch/test"
import Meter from "@/views/demo_touch/meter"

// 风险类指标
import RiskNorm from '@/views/risk/riskNorm'

// 业务类指标
import Business from '@/views/business/businessIndicators'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: Home,
			name: "home",
		},
    //进件统计指标
    {
      path: '/orderIndex',
      component: () => import('@/views/orderIndex/orderIndexView.vue')
    },
    //机构统计指标
    {
      path: '/orgTab',
      component: () => import('@/views/orgIndex/tabPage/orgTab.vue')
    },
    {
      path: '/managerTab',
      component: () => import('@/views/orgIndex/tabPage/managerTab.vue')
    },
    {
      path: '/orgIndex',
      component: () => import('@/views/orgIndex/orgIndexView.vue')
    },
    //时效指标
    {
      path: '/creditApproveTab',
      component: () => import('@/views/taskIndex/tabPage/creditApproveTab.vue')
    },
    {
      path: '/putoutApproveTab',
      component: () => import('@/views/taskIndex/tabPage/putoutApproveTab.vue'),
    },
    {
      path: '/taskIndex',
      component: () => import('@/views/taskIndex/taskIndexView.vue')
    },
    //demo
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
    //错误显示页
		{
			path: "/errorPage",
			component: errorPage,
			name: "errorPage"
		},
		{
			path: "*",
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

		// 风险分类指标
		{
			path: '/risk',
			name: 'risk',
			component: RiskNorm
		},


		// 业务结构指标
		{
			path: '/business',
			name: 'business',
			component: Business
		}
	]
})
