exports.install = function (Vue, options) {

	Vue.prototype.contentHeight = function () {
		// 自适应手机屏幕高度
		return document.documentElement.clientHeight + 'px';
	}
}



