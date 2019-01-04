<template>
    <div class="advance-two">
        <div class="advance-two-wrap">
            <AdvanceTitle></AdvanceTitle>
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
import advanceImg21 from '@/assets/advance-1-1.png';
export default {
    name: 'advance-two',
    data() {
        return {
            advanceImg21
        }
    },
    components: {AdvanceTitle, Menu}
}
</script>
<style lang="less">
    .advance-two{
        width: 100%;
        background: url('../../../assets/advance-002.png') center no-repeat;
        background-size: cover;
        .advance-two-wrap{
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
        .menu{
            position: absolute;
            bottom: 60px;
            display: block;
            width: 100%;
        }
    }
</style>
