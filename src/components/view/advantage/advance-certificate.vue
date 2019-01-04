<template>
    <div class="advance-certificate">
        <div class="advance-content">
            <AdvanceTitle></AdvanceTitle>
            <div class="wrap-img-list">
                <img :src="advanceImg12" width="100%" alt="分子式">
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
    name: 'advance-certificate',
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
    .advance-certificate{
        width: 100%;
        background: url('../../../assets/advance-001.png') center no-repeat;
        background-size: cover;
        .advance-content{
            overflow-y: hidden;
            display: flex;
            height: calc(100vh);
            flex-direction: column;
            padding: 0 30px 90px;
            // justify-content: space-between;
        }
        .wrap-img-list{
            text-align: left;
            padding-bottom: 20px;
        }
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
    }
</style>
