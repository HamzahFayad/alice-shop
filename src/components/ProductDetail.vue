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
        <Card @product-number="addToCard" :productNumber="productNumber" />
        <br />
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

        <h4>Size:</h4>
        <div class="radioBtns">
          <div>
            <input type="radio" id="xs" value="xs" v-model="productSize" />
            <label for="xs">XS</label>
          </div>
          <div>
            <input type="radio" id="s" value="s" v-model="productSize" />
            <label for="s">S</label>
          </div>
          <div>
            <input type="radio" id="m" value="m" v-model="productSize" />
            <label for="m">M</label>
          </div>
          <div>
            <input type="radio" id="l" value="l" v-model="productSize" />
            <label for="l">L</label>
          </div>
          <div>
            <input type="radio" id="xl" value="xl" v-model="productSize" />
            <label for="xl">XL</label>
          </div>
        </div>

        <br />

        <h4>Color:</h4>
        <div class="radioBtns">
          <div>
            <input
              type="radio"
              id="beige"
              value="beige"
              v-model="productColor"
            />
            <label for="beige">Beige</label>
          </div>
          <div>
            <input
              type="radio"
              id="black"
              value="black"
              v-model="productColor"
            />
            <label for="black">Black</label>
          </div>
          <div>
            <input type="radio" id="gray" value="gray" v-model="productColor" />
            <label for="gray">Gray</label>
          </div>
        </div>

        <br />
        <a class="btn product--link" @click="addToCard"> ADD to Card </a>

        <br /><br /><br />
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
import Card from "./Card.vue";

export default {
  name: "ProductDetail",
  props: ["productId", "productItem"],
  components: {
    Form,
    ReviewsList,
    Card,
  },
  data() {
    return {
      productSize: null,
      productColor: null,
      reviewsList: [],
      productNumber: 0,
    };
  },

  methods: {
    back() {
      this.$router.push("/");
    },
    addToCard() {
      if (this.productSize == null || this.productColor == null) {
        alert("Please choose size and color");
        return;
      }
      this.productNumber++;
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

.radioBtns {
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  label {
    padding: 0 5px;
  }
}
</style>