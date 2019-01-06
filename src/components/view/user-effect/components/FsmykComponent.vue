<template>
    <div>
        <CommonWrapShow>
            <template slot="text-content">
                <div class="detail-remark-wrap">
                    <section class="fsmyk-a-content">
                        <p>自身免疫性肝炎</p>
                        <div class="a-recommend">指南推荐：
                            <p>《2015版EASL临床实践指南：自身免疫性肝炎》</p>
                        </div>
                    </section>
                </div>
            </template>
            <template slot="body-img-content">
                    <img width="100%" height="100%" :src="simpleBody" alt="人体">
                    <div class="fsmyk-a-bodyimg">
                        <img class="fsmyk-a-red-circle" :src="RedCircle" alt="">
                        <span class="red-line"></span>
                    </div>
            </template>
        </CommonWrapShow>
    </div>
</template>
<script>
import CommonWrapShow from './CommonWrapShow.vue';
import simpleBody from '@/assets/simple-body.png';
import RedCircle from '@/assets/red-circle.png';
export default {
    name: 'fsmyk',
    data() {
        return {
            simpleBody,
            RedCircle
        }
    },
    components: {CommonWrapShow}
}
</script>
<style lang="less">
.fsmyk-a-content{
    position: absolute;
    left: 0;
    top: 180px;
    text-align: left;
    p {
        font-size: 16px;
    }
    & .a-recommend{
        margin-top: 30px;
        font-size: 16px;
        span {
            font-size: 14px;
        }
    }

}
.fsmyk-a-bodyimg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.red-line{
    position: absolute;
    display: inline-block;
    width: 70px;
    height: 0.03rem;
    background: red;
    top: 190px;
    left: 10px;
}
.fsmyk-a-red-circle{
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0.8;
    top: 176px;
    left: 65px;
    display: block;
}
</style>
