<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view class="v" keep-alive />
  </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
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
 ul, li, ol{
   list-style: none;
  }

</style>
