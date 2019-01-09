<template>
    <div class="advance-three">
        <div class="advance-content">
            <AdvanceTitle></AdvanceTitle>
            <div class="patent-title">
                专利菌种<span class="triangle"></span>
            </div>
            <div class="patent-describe">
                <p>自主优质短密青霉菌YMS-110发酵</p>
                <p>从源头控制品质</p>
            </div>
            <div class="wrap-img-list">
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
export default {
    name: 'advance-three',
    data() {
        return {}
    },
    components: {AdvanceTitle, Menu},
    methods: {
        nextAdvanceHandler() {
            this.$router.push({path: 'advance-certificate'})
        }
    }
}
</script>
<style lang="less">
    .advance-three{
        color: #5defe0;
        width: 100%;
        background: url('../../../assets/advance-003.png') center no-repeat;
        background-size: cover;
        .advance-content{
            overflow-y: hidden;
            display: flex;
            height: calc(100vh);
            flex-direction: column;
            padding: 0 30px 90px;
            justify-content: space-between;
        }
        .wrap-img-list{
            padding-bottom: 20px;
            height: 380px;
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
        .patent-title{
            font-size: 20px;
            font-weight: bold;
            text-align: left;
        }
        .patent-describe{
            font-size: 20px;
            text-align: left;
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
