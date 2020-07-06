<!-- 移动驾驶舱首页 -->
<template>
	<div class="main_continer" :style="backgroundMain">
        <!-- 头部 -->
        <div class="header">
            <p>信贷驾驶舱</p>
        </div>

        <!-- 内容区 -->
        <div class="content">
            <!-- 仪表盘区域 -->
            <div class="dashboard_area" :style="dashboardBackground"> 

            </div>
            <!-- 按钮区 -->
            <div class="button_area">  
                <el-button size="small" class="button_color" @click="loanVolumeIndex">贷款量指标</el-button>
                <el-button size="small" class="button_color" @click="loanVolumeIndex">风险类指标</el-button>
                <el-button size="small" class="button_color" @click="loanVolumeIndex">业务类指标</el-button>
                <el-button size="small" class="button_color" @click="loanVolumeIndex">机构统计指标</el-button>

                <!-- <el-button size="small" class="button_color_bottom" @click="loanVolumeIndex">机构统计指标</el-button> -->
            </div>
        </div>

        <!-- 底部 -->
        <div class="footer">

        </div>
    </div>
</template>

<script>
    import { query } from "@/api/api"
    import { MessageBox } from "element-ui"

	export default {
		name: "home",
		data() {
			return {
                // 主页背景图
                backgroundMain: {
                    backgroundImage: 'url(' + require('./images/home.png') + ')',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'100% 100%'
                },
                // 仪表盘背景图
                dashboardBackground: {
                    backgroundImage: 'url(' + require('./images/dashboard.png') + ')',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'90% 90%'
                }
			}
		},
		methods: {
            loanVolumeIndex() {
                alert("贷款量指标");
            }
           
		},
		created() {
            
        },
        beforeDestroy () {
            
        },
        mounted(){
            // 自适应手机屏幕高度
            var clientHeight= document.documentElement.clientHeight;
            document.getElementsByClassName('main_continer')[0].style.height = clientHeight + 'px';
        },
        activated(){
            
        },
        computed: {
            
        },
		filters: {
            
		}
	}

</script>

<style lang="less" scoped>
    .main_continer{
        width: 100%;
        height: 100%;
        background: no-repeat center top;
        background-size: contain;

        .header{
            width: 100%;
            height: 20%;
            // border: 1px solid red;
            text-align: center;

            p {
                font-size: 50px;
                color: antiquewhite;
            }
        }

        .content{
            width: 100%;
            height: 70%;

            .dashboard_area{
                // border: 1px solid red;
                width: 100%;
                height: 70%;
                background-position-x: center;
                background-position-y: center;
            }

            .button_area{
                // border: 1px solid red;
                width: 100%;
                height: 30%;

                .button_color{
                    width: 42.5%;
                    height: 90px;
                    margin-left: 5%;
                    background-color: #003555;
                    color: #37D4ED;
                    border-color: #126785;
                    font-size: 30px;
                    outline: auto;
                    border: 0.1px solid #126785;
                    margin-top: 2%;
                    float: left;
                    border-radius: 2px;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .footer{
            width: 100%;
            height: 10%;
            // border: 1px solid red;
        }
    }
</style>
