<template>
    <div>
        <CommonWrapShow @next-page="nextPageShow">
            <template slot="text-content">
                <div class="detail-remark-wrap">
                    <section class="sickness">
                        <p>自身免疫性肝炎</p>
                        <div class="sickness__description">指南推荐：
                            <p>《2015版EASL临床实践指南：自身免疫性肝炎》</p>
                        </div>
                    </section>
                </div>
            </template>
            <template slot="body-img-content">
                <section class="sickness-girl">
                    <img width="100%" height="100%" :src="simpleBody" alt="人体">
                    <div class="sickness-girl__area">
                        <div class="red-circle fsmyk-1">
                            <img class="red-circle__img" :src="RedCircle" alt="">
                        </div>
                    </div>
                </section>
            </template>
        </CommonWrapShow>
    </div>
</template>
<script>
import CommonWrapShow from '../components/CommonWrapShow.vue';
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
    components: {CommonWrapShow},
    methods: {
        nextPageShow() {
            this.$router.push({name: 'fsmyk2'})
        }
    }
}
</script>
<style lang="less">
@import '../components/bodyShow.less';
.fsmyk-1{
    top: 176px;
    left: 65px;
    &::before{
        width: 70px;
        height: 0.03rem;
        top: 50%;
        left: -60px;
    }
}
</style>
