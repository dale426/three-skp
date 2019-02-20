<template>
    <div class="show-body-detail">
        <div class="wrap-img-and-description" @click="nextPageHandler">
            <div class="text-content">
                <div class="detail-remark-wrap">
                    <slot name="text-content"></slot>
                </div>
            </div>
            <div class="body-detail-content">
                <slot name="body-img-content"></slot>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'wrapCommonShow',
    data() {
        return {
        }
    },
    components: {},
    methods: {
        nextPageHandler() {
            this.$emit('next-page');
        }
    }
}
</script>
<style lang="less">
.show-body-detail{
    display: flex;
    height: calc(100vh);
    overflow-y: hidden;
    padding: 72px 30px 90px;
    .wrap-img-and-description{
        display: flex;
        position: relative;
        flex-grow: 1;
        // border: 2px solid red;
        justify-content: flex-end;
        align-items: center;
    }
    .body-detail-content{
        position: relative;
        width: 210px;
        height: 510px;
        // border: 1px solid blue;
    }
    .text-content{
        position: absolute;
        height: 510px;
        width: 100%;
        left: 0;
        color: #5defe0;
        .detail-remark-wrap{
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
