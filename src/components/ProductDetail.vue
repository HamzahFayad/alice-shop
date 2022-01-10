<template>
  <div id="product-detail">
    <div class="back">
      <a class="btn product--link" @click="back">Back</a>
    </div>

    <section class="productDetails">
      <div class="productImages">
        <div
          class="product--img"
          style="width: 400px; height: 450px; padding: 10px 0"
        >
          <img
            style="width: 100%; height: 100%; object-fit: cover"
            :src="productItem.image"
            alt=""
          />
        </div>
        <div v-if="productItem.moreImages">
          <div
            class="moreImages"
            v-for="(imgs, index) in productItem.moreImages"
            :key="index"
          >
            <div style="width: 90px; height: 100px">
              <img
                style="width: 100%; height: 100%; object-fit: cover"
                :src="imgs"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="productInfos">
        <p>Article {{ productId }}</p>
        <h2>{{ productItem.name }}</h2>
        <p>{{ productItem.details }}</p>
        <h3>{{ productItem.price }} $</h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum d
        </p>
        <br />
        <select name="size" id="size" v-model="productSize">
          <option value="">Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <select name="color" id="color" v-model="productColor">
          <option value="">Color</option>
          <option value="beige">Beige</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
        </select>

        <br /><br />
        <button @click="addToCard">ADD to Card</button>
        <br /><br />
        <div class="reviews" v-if="this.reviewsList.length">
          <p>Reviews</p>
          <ReviewsList :reviews="reviewsList" />
        </div>
        <Form @add-review="reviewHandler" />
      </div>
    </section>
  </div>
</template>

<script>
import Form from "./Form.vue";
import ReviewsList from "./ReviewsList.vue";

export default {
  name: "ProductDetail",
  props: ["productId", "productItem"],
  components: {
    Form,
    ReviewsList,
  },
  data() {
    return {
      productSize: null,
      productColor: null,
      reviewsList: [],
    };
  },

  methods: {
    back() {
      this.$router.push("/");
    },
    addToCard() {
      alert(this.productSize + " " + this.productColor);
    },
    reviewHandler(reviewObject) {
      this.reviewsList.push(reviewObject);
    },
  },
};
</script>

<style lang="scss">
.back {
  position: fixed;
  top: 0;
  float: left;
  padding: 20px;
}
.productDetails {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 40px;
  .productImages {
    margin: 1% 4%;
    .moreImages {
      margin-right: 2%;
      float: left;
    }
  }
  .productInfos {
    //  flex: 1;
    max-width: 600px;
    text-align: left;
    margin: 1% 4%;
  }
}
</style>