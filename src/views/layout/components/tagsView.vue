
<template>
    <div class="tags-view-container">
        <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
            <div 
                ref='tag' 
                class="tags-view-item" 
                :class="isActive(tag)?'active':''" 
                v-for="tag in Array.from(visitedViews)" 
                v-dragging="{ item: tag, list: visitedViews, group: 'tags'}"
                :to="tag.fullPath"
                @click.prevent.stop="$router.push({path: tag.fullPath})"
                :key="tag.fullPath" 
                @contextmenu.prevent="openMenu(tag,$event)">
                {{tag.title}}
                <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
            </div>
        </scroll-pane>
        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
            <li @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags">关闭所有</li>
        </ul>
    </div>
</template>

<script>

import scrollPane from "./scrollPane"

export default {
	components: { scrollPane },
	data() {
		return {
			visible: false,
			top: 0,
			left: 0,
			selectedTag: {}
		}
	},
	computed: {
		visitedViews() {
			return this.$store.state.tagsView.visitedViews
		}
	},
	watch: {
		$route() {
			// 当路由发生变化时，生成tag，
			this.addViewTags()
			// tag超过容器时，自动移动到当前tag
			this.moveToCurrentTag()
		},
		visible(value) {
			if (value) {
				document.body.addEventListener("click", this.closeMenu)
			} else {
				document.body.removeEventListener("click", this.closeMenu)
			}
		}
	},
	mounted() {
		this.addViewTags()
	},
	methods: {
		generateRoute() {
			// 生成路由信息，没有name的不生成tag
			// console.log("route:",this.$route)
			if (this.$route.name) {
				return this.$route
			}
			return false
		},
		isActive(route) {
			return (
				route.fullPath === this.$route.fullPath ||
                route.name === this.$route.name
			)
		},
		addViewTags() {
			const route = this.generateRoute()
			if (!route) {
				return false
			}
			this.$store.dispatch("addVisitedViews", route)
		},
		moveToCurrentTag() {
			// 获取到所有tag的标签div
			const tags = this.$refs.tag
			this.$nextTick(() => {
				for (const tag of tags) {
					// 获取到当前激活的标签div
					if (tag.attributes.to.nodeValue === this.$route.fullPath) {
						// 移动到当前标签位置
						this.$refs.scrollPane.moveToTarget(tag)
						break
					}
				}
			})
		},
		closeSelectedTag(view) {
			this.$store.dispatch("delVisitedViews", view).then(views => {
				// 如果是已激活的tag，要做路由跳转
				if (this.isActive(view)) {
					const latestView = views.slice(-1)[0]
					//如果关闭的不是最后一个tag，路由跳转到最后一个tag，否则跳转到首页
					if (latestView) {
						this.$router.push(latestView.fullPath)
					} else {
						this.$router.push({
							name : "agencyReminde"
						})
					}
				}
			})
		},
		closeOthersTags() {
			this.$router.push(this.selectedTag.fullPath)
			this.$store
				.dispatch("delOthersViews", this.selectedTag)
				.then(() => {
					this.moveToCurrentTag()
				})
		},
		closeAllTags() {
			this.$store.dispatch("delAllViews")
			this.$router.push({
				name: "agencyReminde"
			})
		},
		openMenu(tag, e) {
			// console.log("eve", e)
			this.visible = true
			this.selectedTag = tag
			this.left = e.clientX
			this.top = e.clientY - 44
		},
		closeMenu() {
			this.visible = false
		}
	}
}

// 监听路由变化，生成新的tag
</script>

<style lang='less' scoped>
.tags-view-container {
    .tags-view-wrapper {
        height: 34px;
        border-bottom: 1px solid #d8dce5;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
            0 0 3px 0 rgba(0, 0, 0, 0.04);
        .tags-view-item {
            cursor: pointer;
            display: inline-block;
            position: relative;
            height: 26px;
            line-height: 26px;
            border: 1px solid #d8dce5;
            color: #495060;
            background: #fff;
            padding: 0 8px;
            font-size: 12px;
            margin-left: 5px;
            margin-top: 4px;
            &:first-of-type {
                margin-left: 15px;
            }
            &.active {
                background-color: #409EFF;
                color: #fff;
                border-color: #409EFF;
                &::before {
                    content: "";
                    background: #fff;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 2px;
                }
            }
        }
    }
    .contextmenu {
        margin: 0;
        background: #fff;
        z-index: 2;
        position: absolute;
        list-style-type: none;
        padding: 5px 0;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
        li {
            margin: 0;
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                background: #eee;
            }
        }
    }
}
</style>

<style lang='less' scoped>
//reset element css of el-icon-close
.tags-view-wrapper {
    .tags-view-item {
        .el-icon-close {
            width: 16px;
            height: 16px;
            vertical-align: 2px;
            border-radius: 50%;
            text-align: center;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-origin: 100% 50%;
            &:before {
                transform: scale(0.6);
                display: inline-block;
                vertical-align: -3px;
            }
            &:hover {
                background-color: #b4bccc;
                color: #fff;
            }
        }
    }
}
</style>
