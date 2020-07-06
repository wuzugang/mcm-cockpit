import axios from "axios"
import {
	Message,
	MessageBox,
	Loading,
} from "element-ui"

const BASE_API = "http://10.64.8.155:8081"

const httpRequest = axios.create({
	baseURL: BASE_API + "/mcm", //mcm是后端工程名
	// timeout: 5000   // 超时设置
})

let loadingInstance = ""

// 拦截请求，由于设置了headers，变为非简单请求，后台需设置 Access-Control-Allow-Methods、Access-Control-Allow-Headers
httpRequest.interceptors.request.use(
	config => {
		let reqPath = config.url.replace(config.baseURL, "")
		console.log(config)
		// 加loading
		loadingInstance = Loading.service({
			text : "请稍等...",
			background: "transparent",
			customClass : "file-upload-loading"
		})
        
		// 每个请求都携带usertoken
		let usertoken = sessionStorage.userInfo ? JSON.parse(sessionStorage.userInfo).usertoken : ""
		Object.assign(config.headers, {
			usertoken
		})

		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		Promise.reject(error)
	}
)

// 拦截响应
httpRequest.interceptors.response.use(
	res => {
		let code = parseInt(res.data.code)
		if (code == 200) {
			if(loadingInstance)	loadingInstance.close()
			return res.data.data
		} else if (code == 105) {
			MessageBox.alert("", {
				title: "提示",
				message: "用户未登录或登录已失效",
				callback: action => {
					window.globalVue.$router.push({
						path: "/login"
					})
				}
			})
			return Promise.reject(new Error("error"))
		} else {
			Message({
				message: res.data.msg,
				type: "error",
				duration: 2000
			})
			return Promise.reject(new Error("error"))
		}
	},
	err => {
		console.log("error:", "\n", err) // for debug
		if(loadingInstance)	loadingInstance.close()
		Message.closeAll()
		Message({
			message: "服务异常",
			type: "error",
			duration: 1500
		})
		return Promise.reject(err)
	}
)

export {
	httpRequest,
	BASE_API
}
