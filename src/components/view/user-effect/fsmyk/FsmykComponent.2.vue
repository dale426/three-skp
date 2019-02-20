<template>
    <div>
        <CommonWrapShow @next-page="nextPageShow">
            <template slot="text-content">
                <div class="detail-remark-wrap">
                    <section class="sickness">
                        <p>系统性红斑狼疮</p>
                        <div class="sickness__description">指南推荐：
                            <p>《EULAR/ERA-EDTA成人及</p>
                            <p>&nbsp;&nbsp;儿童狼疮性肾炎的管理建议（2012版）》</p>
                            <p>《系统性红斑狼疮诊断及治疗指南（2010版）》</p>
                        </div>
                    </section>
                </div>
            </template>
            <template slot="body-img-content">
                <section class="sickness-girl">
                    <img width="100%" height="100%" :src="simpleBodyRed" alt="人体">
                    <div class="sickness-girl__area">
                        <div class="red-circle fsmyk-2">
                            <!-- <img class="red-circle__img" :src="RedCircle" alt=""> -->
                        </div>
                    </div>
                </section>
            </template>
        </CommonWrapShow>
    </div>
</template>
<script>
import CommonWrapShow from '../components/CommonWrapShow.vue';
import simpleBodyRed from '@/assets/simple-body-red.png';
import RedCircle from '@/assets/red-circle.png';
export default {
    name: 'fsmyk',
    data() {
        return {
            simpleBodyRed,
            RedCircle
        }
    },
    components: {CommonWrapShow},
    methods: {
        nextPageShow() {
            this.$router.push({name: 'applicable-disease'})
        }
    }
}
</script>
<style lang="less">
@import '../components/bodyShow.less';
.fsmyk-2{
    top: 176px;
    left: 65px;
    &::before{
        width: 46px;
        height: 0.03rem;
        top: 50%;
        left: -76px;
    }
}
</style>
