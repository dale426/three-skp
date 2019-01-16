<template>
    <div class="advance-certificate">
        <div class="advance-content">
            <AdvanceTitle></AdvanceTitle>
            <div class="wrap-img-list">
                <div class="certificate-line-box">
                    <div class="pre-small-img" v-if="currMasterImg === 1">
                        <img class="pre-img-item" :src="imgList[currMasterImg-1]" alt="">
                    </div>

                    <div class="pre-btn" v-else @click="changeImg(1)">
                        <svg width="36" height="36">
                            <polyline
                                points="14 10 26 18 14 26"
                                stroke="#5defe0"
                                stroke-width="2"
                                fill="none"
                            ></polyline>
                        </svg>
                    </div>

                    <img class="certificate-img-master" :src="imgList[currMasterImg]" alt="证书">

                    <div class="pre-small-img" v-if="currMasterImg === 0">
                        <img class="pre-img-item" :src="imgList[currMasterImg+1]" alt="">
                    </div>
                    <div class="pre-btn" name='right' v-else @click='changeImg(0)'>
                        <svg width="36" height="36">
                            <polyline
                                points="14 10 26 18 14 26"
                                stroke="#5defe0"
                                stroke-width="2"
                                fill="none"
                            ></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu">
            <Menu showRow @next-page="nextAdvanceHandler()"></Menu>
        </div>
    </div>
</template>
<script>
import AdvanceTitle from './components/AdvaceTitle.vue';
import Menu from '@/components/commonComponents/Menu';
import certificate02 from '@/assets/certificate02.png';
import certificate01 from '@/assets/certificate01.png';
export default {
    name: 'advance-certificate',
    data() {
        return {
            imgList: [certificate01, certificate02],
            currMasterImg: 0
        }
    },
    components: {AdvanceTitle, Menu},
    methods: {
        changeImg(num) {
            this.currMasterImg = num
        },
        nextAdvanceHandler() {
            this.$router.push({path: 'advance-four'})
        }
    }
}
</script>
<style lang="less">
    .advance-certificate{
        width: 100%;
        background: url('../../../assets/certificate-bac.png') center no-repeat;
        background-size: cover;
        .advance-content{
            overflow-y: hidden;
            display: flex;
            height: 100%;
            flex-direction: column;
            padding: 0 30px 90px;
        }
        .wrap-img-list{
            padding-bottom: 20px;
            flex-grow: 1;
            display: flex;
            align-items: center;
            .certificate-line-box{
                position: relative;
                width: 340px;
                height: 500px;
                // border: 2px solid red;
                background: url('../../../assets/certificate-line.png') center no-repeat;
                background-size: auto 80%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .pre-small-img{
                position: absolute;
                top: 50%;
                transform: translateY(-35%);
                margin-left: -65%;
                width: 140px;
                height: 40%;
                // border: 1px solid red;
                &:last-child{
                    margin-left: 65%;
                }
            }
            .pre-img-item{
                width:100%;
                height:100%;
                opacity:0.5;
            }
            .pre-btn{
                position: absolute;
                top: 50%;
                font-size: 30px;
                color: #5defe0;
                left: -15px;
            }
            .pre-btn[name='right']{
                transform: rotate(180deg);
                left: auto;
                right: -15px;
            }
            .certificate-img-master{
                width: 60%;
                margin-top: 50px;
            }
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
    }
</style>
