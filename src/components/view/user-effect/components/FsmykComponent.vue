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
                <section>
                    <img width="100%" height="100%" :src="simpleBody" alt="人体">
                    <div class="fsmyk-a-bodyimg">
                        <div class="fsmyk-a-circle-wrap">
                            <img class="red-circle" :src="RedCircle" alt="">
                        </div>
                    </div>
                </section>
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
        font-weight: bold;
    }
    & .a-recommend{
        margin-top: 30px;
        font-size: 15px;
        font-weight: 600;
        p {
            margin-top: 5px;
            font-size: 14px;
            font-weight: 100;
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
.fsmyk-a-circle-wrap{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 176px;
    left: 65px;
    &::before{
        content: '';
        position: absolute;
        display: inline-block;
        width: 70px;
        height: 0.03rem;
        background: red;
        top: 50%;
        left: -60px;
    }
}
.red-circle{
    opacity: 0.8;
    width: 100%;
}
</style>
