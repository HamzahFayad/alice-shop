<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <h5>*Demo Site</h5>
      <p style="text-align: center">
        Project for testing purposes // Vue-Router, Components, props and emit
      </p>
      <p style="text-align: center">--- &copy; 2022 Hamzah ---</p>
    </footer>
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
@import url("https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;500;600;700&family=Montserrat:wght@400;500&display=swap");
html,
body,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Assistant", sans-serif;
  color: #1c1c1c;

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
  margin: 80px 0 40px 0px;
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
footer {
  margin-top: 4%;
}
</style>
