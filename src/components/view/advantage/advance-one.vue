<template>
    <div class="advance-one">
        <div class="advance-one-wrap">
            <AdvanceTitle></AdvanceTitle>
            <div class="advace-describe">
                <p>赛可平<span class="circle-r">®</span></p>
                <p>中国第一家吗替麦考酚酯分散片</p>
                <p>先进剂型与优化处方的完美结合</p>
            </div>
            <div class="wrap-img-list">
                <img :src="advanceImg12" width="100%" alt="分子式">
                <img class="sector-img" :src="advanceImg11" width="60%" alt="主要成分">
            </div>
        </div>
        <div class="menu">
            <Menu showRow></Menu>
        </div>
    </div>
</template>
<script>
import AdvanceTitle from './components/AdvaceTitle.vue';
import Menu from '@/components/commonComponents/Menu';
import advanceImg12 from '@/assets/advance-1-2.png';
import advanceImg11 from '@/assets/advance-1-1.png';
export default {
    name: 'advance-one',
    data() {
        return {
            advanceImg12,
            advanceImg11
        }
    },
    components: {AdvanceTitle, Menu}
}
</script>
<style lang="less">
    .advance-one{
        width: 100%;
        background: url('../../../assets/advance-001.png') center no-repeat;
        background-size: cover;
        .advance-one-wrap{
            overflow-y: hidden;
            display: flex;
            height: calc(100vh);
            flex-direction: column;
            padding: 0 30px 90px;
            justify-content: space-between;
            .sector-img{
                padding-bottom:30px;
            }
        }
        .wrap-img-list{
            text-align: left;
            padding-bottom: 20px;
        }
        .advace-describe{
            font-size: 20px;
            color: #5defe0;
            text-align: left;
            p {
                line-height: 1.5;
            }
        }
        .circle-r{
            font-size: 12px;
            display: inline-block;
            vertical-align: top;
            padding-left: 4px;
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
    }
</style>
