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
        <!-- 头部 -->
        <div class="header">
            <div class="header_title">信贷驾驶舱</div>
        </div>

        <!-- 内容区 -->
        <div class="content">
            <!-- 仪表盘区域 -->
            <div class="dashboard_area"> 
                <div class="dashboard_content">
                    <div class="btn-cel" @click="cel">
                        click
                        <!-- <span v-show="isShow"></span> -->
                    </div>
                </div>
            </div>
            <!-- 按钮区 -->
            <div class="button_area">  
                <!-- <div class="button_color" @click="loanVolumeIndex">贷款量指标</div>
                <div class="button_color" @click="riskIndicators">风险类指标</div>
                <div class="button_color" @click="businessIndicators">业务类指标</div>
                <div class="button_color" @click="orgStatisticalIndicators">机构统计指标</div> -->
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
                isShow: false
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
        background-color: black;

        .header{
            border: 1px solid red;
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
            height: 70%;

            .dashboard_area{
                border: 1px;
                width: 100%;
                height: 60%;
                background-position-x: center;
                background-position-y: center;
                
                .dashboard_content{
                    width: 90%;
                    height: 82%;
                    float: left;
                    margin-left: 5%;
                    margin-top: 7%;
                }
                
            }

            .button_area{
                width: 100%;
                height: 40%;

                
                .button_color{
                    position: relative;
                    margin:300px auto;
                    width:400px;
                    float: left;
                    height:300px;
                    background: rgba(1, 19, 67, 0.8);
                    border: 2px solid #00a1ff;
                    border-radius: 8px;
                }
                .border-box::before {
                    position: absolute;
                    top: -2px;
                    bottom: -2px;
                    left: 30px;
                    width: calc(100% - 60px);
                    content: "";
                    border-top: 2px solid #016886;
                    border-bottom: 2px solid #016886;
                    z-index: 0;
                }
                .border-box::after {
                    position: absolute;
                    top: 30px;
                    right: -2px;
                    left: -2px;
                    height: calc(100% - 60px);
                    content: "";
                    border-right: 2px solid #016886;
                    border-left: 2px solid #016886;
                    z-index: 0;
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

    #particles-js{
        background-color: #fff;
        width: 100%;
        height: 100%;
        position: absolute;   //设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景
    }

.btn-cel{
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  border: 1px solid #abcdef;
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  border-radius: 6px;
  float: left;
  cursor: pointer;
  color: wheat;
  position: relative;
  background: linear-gradient(40deg,#755beaff,#ff72c077);
  overflow: hidden;
}


</style>