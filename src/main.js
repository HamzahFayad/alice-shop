import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/product/:productId",
    component: ProductDetail,
    name: "ProductDetail",
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
