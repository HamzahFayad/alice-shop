<template>
  <div id="product-list">
    <h2>Products</h2>
    <br />
    <ul class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product--img">
          <img :src="product.image" alt="" />
        </div>
        <h2 class="product--title">{{ product.name }}</h2>
        <div class="product--infos">
          <p class="product--price">{{ product.price }} $</p>
          <router-link
            :to="{
              name: 'ProductDetail',
              params: { productItem: product, productId: product.id },
            }"
            ><a class="btn product--link">Details</a></router-link
          >
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};

//load more button
</script>

<style lang="scss">
@mixin flex {
  display: flex;
  flex-flow: row wrap;
}
#product-list {
  width: 100%;
  .products {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    //gap: 15px;
    padding: 0;
    margin: 0;
    .product {
      padding: 15px 20px;
      margin: 1.5%;
      //border: 1px solid #1c1c1c;
      box-shadow: 1px 2px 8px 1px #1c1c1c63;
      border-radius: 4px;
      @media only screen and (max-width: 700px) {
        margin: 3%;
      }
      .product--title {
        padding: 10px 0;
        font-size: 20px;
        text-align: left;
      }
      .product--img {
        width: 250px;
        height: 250px;
        margin: 4% auto;
        @media only screen and (max-width: 700px) {
          width: 350px;
          height: 300px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .product--infos {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .product--price {
          padding: 10px 0;
          font-weight: 500;
        }
        .product--link {
          width: 32%;
        }
      }
    }
  }
}
</style>