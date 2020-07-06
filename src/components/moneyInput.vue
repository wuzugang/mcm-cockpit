<!-- 
    名称：金额输入组件
    功能： 1.限制只能输入除数字、小数点
           2. 组件内部格式化输入的金额
 -->
<template>
    <div class="el-input el-input--small">
        <input class="el-input__inner" 
            maxlength="18" 
            ref="moneyInput" 
            placeholder="请输入金额"
            v-on:input="handelInput">
    </div>
</template>
<script>
import { accounting } from "@/assets/js/accounting.js"
export default {
	name: "moneyInput",
	data() {
		return {
		    fl: true,
		}
	},
	props: {
		value: [String, Number],
		disabled: Boolean,
		clearable: {
			type: Boolean,
			default: false,
		},
	},    
	methods: {
		distinctString(s) {
			var a
			while ((a = s.replace(/(\.)(.*?)\1/, "$1$2")) != s) s = a
			return s
		},
		handelInput($event) {
			// 限制输入处理
			if(this.$refs.moneyInput.value.length == 0) { //输入为空不做处理，直接返回
				this.$emit("input", inputVal)
				return
			} 
			this.$refs.moneyInput.value = this.$refs.moneyInput.value.replace(/[^\d.]/g,"") //限制输入"数字"和"."以外的字符
			this.$refs.moneyInput.value = this.distinctString(this.$refs.moneyInput.value) //限制输入第二个"."
			this.$refs.moneyInput.value = this.$refs.moneyInput.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3") //限制只能输入两位小数
			let inputVal = this.$refs.moneyInput.value //限制条件下产生的回传数据
			// console.log("inputVal:",inputVal)
			// 生成要展示的格式化数据
			if (inputVal.indexOf(".") == -1) {
				//没有小数点时只格式化，不保留小数位
				this.$refs.moneyInput.value = accounting.formatMoney(inputVal, "", 0)
			} else {
				let arr = inputVal.split(".")
				if(arr[1].length == 0){
					this.$refs.moneyInput.value = accounting.formatMoney(inputVal, "", 0) + "."
				}else if(arr[1].length == 1){
					this.$refs.moneyInput.value = accounting.formatMoney(inputVal, "", 1)
				}else if(arr[1].length == 2){
					this.$refs.moneyInput.value = accounting.formatMoney(inputVal, "", 2)
				}
			}
			this.$emit("input", inputVal) //回传数据给父组件
		}
	},
	created(){

	},
	mounted() {
		if(this.value){
			this.$refs.moneyInput.value = this.value
			this.handelInput()
		}

	},
	watch:{
		value(nVal,oVal){
			if(this.fl && nVal){// 这个方法只执行一次
				this.$refs.moneyInput.value = nVal
				this.handelInput()
				this.fl = false
			}
	    }
	}
}
</script>
<style lang='less' scoped>


</style>
