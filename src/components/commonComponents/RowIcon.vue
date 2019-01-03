<template>
    <div style="display: inline-block;">
        <svg class="row-icon" :style="'transform:rotate('+rotate+'deg)'">
        <polyline
            points="0 6 6 0 12 6"
            stroke="#5defe0"
            stroke-width="1"
        ></polyline>
        <polyline
            points="0 12 6 6 12 12"
            stroke="#5defe0"
            stroke-width="1"
        ></polyline>
    </svg>
    </div>
</template>
<script>
export default {
    name: 'RowIcon',
    props: {
        direct: {
            type: String,
            default: 'top'
        }
    },
    data() {
        return {}
    },
    computed: {
        rotate() {
            let deg = 0
            switch (this.direct) {
                case 'top': deg = 0; break;
                case 'right': deg = 90; break;
                case 'bottom': deg = 180; break;
                case 'left': deg = 270; break;
            }
            return deg
        }
    }
}
</script>
<style lang="less">
svg{
    padding: 0;
    margin: 0;
}
    .row-icon{
        width: 14px;
        height: 14px;
        display: inline-block;
        // padding-top: 4px;
    }
</style>
