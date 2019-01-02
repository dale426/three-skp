<template>
    <div class="wrap-menu clearfix">
        <div class="menu-item">
            <div class="menu-title" @click="showMenu=!showMenu">导航 Guide <div class="triganle" :class="showMenu ? 'close-menu' : ''"></div></div>
            <ul v-if="showMenu" class="menu-list">
                <li class="menu-list-item" v-for="item in menuList" :key="item.id">{{item.name}}</li>
            </ul>
        </div>
        <svg width="36" height="36">
            <circle class="right-row" cx="14"  cy="14" r="28"/>
        </svg>
        <img v-if="showRow" width="36" height="36" src="../../assets/menu.png" alt="#">
    </div>
</template>
<script>
export default {
    name: 'MenuComponents',
    props: {
        showRow: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showMenu: false,
            menuList: [{
                name: '产品图鉴',
                id: 1,
                route: ''
            }, {
                name: '品质优势',
                id: 2,
                route: ''
            }, {
                name: '适用疾病',
                id: 3,
                route: ''
            }, {
                name: '使用说明',
                id: 4,
                route: ''
            }]
        }
    }
}
</script>
<style lang="less">
.menu-list-item, .menu-title{
    width: 180px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 2px solid #5defe0;
    border-radius: 4px;
    font-weight: bolder;
    color: #5defe0;
    font-size: 16px;
}
.menu-list{
    position: absolute;
    bottom: 38px;
    left: 0;
}
.menu-list-item {
    margin-bottom: 6px;
}
.wrap-menu{
    padding: 0 20px;
    width: 100%;
    .menu-item{
        position: relative;
        float: left;
    }
    img{
        float: right;
    }
    .right-row{
        fill: none;
        stroke: #5defe0;
        stroke-width: 2px;
    }
}
.menu-title {
    position: relative;
    .triganle{
        display: inline-block;
        margin: 0 0 2px 5px;
        width: 0;
        height: 0;
        border-width: 6px;
        border-style: solid;
        border-color: transparent #5defe0 transparent transparent;
        transform: rotate(90deg);
    }

    .close-menu{
        transform: rotate(270deg);
        margin: 0 0 -5px 5px;
    }
}
</style>
