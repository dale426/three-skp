<template>
    <div class="advance-one">
        <div class="advance-title">
            <div class="advance-text">品质优势</div>
            <img src="" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'advance-one',
    data() {
        return {}
    }
}
</script>
<style lang="less">
    .advance-one{
        width: 100%;
        height: 100%;
        background: url('../../../assets/advance-001.png') center no-repeat;
    }
    .advance-title{
        color: #5defe0;
        font-size: 20px;
        font-weight: bold;
        position: relative;
    }
    .advance-text{
        display: inline-block;
        position: relative;
        &::before{
            content: '';
            width: 4px;
            height: 20px;
            background: #5defe0;
            // position: absolute;
            display: flex;
            left: -10px;
            top: 0;
        }
    }
</style>
