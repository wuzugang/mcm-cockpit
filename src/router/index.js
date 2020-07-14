import Vue from 'vue';
import Router from 'vue-router';

import errorPage from "@/views/errorPage/errorPage"  // error页面
import Home from "@/views/home/homePage"

import Order from '@/views/index.vue';
import DemoChart from '@/views/DemoChart.vue';
import DemoF2 from '@/views/DemoF2.vue';

// 首页
import Touch from "@/views/demo_touch/touch"
import Test from "@/views/demo_touch/test"
import Meter from "@/views/demo_touch/meter"

// 风险类指标
import RiskNorm from '@/views/riskIndicators/riskNorm'

// 业务类指标
import Business from '@/views/business/businessIndicators'

import LoanTerm from '@/views/business/tabPage/loanTerm'
import LoanAmount from '@/views/business/tabPage/loanAmount'
import GuarantyMethod from '@/views/business/tabPage/guarantyMethod'
import LoanTop from '@/views/business/tabPage/loanTop10'
import IndustryInvest from '@/views/business/tabPage/industryInvest'
import LoanProducts from '@/views/business/tabPage/loanProducts'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: Home,
			name: "home",
		},
    {
      path: '/order',
      name: 'Order',
      component: Order,
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
			name: 'riskNorm',
			component: RiskNorm
		  },
			

			// 业务结构指标
			{
				path: '/business',
				name: 'business',
				component: Business
			  },
				{
					path: '/one',
					name: 'loanTerm',
					component: LoanTerm
				},
				{
					path: '/tow',
					name: 'loanAmount',
					component: LoanAmount
				},
				{
					path: '/three',
					name: 'guarantyMethod',
					component: GuarantyMethod
				},
				{
					path: '/four',
					name: 'loanTop',
					component: LoanTop
				},
				{
					path: '/five',
					name: 'industryInvest',
					component: IndustryInvest
				},
				{
					path: '/six',
					name: 'loanProducts',
					component: LoanProducts
				},
		  ]
})
