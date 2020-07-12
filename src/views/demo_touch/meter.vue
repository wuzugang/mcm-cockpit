<!-- 移动驾驶舱首页 -->
<template>
	<div class="main_continer">
        <vue-particles
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
        </vue-particles>
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

        <div id="app">
            <p>{{ message }}</p>
            <div class="wrap">
                <transition name="show">
                    <div class="d" v-for="item in list" :key="item.id" v-if="count === item.id">
                        {{ item.text }}
                    </div>
                </transition>
            </div>
            <button @click="add">add</button>
        </div>

        <!-- <div class="main-content">
            <div class="item button-jittery" style="--bg-color: #f1c40f;">
                <button>Click Me!</button>
                <div class="name">Subtlety</div>
            </div>
        </div> -->

        <!-- <a href="javascript:;"></a> -->
        <!-- <a href="javascript:;" class="button_area">BUTTON</a> -->

        <!-- <div class="button_test">Hunter</div> -->

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
                message: 'Hello Vue.js!',
                count: 0,
                list: [
                    {id: 0, text: 'aaa'},
                    {id: 1, text: 'bbb'},
                    {id: 2, text: 'ccc'}
                ],


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

            add: function () {
                if (this.count < this.list.length - 1) {
                    this.count += 1;
                } else {
                    this.count = 0;
                }
            },
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
    	height: 100%;
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


* {
  box-sizing: border-box;
}
*:before, *:after {
  content: "";
  position: absolute;
}
 
.main-content {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
.main-content .item {
  display: grid;
  grid-template-rows: 1fr min-content;
  align-items: center;
  justify-content: center;
  height: 50vh;
  flex-wrap: wrap;
  background: var(--bg-color);
}
.main-content .item:not(.footer) {
  padding-top: 1rem;
}
 
button {
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font: 24px "Margarine", sans-serif;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in-out;
  letter-spacing: 2px;
}
 
.name {
  width: 100%;
  text-align: center;
  padding: 0 0 3rem;
  font: 500 14px 'Rubik', sans-serif;
  letter-spacing: .5px;
  text-transform: uppercase;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
}
 
.button__wrapper {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
}
 
.button-pulse button {
  background: var(--bg-color);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.button-pulse .button__wrapper:hover .pulsing:before {
  animation: pulsing 0.2s linear infinite;
}
.button-pulse .button__wrapper:hover .pulsing:after {
  animation: pulsing1 0.2s linear infinite;
}
 
.pulsing {
  width: 99%;
  height: 99%;
  border-radius: 50px;
  z-index: 1;
  position: relative;
}
.pulsing:before, .pulsing:after {
  width: 100%;
  height: 100%;
  border: inherit;
  top: 0;
  left: 0;
  z-index: 0;
  background: #fff;
  border-radius: inherit;
  animation: pulsing 2.5s linear infinite;
}
.pulsing:after {
  animation: pulsing1 2.5s linear infinite;
} 
.button-jittery button {
  animation: jittery 4s infinite;
}
.button-jittery button:hover {
  animation: heartbeat 0.2s infinite;
}
 
@keyframes jittery {
  5%,
  50% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  15% {
    transform: scale(1.15);
  }
  20% {
    transform: scale(1.15) rotate(-5deg);
  }
  25% {
    transform: scale(1.15) rotate(5deg);
  }
  30% {
    transform: scale(1.15) rotate(-3deg);
  }
  35% {
    transform: scale(1.15) rotate(2deg);
  }
  40% {
    transform: scale(1.15) rotate(0);
  }
}
@keyframes heartbeat {
  50% {
    transform: scale(1.1);
  }
}      



.button_area{
  position: absolute; /*绝对对位*/
  top: 50%; /*距上部*/
  left: 50%; 
  transform: translate(-50%,-50%); /*移动，根据X,Y轴*/
  width: 400px; /*宽*/
  height: 120px; /*高*/
  text-align: center; /*字体水平居中*/
  font-size: 45px; /*字体大小*/
  line-height: 120px; /*行高*/
  color: #fff;
  text-transform: uppercase; /*字体大写*/
  text-decoration: none; /*字体增加装饰：去除下划线*/
  font-family: sans-serif; /*非衬线体*/
  box-sizing: border-box; /*盒模型大小规则*/
  background: linear-gradient(
    90deg,#03a9f4, #f441a5, #ffeb3b, 
  #03a9f4, #f441a5, #ffeb3b, #03a9f4); /*渐变背景*/

//   background: linear-gradient(
//     90deg,#03a9f4, #21caf0, #ddb2ec, 
//   #566c76, #69f595, #33b57c, #dd6e2e);
  border-radius: 60px; /*边框圆角*/
  background-size: 400%; /*背景大小*/
  z-index: 1; /*层叠定位*/
}
.button_area:hover{
  animation: animate 8s linear infinite alternate; /*动画: 名称 时间 线性 循环 播放完回退播放*/
}
@keyframes animate{
  0%{
    background-position: 0%; /*修改背景定位，实现渐变色炫光*/
  }
  50%{
    background-position: 100%;
  }
  100%{
    background-position: 0%;
  }
}
.button_area::before{ /*之前添加*/
  content: ''; /*内容*/
  position: absolute; /*绝对定位*/
  top:-5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
  left: -5px;
  right: -5px;
  bottom: -5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
  z-index: -1; 
  background: linear-gradient(
    90deg,#03a9f4, #f441a5, #ffeb3b, #03a9f4, 
  #f441a5, #ffeb3b, #03a9f4);
//   background: linear-gradient(
//     90deg,#03a9f4, #3bd2da, #3bdbff, #03a9f4, 
//   #917add, #3680e9, #03a9f4);
  border-radius: 40px;
  background-size: 400%;
  filter: blur(20px); /*过渡：模糊*/
  opacity: 0; /*透明度*/
  transition: 1s; /*过渡时间*/
}
.button_area:hover::before{
//   filter: blur(20px);
//   opacity: 1;
  animation: animate 8s linear infinite; /*注意动画名称统一*/
}


			.button_test{
				/* 取消a标签的下划线 */
				text-decoration: none;
				position: absolute;
				left: 50%;
				top: 50%;
				/* 不用关心宽高多少 */
				transform: translate(-50%,-50%);
				font-size: 24px;
				/* 设置渐变的颜色 */
				background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
				/* 设置背景大小400% */
				background-size: 400%;
				width: 25rem;
				height: 6.25rem;
				color: #fff;
				text-align: center;
				line-height: 6.25rem;
				/* 设置英文为大写显示 */
				text-transform: uppercase;
				border-radius: 3.125rem;
			}
			/*运用伪元素 设置图层，出现荧光 */
			.button_test::before{
				content: "";
				/*设置伪元素的位置*/
				position: absolute;
				left: -0.3125rem;
				right: -0.3125rem;
				top: -0.3125rem;
				bottom: -0.3125rem;
				background: linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
				background-size: 400%;
				border-radius: 3.125rem;
				/*设置滤镜*/
				filter: blur(1.25rem);
				z-index: -1;
			}
			/* 鼠标移动上去后伪元素开始动画效果 */
			.button_test:link::before{
				animation: sun 8s infinite;
			}
			.button_test:link{
				animation: sun 8s linear infinite alternate;
			}
			@keyframes sun{
				to{background-position: -400% 0;}
            }
            

            .d {
            position: absolute;
            border: 1px solid red;
            width: 100%;
            height: 100%;
        }
        @keyframes show {
            0% {
                opacity: 0;
                left: 32px;
            }
            100% {
                opacity: 1;
                left: 0;
            }
        }
        @keyframes hide {
            0% {
                opacity: 1;
                left: 0;
            }
            100% {
                opacity: 0;
                left: -32px;
            }
        }
        .show-enter-active {
            animation: show 1.2s;
        }
        .show-leave-active {
            animation: hide 1.2s;
        }
        .show-enter, .show-leave-to {
            opacity: 0;
        }
        .wrap {
            position: relative;
            width: 100%;
            height: 100%;
        }
</style>