<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <!--<router-view>路由器视图-->
        <router-view>
        </router-view>
    </transition>
  </div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			theme: ""
		}
	},
	methods: {},
	created() {}
}
</script>

<style lang="less" scoped>

#app {
    position: relative;
    width: 100%;
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
