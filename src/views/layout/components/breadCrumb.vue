<!-- 面包屑 -->
<template>
    <el-breadcrumb separator="/ ">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item 
                :key="index"
                v-for="(item,index) in crumbList" 
                :class="{ 'last-item' : index == crumbList.length-1}" 
                @click.native="routerGo(item.name, index==crumbList.length-1)">
                {{item.pageName}}
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
export default {
	name: "breadCrumb",
	data() {
		return {
			crumbList: []
		}
	},
	methods: {
		routerGo(name, flag) {
			if (!flag) {
				this.$router.push({
					name
				})
			}
		},
		createCrumbList(to) {
			let crumbArr = sessionStorage.crumbList
				? JSON.parse(sessionStorage.crumbList)
				: []

			let name = to.name
			let pageName = to.meta.pageName
			let obj = {
				name,
				pageName
			}
			if (parseInt(to.meta.breadIndex) == 0) {
				//如果即将进入的页面是最上层，删除list重新生成
				crumbArr = []
				crumbArr.push(obj)
			} else {
				//删除该元素层级后的其他元素，插入该元素
				let breadIndex = to.meta.breadIndex
				crumbArr.splice(breadIndex, crumbArr.length - breadIndex, obj)
			}
			this.crumbList = crumbArr
			sessionStorage.crumbList = JSON.stringify(crumbArr) //防止刷新丢失数据
		}
	},
	created() {
		this.createCrumbList(this.$route)
	},
	watch: {
		$route(to, from) {
			// console.log("$route",this.$route.matched)
			// this.crumbList = this.$route.matched
			// 对路由变化作出响应...
			this.createCrumbList(to)
		}
	}
}
</script>
<style lang='less' scoped>
/*fade*/
.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-move {
    transition: all 0.5s;
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>
