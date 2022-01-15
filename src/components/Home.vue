<template>
  <div id="home">
    <div class="header">
      <h1>Alice Shop</h1>
    </div>
    <ProductList v-bind:products="products" />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
export default {
  name: "Home",
  components: {
    ProductList,
  },
  data() {
    return {
      products: [
        {
          id: 100,
          name: "Casual Jacket",
          image: require("../assets/product1.jpg"),
          moreImages: [
            require("../assets/product1.jpg"),
            require("../assets/product1.jpg"),
          ],
          price: 10.99,
          details: "Lorem Ipsum",
        },
        {
          id: 101,
          name: "Oversized Pullover",
          image: require("../assets/product2.png"),
          moreImages: [
            require("../assets/product2.png"),
            require("../assets/product2.png"),
          ],
          price: 8.99,
          details: "Lorem Ipsum",
        },
        {
          id: 102,
          name: "Knitted Cardigan",
          image: require("../assets/product3.jpg"),
          price: 9.99,
          details: "Lorem Ipsum",
        },
        {
          id: 103,
          name: "Cotton Pullover",
          image: require("../assets/product4.jpg"),
          price: 12.99,
          details: "Lorem Ipsum",
        },
        {
          id: 104,
          name: "Oversized Jacket",
          image: require("../assets/product5.jpg"),
          price: 12.99,
          details: "Lorem Ipsum",
        },
        {
          id: 105,
          name: "Oversized Pullover",
          image: require("../assets/product6.jpg"),
          price: 10.99,
          details: "Lorem Ipsum",
        },
        {
          id: 106,
          name: "Long Cardigan",
          image: require("../assets/product7.jpg"),
          price: 9.99,
          details: "Lorem Ipsum",
        },
        {
          id: 107,
          name: "Comfy Shirt",
          image: require("../assets/product8.jpg"),
          price: 11.99,
          details: "Lorem Ipsum",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  margin: 4% 0;
}
</style>
