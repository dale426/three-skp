<template>
    <div class="applicable-disease">
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
                    <div class="red-circle"></div>

                    <img src=".././../../assets/red-circle.png" alt="" width="300px;" style="opacity: 0.8">

                    <img width="100%" height="100%" :src="simpleBody" alt="人体">
                </div>
            </div>
        </div>
        <div class="menu">
            <Menu></Menu>
        </div>
    </div>
</template>
<script>
import AdvanceTitle from '../advantage/components/AdvaceTitle.vue';
import Menu from '@/components/commonComponents/Menu';
import simpleBody from '@/assets/simple-body.png';

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
    components: {AdvanceTitle, Menu},
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
            width: 210px;
            height: 510px;
            position: relative;
            .red-circle{
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: radial-gradient(circle, red, transparent);
                opacity: 0.9;
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
    }
</style>
