<template>
    <div class="advance-two">
        <div class="advance-content">
            <AdvanceTitle></AdvanceTitle>
            <div class="patent-title">
                分散片制剂<span class="triangle"></span>
            </div>
            <div class="wrap-img-list">
                <img width="100%" :src="advanceImg21" alt="品质优势">
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
import advanceImg21 from '@/assets/advance-2-1.png';

export default {
    name: 'advance-two',
    data() {
        return {
            advanceImg21
        }
    },
    components: {AdvanceTitle, Menu},
    methods: {
        nextAdvanceHandler() {
            this.$router.push({path: 'advance-three'})
        }
    }
}
</script>
<style lang="less">
    .advance-two{
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
            padding: 40px 0;
            font-size: 20px;
            font-weight: bold;
            text-align: left;
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
