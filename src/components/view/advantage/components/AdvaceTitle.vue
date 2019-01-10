<template>
        <div class="advace-c-title">
            <div class="advance-text">
                <span>{{title}}</span>
                <span>{{subTitle}}</span>
            </div>
            <img height="32" :src="advantageLogo" alt="赛可平">
        </div>
</template>
<script>
import advantageLogo from '@/assets/advantage-logo.png'
export default {
    name: 'advanceTitle',
    props: {
        title: {
            type: String,
            default: '品质优势'
        },
        subTitle: {
            type: String,
            default: 'Quality Advantage'
        }
    },
    data() {
        return {
            advantageLogo
        }
    }
}
</script>
<style lang="less">
    .advace-c-title{
        color: #5defe0;
        font-size: 20px;
        font-weight: bold;
        position: relative;
        letter-spacing: 2px;
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .advance-text{
            position: relative;
            display: flex;
            align-items: flex-start;
            margin-bottom: 6px;
            flex-direction: column;
            span:last-child{
                font-size: 13px;
                font-weight: 100;
                letter-spacing: 1px;
            }
            &::before{
                content: '';
                top: 0;
                left: -15px;
                position: absolute;
                width: 4px;
                height: 18px;
                background: #5defe0;
                margin-right: 8px;
            }
        }
    }

</style>
