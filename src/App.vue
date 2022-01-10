<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
html,
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  //font-size: 100%;
}
h1 {
  padding: 20px 0;
}
a {
  text-decoration: none;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c1c1c;
  margin-top: 80px;
  padding: 0 20px;
}
.btn {
  color: #fff;
  border-radius: 4px;
  background: rgb(102, 0, 63);
  padding: 4px 6px;
  font-weight: 500;
  transition: all 300ms ease;
  &:hover {
    color: rgb(102, 0, 63);
    background: #fff;
  }
}
</style>
