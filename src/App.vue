<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="v" :transition="effect" keep-alive />
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            effect: "next", // 用于切换过渡动画
        };
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
  background: #c0c0c0;
}
body {
  height: 100%;
}
</style>
