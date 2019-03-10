<template>
    <div class="wrap-menu clearfix">
        <div class="menu-item">
            <div class="menu-title" @click="showMenu=!showMenu">导航 Guide
                <div class="menu-triganle" :class="showMenu ? 'close-menu' : ''">
                    <svg width="10" height="6">
                        <polygon
                            points="0,6 5,0 10,6"
                            fill="#5defe0"
                            stroke="#5defe0"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <ul v-if="showMenu" class="menu-list">
                <li class="menu-list-item" v-for="item in menuList" :key="item.id" @click="menuChangeHandler(item.route)">{{item.name}}</li>
            </ul>
        </div>
        <svg v-if="showRow" width="36" height="36" @click="nextPageHandler">
            <circle
                cx="18"
                cy="18"
                r="16"
                stroke="#5defe0"
                stroke-width="2"
                fill="none"
                />
            <polyline
                points="14 10 26 18 14 26"
                stroke="#5defe0"
                stroke-width="2"
            ></polyline>
        </svg>
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
                route: 'model-one'
            }, {
                name: '品质优势',
                id: 2,
                route: 'advance-one'
            }, {
                name: '适用疾病',
                id: 3,
                route: 'applicable-disease'
            }, 
            // {
            //     name: '使用说明',
            //     id: 4,
            //     route: ''
            // }
            ]
        }
    },
    mounted() {
        const _this = this;
        document.body.addEventListener('click', function(event) {
            let el = document.getElementsByClassName('menu-title')[0];
            let el2 = document.getElementsByClassName('menu-list')[0];
            if (el2) {
                if(!el2.contains(event.target)) {
                    _this.showMenu = false
                }
            }
        }, false)
    },
    methods: {
        menuChangeHandler(route) {
            if (this.$route.path.replace(/\//g, '') === route) {
                    this.showMenu = false
            }
            this.$router.push({path: route});
        },
        nextPageHandler() {
            this.$emit('next-page')
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
    background: #0a1430;
}
.wrap-menu{
    padding: 0 20px;
    width: 100%;
    .menu-item{
        position: relative;
        float: left;
    }
    svg{
        float: right;
    }
}
.menu-title {
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    .menu-triganle{
        margin-left: 6px;
    }
    .close-menu{
        transform: rotate(180deg);
    }
}
</style>
