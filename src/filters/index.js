import {
	currencyOptions
} from "@/assets/js/optionsData.js"

// 金额格式化
export function getAns(val) {
	if (val == 0) {
		return "0.00"
	} else if (!val) return "0.00"
	let num = parseFloat(val)
	num = num.toFixed(2)
	return fmoney(num,2)
}

function fmoney(s, n) {
	// 金额格式化 s 为目标数字，n为保留几位
	n = n > 0 && n <= 20 ? n : 2
	s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + ""
	var l = s.split(".")[0].split("").reverse(),
		r = s.split(".")[1]
	var t = ""
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "")
	}
	return t.split("").reverse().join("") + "." + r
}

// 银行账号格式化
export function getBankAcount(val) {
	if (!val) return
	return val
		.toString()
		.replace(/\D/g, "")
		.replace(/....(?!$)/g, "$& ")
}

// 货币类型格式化
export function getCurrency(val) {
	if (!val) return
	switch (val) {
		case "CNY":
			return "￥"
		case "USD":
			return "$"
		case "EUR":
			return "€"
		case "GBP":
			return "￡"
		case "YEN":
			return "円"
		default:
			return
	}
}

// 货币中文显示
export function getcurrency(val) {
	if (!val) return
	let obj = currencyOptions.find(item => {
		return item.value == val
	})
	return obj.label
}

