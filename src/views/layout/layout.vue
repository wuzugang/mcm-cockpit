<template>
    <div class="home-container">
        <!-- 顶部 -->
        <header class="header-bar">
            <!-- 面包屑 -->
            <bread-crumb></bread-crumb>
        </header>
    </div>

</template>

<script>
import breadCrumb from "./components/breadCrumb"
import tagsView from "./components/tagsView"

export default {
	name: "",
	data() {
		return {
			menuCollapse: false,
			menumap: [],
			dialogTableVisible: false,
			dialogFormVisible: false,
			newUserData: [],
			newUserInfo: {},
		}
	},
	methods: {
		
	},
	created() {
		
	},
	computed: {
		
	},
	components: {
		breadCrumb,
		tagsView
	}
}
</script>

<style lang="less" scoped>
   
</style>