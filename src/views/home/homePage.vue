<!-- 移动驾驶舱首页 -->
<template>
	<div class="main_continer" :style="backgroundMain">
        <!-- 头部 -->
        <div class="header">
            <div class="header_title">信贷驾驶舱</div>
        </div>

        <!-- 内容区 -->
        <div class="content">
            <!-- 仪表盘区域 -->
            <div class="dashboard_area" :style="dashboardBackground"> 
                <div class="dashboard_content">
                    <div id="myChart" class="dashboard_chart"></div>
                    <!-- <v-chart  ref="runTimes_creditChart" class="dashboard_chart"></v-chart> -->
                </div>
            </div>
            <!-- 按钮区 -->
            <div class="button_area">  
                <div class="button_color" @click="loanVolumeIndex">贷款量指标</div>
                <div class="button_color" @click="riskIndicators">风险类指标</div>
                <div class="button_color" @click="businessIndicators">业务类指标</div>
                <div class="button_color" @click="orgStatisticalIndicators">机构统计指标</div>
                <div class="button_task" @click="taskEffectIndicators">任务时效指标</div>
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
                    backgroundSize:'90% 85%'
                },


                option: {
                    backgroundColor: '#1b1b1b',
                    tooltip: {
                        formatter: '{a} <br/>{c} {b}'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    series: [
                        {
                            name: '速度',
                            type: 'gauge',
                            min: 0,
                            max: 220,
                            splitNumber: 11,
                            radius: '50%',
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                                    width: 3,
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            axisLabel: {            // 坐标轴小标记
                                fontWeight: 'bolder',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10
                            },
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            splitLine: {           // 分隔线
                                length: 25,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            pointer: {           // 分隔线
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    fontStyle: 'italic',
                                    color: '#fff',
                                    shadowColor: '#fff', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            detail: {
                                backgroundColor: 'rgba(30,144,255,0.8)',
                                borderWidth: 1,
                                borderColor: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 5,
                                offsetCenter: [0, '50%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    color: '#fff'
                                }
                            },
                            data: [{value: 40, name: 'km/h'}]
                        }
                    ]
                }
			}
		},
		methods: {
            /**
             * 贷款量指标
             */
            loanVolumeIndex() {
                alert("贷款量指标");
            },

            /**
             * 风险类指标
             */
            
            riskIndicators() {
                alert("风险类指标");
            },

            /**
             * 业务类指标
             */
            businessIndicators() {
                alert("业务类指标");
            },

            /**
             * 机构统计指标
             */
            orgStatisticalIndicators() {
                alert("机构统计指标");
            },

            /**
             * 任务时效指标
             */
            taskEffectIndicators() {
                alert("任务时效指标");
            },
           
            /**
             * 绘制仪表盘图表
             */
            draw() {
                // 初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                // 防止越界，重绘canvas
                window.onresize = myChart.resize;
                // 设置option
                myChart.setOption(this.option);
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

            // 初始化图表
            this.draw();
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

            &_title{
                font-size: 50px;
                color: antiquewhite;
                padding-top: 10%;
            }
        }

        .content{
            width: 100%;
            height: 70%;

            .dashboard_area{
                width: 100%;
                height: 60%;
                background-position-x: center;
                background-position-y: center;
                
                .dashboard_content{
                    width: 80%;
                    height: 70%;
                    padding-top: 12%;
                    margin-left: 10%;

                    .dashboard_chart{
                        width: 100%;
                        height: 100%;
                    }
                }
                
            }

            .button_area{
                width: 100%;
                height: 40%;

                .button_color{
                    border: 1px solid #126785;
                    width: 42.5%;
                    height: 90px;
                    margin-left: 5%;
                    background-color: #003555;
                    color: #37D4ED;
                    font-size: 30px;
                    margin-top: 3%;
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 0 2.5vw #237ad4 inset;
                    background: linear-gradient(#1359df, #1359df) left top,
                    linear-gradient(#1359df, #1359df) left top,
                    linear-gradient(#1359df, #1359df) right top,
                    linear-gradient(#1359df, #1359df) right top,
                    linear-gradient(#1359df, #1359df) left bottom,
                    linear-gradient(#1359df, #1359df) left bottom,
                    linear-gradient(#1359df, #1359df) right bottom,
                    linear-gradient(#1359df, #1359df) right bottom;
                    background-repeat: no-repeat;
                    background-size: 0.1vw 18vw, 1.5vw 0.1vw;
                }

                .button_task{
                    border: 1px solid #126785;
                    width: 90%;
                    height: 90px;
                    margin-left: 5%;
                    background-color: #003555;
                    color: #37D4ED;
                    font-size: 30px;
                    margin-top: 3%;
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 0 2.5vw #237ad4 inset;
                    background: linear-gradient(#1359df, #1359df) left top,
                    linear-gradient(#1359df, #1359df) left top,
                    linear-gradient(#1359df, #1359df) right top,
                    linear-gradient(#1359df, #1359df) right top,
                    linear-gradient(#1359df, #1359df) left bottom,
                    linear-gradient(#1359df, #1359df) left bottom,
                    linear-gradient(#1359df, #1359df) right bottom,
                    linear-gradient(#1359df, #1359df) right bottom;
                    background-repeat: no-repeat;
                    background-size: 0.1vw 18vw, 1.5vw 0.1vw;
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
