
export const currencyOptions = [{  //币种
	label : "人民币 (CNY)",
	value : "CNY",
},{
	label : "美元 (USD)",
	value : "USD",
},{ 
	label : "欧元 (EUR)",
	value : "EUR",
},{
	label : "英镑 (GBP)",
	value : "GBP",
},{
	label : "日元 (YEN)",
	value : "YEN",
}]

import axios from "axios"

// axios方式下载公共方法
export function commonDownloadContract(url, params, fileName) {
	// axios方式下载pdf文件
	axios.get(url, {
		responseType: 'blob', //重要
		params: params
	}).then((data) => {
		if (!data) {
			return;
		}

		// 获取下载文件名(非IE下获取名称有问题,所以需要fileName)
		let disposition = data.headers['content-disposition'];
		let downLoadFileName = disposition == undefined || disposition == null || disposition == '' ? fileName + ".pdf" : disposition.split(';')[1].split('=')[1];
		
		try {
			// IE
			if('msSaveOrOpenBlob' in navigator){
				window.navigator.msSaveOrOpenBlob(data.data, downLoadFileName);
			} else {
				// 非IE
				let objectUrl = URL.createObjectURL(data.data); 

				const link = document.createElement('a');
				link.style.display = 'none'
				link.href = objectUrl;
				link.setAttribute('download', downLoadFileName);
				document.body.appendChild(link);
				link.click();
			}
		} catch (e) {
			this.$message({
				showClose: false,
				message: "下载异常！",
				type: "info"
			})

			return;
		}
	})
}

