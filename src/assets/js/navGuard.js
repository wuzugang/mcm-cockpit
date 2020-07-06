/**
 *     导航拦截 控制权限
 */

import router from "@/router"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style

NProgress.configure({
	showSpinner: false,
})

router.beforeEach((to, from, next) => {
	NProgress.start() // start progress bar
	next()
	NProgress.done()	
})
