<template>
    <div id="app">
        <!-- <transition :name="transitionName"> -->
            <router-view class="v appView" keep-alive/>
        <!-- </transition> -->
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            transitionName: 'slide-left',
            routeList: [
                'model-one',
                'model-two',
                'model-three',
                'advance-one',
                'advance-two',
                'advance-three',
                'advance-certificate',
                'advance-four',
                'advance-five',
                'applicable-disease'
            ]
        };
    },
    watch: {
        '$route'(to, from) {
            let fromIndex = this.routeList.indexOf(from.name);
            let toIndex = this.routeList.indexOf(to.name);
            this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #0a1430;
    height: 100%;
}

.appView {
    width: 100%;
    transition: all 0.6s ease;
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
ul,
li,
ol {
    list-style: none;
}
</style>
