<template>
    <div class="advance-five">
        <div class="advance-content">
            <AdvanceTitle ></AdvanceTitle>
            <div class="patent-title">
                分散片制剂<span class="triangle"></span>
            </div>

            <div class="wrap-img-list">
                <p class="img-remark-title">吗替麦考酚酯平均血板浓度——时间线形图</p>
                <img width="90%" :src="advanceImg51" alt="品质优势">
                <p class="patent-content">赛可平与原研产品生物等效</p>
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
import advanceImg51 from '@/assets/advance-5-1.png';

export default {
    name: 'advance-five',
    data() {
        return {
            advanceImg51
        }
    },
    components: {AdvanceTitle, Menu},
    methods: {
        nextAdvanceHandler() {
            this.$router.push({path: 'applicable-disease'})
        }
    }
}
</script>
<style lang="less">
    .advance-five{
        width: 100%;
        background: url('../../../assets/advance-bac-4.png') center no-repeat;
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
        .wrap-img-list{
            flex-grow: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .patent-title{
            font-size: 20px;
            display: flex;
            font-weight: bold;
            text-align: left;
            flex-grow: 2;
            align-items: center;
        }
        .img-remark-title{
            font-size: 14px;
            padding: 20px 0;
        }
        .patent-content{
            display: flex;
            font-size: 20px;
            color: #5defe0;
            text-align: left;
            padding: 15px 0;
            line-height: 1.5;
            align-self: flex-start;
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
        .triangle{
            width: 0;
            height: 0;
            display: inline-block;
            border-width: 6px;
            border-color: transparent transparent transparent #5defe0;
            border-style: solid;
            margin-left: 12px;
        }
    }
</style>
