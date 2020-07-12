<!-- 移动驾驶舱首页 -->
<template>
	<div class="main_continer" :style="backgroundMain">
        <!-- 背景图星光效果 -->
        <div class="background_main">
            <vue-particles
                color="#fff"
                :particleOpacity="0.5"
                :particlesNumber="180"
                shapeType="circle"
                :particleSize="1"
                linesColor="#fff"
                :linesWidth="0.5"
                :lineLinked="false"
                :lineOpacity="0.1"
                :linesDistance="150"
                :moveSpeed="2"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="lizi"
            >
            </vue-particles>
        </div>
        
        <div class="content_main">
            <!-- 头部 -->
            <div class="header">
                <div class="header_title">信贷驾驶舱</div>
            </div>

            <!-- 内容区 -->
            <div class="content">
                <!-- 仪表盘区域 -->
                <div class="dashboard_area" :style="dashboardBackground"> 
                    <div class="dashboard_content">
                        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" tag="div" style="width:100%; height: 100%;">
                            <transition :name="names">
                                <div class='transition_chart' v-show="isShow">
                                    <div id="myChart" class="dashboard_chart"></div>
                                </div>
                            </transition>
                        </v-touch>

                        <div class="dashboard_grade">{{ loanDate }}</div>

                        <div class="dashboard_type">
                            <a href="javascript:;" class="dashboard_type_button_a" v-if="isDayBunShow">日</a>
                            <div class="dashboard_type_button" @click="commonTypeMethod(1)" v-else>
                                日
                            </div>
                            <div class="dashboard_type_button" @click="commonTypeMethod(2)">
                                周
                            </div>
                            <div class="dashboard_type_button" @click="commonTypeMethod(3)">
                                月
                            </div>
                            <div class="dashboard_type_button" @click="commonTypeMethod(4)">
                                年
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 按钮区 -->
                <div class="button_area">  
                    <div class="button_color" @click="commonClickEvent($event, 1)">贷款量指标</div>
                    <div class="button_color" @click="commonClickEvent($event, 2)">风险类指标</div>
                    <div class="button_color" @click="commonClickEvent($event, 3)">业务类指标</div>
                    <div class="button_color" @click="commonClickEvent($event, 4)">机构统计指标</div>
                    <div class="button_task" @click="commonClickEvent($event, 5)">任务时效指标</div>
                </div>
            </div>

            <!-- 底部 -->
            <div class="footer">
                
            </div>
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
                    backgroundSize:'90% 95%'
                },
                isShow: true,  // 仪表盘展示
                isDayBunShow: true,  // 按钮展示
                names: 'left',  // 动画属性
                time: 500, // 显示仪表盘
                repaintTime: 550, // 重绘图表
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
                            radius: '90%',
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
                // 记录当前点击类型
                currentType: 1,
                // 图表数据
                data: [],
            }
		},
		methods: {
            // 按钮公共处理事件
            commonClickEvent(e, type) {
                // 实现涟漪效果
                this.cel(e);
                switch (type) {
                    case 1:
                        // 贷款量指标
                        return this.loanVolumeIndex();
                    case 2:
                        // 风险类指标
                        return this.riskIndicators();
                    case 3:
                        // 业务类指标
                        return this.businessIndicators();
                    case 4:
                        // 机构统计指标
                        return this.orgStatisticalIndicators();
                    case 5:
                        // 任务时效指标
                        return this.taskEffectIndicators();
                    default:
                        return;
                }
            },
            /**
             * 贷款量指标
             */
            loanVolumeIndex() {
                console.log("贷款量指标");
                
            },

            /**
             * 风险类指标
             */
            
            riskIndicators() {
                console.log("风险类指标");
            },

            /**
             * 业务类指标
             */
            businessIndicators() {
                console.log("业务类指标");
            },

            /**
             * 机构统计指标
             */
            orgStatisticalIndicators() {
                console.log("机构统计指标");
            },

            /**
             * 任务时效指标
             */
            taskEffectIndicators() {
                console.log("任务时效指标");
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
                // 右滑没有数据了则保持当前页
                if (this.currentNum >= this.data.length) {
                    return;
                }
                this.names = 'right';
                this.show();
                // 右滑页数加1
                this.currentNum++;
                
                // 延时重绘图表
                setTimeout(() => {
                    this.refresh();
                }, this.repaintTime);
            },
            // 左滑事件
            onSwipeLeft() {
                // 左滑没有数据了则保持当前页
                if (this.currentNum == 1) {
                    return;
                }
                this.names = 'left';
                this.show();
                // 左滑页数减1
                this.currentNum--;
                
                // 延时重绘图表
                setTimeout(() => {
                    this.refresh();
                }, this.repaintTime);
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
            // 实现点击按钮出现涟漪效果
            cel(tag) {
                let x = tag.offsetX;
                let y = tag.offsetY;
                console.log("x=", x , "y=", y);
                let ripples = document.createElement("span");
                ripples.style.left = x + "px";
                ripples.style.top = y + "px";
                tag.srcElement.appendChild(ripples);
                setTimeout(() => {
                    ripples.remove();
                }, 1000);
            },
            // 显示仪表盘
            show() {
                this.isShow = false;
                setTimeout(() => {
                    this.isShow = true;
                    this.names = this.names == 'left' ? 'right' : 'left';
                }, this.time);
            },
            // 日
            day() {
                console.log("点击了日");
                // 测试数据
                this.data = [{
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
            },
            // 周
            week() {
                console.log("点击了周");
                // 测试数据
                this.data = [{
                    value: 1900,   // 周放款量
                    name: '上周放款/万元',  // 标题
                    loanDate: '2020-07-10',
                    loanMax: 10000,  // 放款量阀值
                    index: 1        // 按昨日放款量为基数排序，依次相加。
                }, 
                {
                    value: 86020, 
                    name: '放款/万元',
                    loanDate: '2020-07-03',
                    loanMax: 100000,
                    index: 2
                }, 
                {
                    value: 8900, 
                    name: '放款/万元',
                    loanDate: '2020-06-26',
                    loanMax: 10000,
                    index: 3
                }, 
                {
                    value: 170, 
                    name: '放款/万元',
                    loanDate: '2020-06-19',
                    loanMax: 1000,
                    index: 4
                }];
            },
            // 月
            month() {
                console.log("点击了月");
            },
            // 年
            year() {
                console.log("点击了年");
            },
            // 类型点击按钮公共方法
            commonTypeMethod(type) {
                this.isDayBunShow = false;
                // TODO: 调用后端服务查询对应数据
                // this.data = {};
                // 上一次点击类型与当前一致则不处理
                if (this.currentType == type) {
                    return;
                }

                // 获取测试数据
                if (type == 2) {
                    this.week();
                } else {
                    this.day();
                }

                // 记录当前点击类型
                this.currentType = type;

                // 初始化图表数据
                this.initChartData();
                // 初始化样式
                this.names = 'right';
                // 展示仪表盘
                this.show();
                // 初始化页数
                this.currentNum = 1;
                // 延时重绘图表
                setTimeout(() => {
                    this.refresh();
                }, this.repaintTime);
            },
            // 初始化图表数据
            initChartData() {
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
		},
		created() {
            // 调用后端服务获取图表数据
            this.day();
            // 初始化图表数据
            this.initChartData();
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
        overflow-y: hidden;
        padding: 0;
        margin: 0;

        .background_main{
            #particles-js{
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100% 100%;
                position: absolute;   //设置absolute,其他DIV设置为relative
            }
        }

        .content_main{
            width: 100%;
            height: 100%;
            position: relative;

            .header{
                width: 100%;
                height: 20%;
                text-align: center;
    
                &_title{
                    font-size: 50px;
                    color: antiquewhite;
                    padding-top: 10%;
                }
            }
    
            .content{
                width: 100%;
                height: 75%;
    
                .dashboard_area{
                    border: 1px;
                    width: 100%;
                    height: 60%;
                    background-position-x: center;
                    background-position-y: center;
                    
                    .dashboard_content{
                        width: 90%;
                        height: 90%;
                        float: left;
                        margin-left: 5%;
                        margin-top: 2%;

                        .transition_chart{
                            width: 100%;
                            height: 100%;
                            position: relative;

                            .dashboard_chart{
                                width: 100%;
                                height: 100%;
                                transition: all .377s ease;
                            }
                        }

                        .dashboard_grade{
                            position: absolute;
                            width: 30%;
                            height: 50px;
                            margin-top: -5%;
                            margin-left: 30%;
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

                        .dashboard_type{
                            width: 100px;
                            height: 50%;
                            float: right;
                            margin-top: -35%;

                            .dashboard_type_button {
                                width: 80px;
                                height: 50px;
                                float: right;
                                margin-top: 10px;
                                text-align: center; /*字体水平居中*/
                                transform: translate(-10%,0%); /*移动，根据X,Y轴*/
                                font-size: 28px; /*字体大小*/
                                line-height: 50px; /*行高*/
                                color: #fff;   // #0093df

                                background: linear-gradient(
                                    90deg,#03a9f4, #21caf0, #ddb2ec, 
                                #566c76, #69f595, #33b57c, #dd6e2e);
                                border-radius: 15%; /*边框圆角*/
                                background-size: 400%; /*背景大小*/
                                z-index: 1; /*层叠定位*/

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

                            .dashboard_type_button:hover{
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
                            .dashboard_type_button::before{ /*之前添加*/
                                content: ''; /*内容*/
                                position: absolute; /*绝对定位*/
                                top:-5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
                                left: -5px;
                                right: -5px;
                                bottom: -5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
                                z-index: -1; 
                                background: linear-gradient(
                                    90deg,#03a9f4, #3bd2da, #3bdbff, #03a9f4, 
                                #917add, #3680e9, #03a9f4);
                                border-radius: 40px;
                                background-size: 400%;
                                filter: blur(20px); /*过渡：模糊*/
                                opacity: 0; /*透明度*/
                                transition: 1s; /*过渡时间*/
                            }
                            .dashboard_type_button:hover::before{
                                filter: blur(20px);
                                opacity: 1;
                                animation: animate 8s linear infinite; /*注意动画名称统一*/
                            }

                            .dashboard_type_button_a {
                                width: 80px;
                                height: 50px;
                                float: right;
                                margin-top: 10px;
                                text-align: center; /*字体水平居中*/
                                transform: translate(-10%,0%); /*移动，根据X,Y轴*/
                                font-size: 28px; /*字体大小*/
                                line-height: 50px; /*行高*/
                                color: #fff;   // #0093df

                                background: linear-gradient(
                                    90deg,#03a9f4, #21caf0, #ddb2ec, 
                                #566c76, #69f595, #33b57c, #dd6e2e);
                                border-radius: 15%; /*边框圆角*/
                                background-size: 400%; /*背景大小*/
                                z-index: 1; /*层叠定位*/

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

                            .dashboard_type_button_a:link{
                                animation: animate 8s linear infinite alternate; /*动画: 名称 时间 线性 循环 播放完回退播放*/
                            }
                            .dashboard_type_button_a::before{ /*之前添加*/
                                content: ''; /*内容*/
                                position: absolute; /*绝对定位*/
                                top:-5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
                                left: -5px;
                                right: -5px;
                                bottom: -5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
                                z-index: -1; 
                                background: linear-gradient(
                                    90deg,#03a9f4, #3bd2da, #3bdbff, #03a9f4, 
                                #917add, #3680e9, #03a9f4);
                                border-radius: 40px;
                                background-size: 400%;
                                filter: blur(20px); /*过渡：模糊*/
                                opacity: 0; /*透明度*/
                                transition: 1s; /*过渡时间*/
                            }
                            .dashboard_type_button_a:link::before{
                                filter: blur(20px);
                                opacity: 1;
                                animation: animate 8s linear infinite; /*注意动画名称统一*/
                            }
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

                        overflow: hidden;
                        -webkit-animation-timing-function: ease-in-out;
                        -webkit-animation-name: breathe;
                        -webkit-animation-duration: 1500ms;
                        -webkit-animation-iteration-count: infinite;
                        -webkit-animation-direction: alternate;

                        position: relative;
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

                        overflow: hidden;
                        -webkit-animation-timing-function: ease-in-out;
                        -webkit-animation-name: breathe;
                        -webkit-animation-duration: 1500ms;
                        -webkit-animation-iteration-count: infinite;
                        -webkit-animation-direction: alternate;

                        position: relative;
                    }

                    @-webkit-keyframes breathe {
                        0% {
                            opacity: 0.8;
                            box-shadow: 0 1px 2px rgba(0, 147, 223, 0.4), 0 1px 1px rgba(0, 147, 223, 0.1) inset;
                        }

                        100% {
                            opacity: 1;
                            border: 1px solid rgba(59, 235, 235, 0.7);
                            box-shadow: 0 1px 2px #0093df, 0 1px 2px #0093df inset;
                        }
                    }
    
                    .button_color:active{
                        border-radius: 18px;
                        opacity: 0.8;    
                    }
    
                    .button_task:active{
                        border-radius: 18px;
                        opacity: 0.8;    
                    }
                }
            }
    
            .footer{
                width: 100%;
                height: 5%;
            }
        }
    }

    .left-enter-active,.left-leave-active{
        transition: all 0.3s linear;
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
        transition: all 0.3s linear;
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
        transition: all 0.3s linear;
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
        transition: all 0.3s linear;
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

<style lang="less">
    .main_continer .content_main .content .button_area .button_color span{
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        background-color: #005F98;
        animation: animate 1s linear infinite;
    }

    .main_continer .content_main .content .button_area .button_task span{
        position: absolute;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: translate(-50%,-50%);
        background-color: #005F98;
        animation: animate 1s linear infinite;
    }

    @keyframes animate{
        from{
            width: 1px;
            height: 1px;
            opacity: 0.5;
        }
        to{
            width: calc(100% + 60px); 
            height: 120px;
            opacity: 0.1;
        }
    }
</style>