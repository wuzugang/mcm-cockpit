<!-- 移动驾驶舱首页 -->
<template>
	<div class="main_continer">
        <!-- <vue-particles
            color="#1359df"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="star"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="false"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
        >
        </vue-particles> -->
        <div class="content">
            <!-- <div id="myChart" class="dashboard_chart"></div> -->
            <div class="banner">
                <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div" style="width:100%; height: 100%;">
                    <!-- <div id="myChart" class="dashboard_chart"></div> -->
                    <transition :name="names">
                        <div class='content1' v-show="isShow">
                            <div id="myChart" class="dashboard_chart"></div>
                        </div>
                    </transition>
                </v-touch>
                <!-- <div class="dashboard_grade">{{ loanDate }}</div> -->
            </div>
		</div>
    </div>
</template>

<script>
    import { query } from "@/api/api"
    import { MessageBox } from "element-ui"
    import animate from 'animate.css'

	export default {
		name: "home",
		data() {
			return {
                isShow: false,
                names: 'left',
                option: {
                    animation: true,
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    },
                    backgroundColor:'rgba(0, 0, 0, 0)', //rgba设置透明度0
                    tooltip: {
                        formatter: '{a} <br/>{c} {b}'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: {show: true}, 
                        }
                    },
                    series: [
                        {
                            name: '放款',
                            type: 'gauge',
                            min: 0,
                            max: 1000,   // 默认1000
                            splitNumber: 10,
                            // 仪表盘半径
                            radius: '102%',
                            //仪表盘位置
                            center: ['50%', '52%'],
                            // 仪表盘弧线宽度
                            axisLine: {            // 坐标轴线
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: [[0.2, '#92F355'], [0.8, '#3DE3FC'], [1, '#FAC557']],
                                    width: 6,
                                    shadowColor: 'transparent', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            // 刻度数字样式
                            axisLabel: {            
                                fontWeight: 'bolder', // 设置文字字体的粗细。  'normal'（默认值）, 'bold', 'bolder', 'lighter' ,100 | 200 | 300 | 400...
                                // fontStyle: 'oblique', // 文字字体的风格  'normal', 'italic', 'oblique'
                                fontFamily: 'Arial', // 文字的字体   'serif' , 'monospace', 'Arial', 'Courier New', 'Microsoft YaHei', ...
                                shadowColor: 'transparent', // 默认透明
                                fontSize: 11,   // 改变仪表盘内刻度数字的大小
                                shadowBlur: 10
                            },
                            // 仪表盘小刻度样式
                            axisTick: {            // 坐标轴小标记
                                length: 15,        // 属性length控制线长
                                lineStyle: {       // 属性lineStyle控制线条样式
                                    color: 'auto',
                                    shadowColor: 'transparent', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            // 仪表盘大刻度样式
                            splitLine: {           // 分隔线
                                length: 20,         // 属性length控制线长
                                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                                    width: 3,
                                    color: [[0.2, '#92F355'], [0.8, '#3DE3FC'], [1, '#FAC557']],
                                    shadowColor: 'transparent', //默认透明
                                    shadowBlur: 10
                                }
                            },
                            // 仪表盘指针样式
                            pointer: {          
                                width: 5, // 指针的宽度
                                length: "60%", // 指针长度，按照半圆半径的百分比
                                shadowColor: 'transparent', // 默认透明
                                shadowBlur: 5
                            },
                            title: {
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 13,
                                    fontStyle: 'italic',
                                    color: '#3DE3FC',
                                    shadowColor: '#fff', // 默认透明
                                    shadowBlur: 10,
                                }
                            },
                            detail: {
                                width: 60,
                                backgroundColor: '#3DE3FC',
                                borderRadius: 20,
                                shadowColor: '#fff', // 默认透明
                                shadowBlur: 5,
                                fontWeight: 'bolder',
                                fontFamily: 'Arial',
                                offsetCenter: [-5, '65%'],       // x, y，单位px
                                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                    fontWeight: 'bolder',
                                    fontSize: 20,
                                    color: '#003454',
                                },
                                rich: {} // 如果不定义 rich 属性，则不能指定 width 和 height。
                            },
                            data: [
                                {
                                    value: 0, 
                                    name: '昨日放款/万元'
                                }
                            ]
                        }
                    ]
                },

                // 当前页数
                currentNum: 0,
                // 放款日期
                loanDate: "",
                // 测试数据
                data: [{
                        value: 190,   // 放款量
                        name: '昨日放款/万元',  // 标题
                        loanDate: '2020-07-07',
                        loanMax: 1000,  // 放款量阀值
                        index: 1        // 按昨日放款量为基数排序，依次相加。
                    }, 
                    {
                        value: 56020, 
                        name: '放款/万元',
                        loanDate: '2020-07-06',
                        loanMax: 100000,
                        index: 2
                    }, 
                    {
                        value: 3900, 
                        name: '放款/万元',
                        loanDate: '2020-07-05',
                        loanMax: 10000,
                        index: 3
                    }, 
                    {
                        value: 870, 
                        name: '放款/万元',
                        loanDate: '2020-07-04',
                        loanMax: 1000,
                        index: 4
                    }]
            }
		},
		methods: {
            show() {
                this.isShow = false;
                setTimeout(() => {
 
                    this.isShow = true;
                    this.names = this.names == 'left' ? 'right' : 'left';
                }, 1200);
            },
            cel(tag) {
                let x = tag.offsetX;
                let y = tag.offsetY;
                let ripples = document.createElement("span");
                ripples.style.left = x + "px";
                ripples.style.top = y + "px";
                console.log(tag.srcElement);
                tag.srcElement.appendChild(ripples);
                setTimeout(() => {
                    ripples.remove();
                }, 1000);
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
                myChart.setOption(this.option, true);
            },

            // 滑动事件
            // 右滑事件
            onSwipeRight() {
                this.names = 'right';
                this.show();
                // 右滑没有数据了则保持当前页
                if (this.currentNum >= this.data.length) {
                    return;
                }
                // 右滑页数加1
                this.currentNum++;
                
                // 重绘图表
                setTimeout(() => {
                    this.refresh();
                }, 1200);
            },
            // 左滑事件
            onSwipeLeft() {
                this.names = 'left';
                this.show();
                // 左滑没有数据了则保持当前页
                if (this.currentNum == 1) {
                    return;
                }
                // 左滑页数减1
                this.currentNum--;
                
                // 重绘图表
                setTimeout(() => {
                    this.refresh();
                }, 1300);
            },
            // 重绘图表
            refresh() {
                // 加载数据
                this.data.forEach(item => {
                    if (item.index == this.currentNum) {
                        this.option.series[0].data[0] = item;
                        this.option.series[0].max = item.loanMax;
                        this.loanDate = item.loanDate;
                    }
                });
                // 移除echarts
                document.getElementById('myChart').removeAttribute('_echarts_instance_'); // 移除容器上的 _echarts_instance_ 属性
                // 重绘图表
                this.draw();
            },
		},
		created() {
            // 初始化图表数据
            this.data.forEach(item => {
                if (item.index == 1) {
                    console.log(item);
                    this.option.series[0].data[0] = item;
                    this.option.series[0].max = item.loanMax;
                    this.loanDate = item.loanDate;
                    // 重置页数
                    this.currentNum = item.index;
                }
            });
        },
        beforeDestroy () {

        },
        mounted(){
            // 自适应手机屏幕高度
            var clientHeight= document.documentElement.clientHeight;
            document.getElementsByClassName('main_continer')[0].style.height = clientHeight + 'px';
            // 解决移动端active事件问题
            document.body.addEventListener('touchstart', function () { });
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
        background-color: #fff;
        position: relative;
    }

    .dashboard_chart{
        border: 1px solid red;
        width: 100%;
        height: 100%;
        margin-top: 2%;
        transition: all .377s ease;
    }

    .div1{
        border: 1px solid red;
        width: 100%;
        height: 100%;
        margin-top: 2%;
        transition: all .377s ease;
    }

    #particles-js{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 100% 100%;
        position: absolute;   //设置absolute,其他DIV设置为relative
    }

    .content{
    	height: 2000px;
    	background: rgb(240, 189, 198);
    	overflow: hidden;
    	.banner{
			width: 80%;
			height: 400px;
			background:rgb(176, 180, 167);
			margin: 80px auto;
    	}
    	.slide{
    		font-size: initial;
    		height: 100px;
    	}
    	
    }

    .dashboard_grade{
        position: absolute;
        width: 30%;
        height: 50px;
        margin-top: -26%;
        margin-left: 35%;
        color: #fff;
        text-align: center;
        line-height: 50px;
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

        background: linear-gradient(#00faff, #00faff) left top,
        linear-gradient(#00faff, #00faff) left top,
        linear-gradient(#00faff, #00faff) right top,
        linear-gradient(#00faff, #00faff) right top,
        linear-gradient(#00faff, #00faff) left bottom,
        linear-gradient(#00faff, #00faff) left bottom,
        linear-gradient(#00faff, #00faff) right bottom,
        linear-gradient(#00faff, #00faff) right bottom;
        background-repeat: no-repeat;
        background-size: 2px 10px, 10px 2px;
    }

    .content1{
        border: 1px solid red;
        width: 100%;
        height: 100%;
        float: left;
        text-align: center;
        font-size: 60px;
        line-height: 200px;
    }
    
    .left-enter-active,.left-leave-active{
        transition: all 1s linear;
        transform: translate3d(0, 0, 0);
    }

    .left-enter, .left-leave {
        transform: translate3d(100%, 0, 0);
    }

    .left-leave-to{
        transform: translateX(100%);
    }

    .left-enter-active,
    .left-leave-active {
        transition: all 1s linear;
        transform: translateX(0%);
    }
    .left-enter,
    .left-leave {
        transform: translateX(-100%);
    }
    .left-leave-to {
        transform: translateX(-100%);
    }


    .right-enter-active,.right-leave-active{
        transition: all 1s linear;
        transform: translate3d(0, 0, 0);
    }

    .right-enter, .right-leave {
        transform: translate3d(100%, 0, 0);
    }

    .right-leave-to{
        transform: translateX(-100%);
    }

    .right-enter-active,
    .right-leave-active {
        transition: all 1s linear;
        transform: translateX(0%);
    }
    .right-enter,
    .right-leave {
        transform: translateX(100%);
    }
    .right-leave-to {
        transform: translateX(100%);
    }
</style>