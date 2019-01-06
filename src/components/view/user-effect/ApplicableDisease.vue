<template>
    <div class="applicable-disease">
        <div class="office-menu">
            <div class="advance-content">
                <AdvanceTitle></AdvanceTitle>
                <div class="disease-content">
                    <div class="departments-list">
                        <div>选择科室<div class="triganle"></div></div>
                        <ul>
                            <li
                            class="departments-list-item"
                            v-for="item in illList"
                            :key="item.id"
                            :class="currIndex === item.id ? 'active' : ''"
                            @click="changeDepartmentsHandler(item.id)"
                            > {{item.name}} </li>
                        </ul>
                    </div>
                    <div class="humen-body">
                        <!-- 风湿免疫科 -->
                        <div class="wrap-circle fsmyk">
                            <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                            <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                            <img class="red-circle" src=".././../../assets/red-circle.png" alt="" style="opacity: 0.8">
                        </div>

                        <img width="100%" height="100%" :src="simpleBody" alt="人体">
                    </div>
                </div>
            </div>
            <div class="menu">
                <Menu></Menu>
            </div>
        </div>
        <div class="detail-components-wrap">
            <FsmykComponent></FsmykComponent>
        </div>
    </div>
</template>
<script>
import AdvanceTitle from '../advantage/components/AdvaceTitle.vue';
import Menu from '@/components/commonComponents/Menu';
import simpleBody from '@/assets/simple-body.png';
import FsmykComponent from './components/FsmykComponent.vue'
export default {
    name: 'applicable-disease',
    data() {
        return {
            currIndex: null,
            simpleBody,
            illList: [
                {
                    name: '器官移植',
                    id: 0
                }, {
                    name: '风湿免疫科',
                    id: 1
                }, {
                    name: '消化科',
                    id: 2
                }, {
                    name: '血液科',
                    id: 3
                }, {
                    name: '神经内科',
                    id: 4
                }, {
                    name: '肾内科',
                    id: 5
                }, {
                    name: '皮肤科',
                    id: 6
                }]
        }
    },
    components: {AdvanceTitle, Menu, FsmykComponent},
    methods: {
        changeDepartmentsHandler(id) {
            this.currIndex = id
        }
    }
}
</script>
<style lang="less">
    .applicable-disease{
        width: 100%;
        background: url('../../../assets/advance-002.png') center no-repeat;
        background-size: cover;
        color: #5defe0;
        .advance-content{
            overflow-y: hidden;
            display: flex;
            height: calc(100vh);
            flex-direction: column;
            padding: 0 30px 90px;
            justify-content: space-between;
        }
        .disease-content{
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: space-between
        }
        .departments-list-item{
            height: 18px;
            line-height: 18px;
            font-size: 16px;
            padding: 4px 0 4px 20px;
            width: 100px;
            text-align: left;
            margin-top: 6px;
            box-sizing: content-box;
        }
        .departments-list-item.active{
            border: 1px solid #5defe0;
        }
        .humen-body{
            position: relative;
            width: 210px;
            height: 510px;
            .fsmyk {
                .red-circle:nth-child(1) {
                    top: 136px;
                    left: 76px;
                }
                .red-circle:nth-child(2) {
                    top: 214px;
                    left: 114px;
                }
                .red-circle:nth-child(3) {
                    top: 290px;
                    left: 70px;
                }
            }
        }
        .wrap-circle{
            position: absolute;
            width: 100%;
            height: 100%;
            .red-circle{
                position: absolute;
                width: 30px;
                height: 30px;
                animation: redGlint 1.5s infinite;
                animation-direction: alternate;
            }
            @keyframes redGlint {
                from {opacity: 0;}
                to {opacity: 0.8;}
            }
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
        .triganle{
            display: inline-block;
            transform: translateY(30%);
            margin-left: 10px;
            width: 0;
            height: 0;
            border-width: 6px;
            border-style: solid;
            border-color: #5defe0 transparent transparent transparent;
        }
        .detail-components-wrap{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .office-menu{
            opacity: 0.1;
        }
    }
</style>
