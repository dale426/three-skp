<template>
    <div class="advance-four">
        <div class="advance-content">
            <AdvanceTitle></AdvanceTitle>
            <div class="patent-title">
                分散片制剂<span class="triangle"></span>
            </div>
            <div class="patent-content">
                <p>压痕片工艺</p>
                <p>易于个体化剂量调整</p>
            </div>
            <div class="wrap-img-list">
                <img width="100%" :src="advanceImg21" alt="品质优势">
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
import advanceImg21 from '@/assets/advance-2-1.png';

export default {
    name: 'advance-four',
    data() {
        return {
            advanceImg21
        }
    },
    components: {AdvanceTitle, Menu}
}
</script>
<style lang="less">
    .advance-four{
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
        .wrap-img-list{
            flex-grow: 1;
            display: flex;
            align-items: center;
        }
        .patent-title{
            padding: 20px 0;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
        }
        .patent-content{
            font-size: 20px;
            color: #5defe0;
            text-align: left;
            padding: 15px 0;
            p{
                line-height: 1.5;
            }
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
