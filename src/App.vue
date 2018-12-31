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
            effect: "next"
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
 ul, li, ol{
   list-style: none;
  }
body {
  height: 100%;
}
</style>
