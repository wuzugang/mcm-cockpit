const tagsView = {
	state: {
		visitedViews: [], //标签的数组 {fullPath,name,title}
		cachedViews: [], //页面缓存的数组，根据页面的name识别，不支持多路由指向同一页面的页面组件如signContract
	},
	mutations: {
		ADD_VISITED_VIEWS: (state, view) => {       
			//新页面新增标签，已打开的替换掉fullPath不一样的
			let viewTag = {
				name: view.name,
				path: view.path,
				fullPath: view.fullPath,
				title: view.meta.pageName || "no-name"
			}
			if(!state.visitedViews.some(v => v.name === view.name)){
				state.visitedViews.push(viewTag)
			}else{
				if (!state.visitedViews.some(v => v.fullPath === view.fullPath)){
					for (const [i, v] of state.visitedViews.entries()) {
						if (v.path === view.path) {
							// state.visitedViews.splice(i, 1, viewTag) //标签刷新放原位
							state.visitedViews.splice(i, 1)
							state.visitedViews.push(viewTag)
							break
						}
					}            
				}             
			}
			// 缓存 meta中该页面可以有缓存
			if (!view.meta.noCache) {
				// 缓存数组中去重
				if (!state.cachedViews.some(v => v === view.name)) {
					state.cachedViews.push(view.name)
				}
			}
            
		},
		DEL_VISITED_VIEWS: (state, view) => {
			for (const [i, v] of state.visitedViews.entries()) {
				if (v.fullPath === view.fullPath) {
					state.visitedViews.splice(i, 1)
					break
				}
			}
			for (const i of state.cachedViews) {
				if (i === view.name) {
					const index = state.cachedViews.indexOf(i)
					state.cachedViews.splice(index, 1)
					break
				}
			}
		},
		DEL_OTHERS_VIEWS: (state, view) => {
			for (const [i, v] of state.visitedViews.entries()) {
				if (v.fullPath === view.fullPath) {
					state.visitedViews = state.visitedViews.slice(i, i + 1)
					break
				}
			}
			for (const i of state.cachedViews) {
				if (i === view.name) {
					const index = state.cachedViews.indexOf(i)
					state.cachedViews = state.cachedViews.slice(index, i + 1)
					break
				}
			}
		},
		DEL_ALL_VIEWS: (state) => {
			state.visitedViews = []
			state.cachedViews = []
		}
	},
	actions: {
		addVisitedViews({
			commit
		}, view) {
			commit("ADD_VISITED_VIEWS", view)
		},
		delVisitedViews({
			commit,
			state
		}, view) {
			return new Promise((resolve) => {
				commit("DEL_VISITED_VIEWS", view)
				resolve([...state.visitedViews])
			})
		},
		delOthersViews({
			commit,
			state
		}, view) {
			return new Promise((resolve) => {
				commit("DEL_OTHERS_VIEWS", view)
				resolve([...state.visitedViews])
			})
		},
		delAllViews({
			commit,
			state
		}) {
			return new Promise((resolve) => {
				commit("DEL_ALL_VIEWS")
				resolve([...state.visitedViews])
			})
		}
	}
}
export default tagsView
