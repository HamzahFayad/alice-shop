<template>
  <div id="card">
    <div class="card">
      <a class="product--link">
        Card: <strong>{{ productNumber }}</strong>
      </a>

      <!--Card: <strong>{{ productNumber }}</strong>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["productNumber", "productItem"],
  methods: {
    addProduct() {
      this.$emit("product-number");
      //this.productNumber++;
    },
  },
};
</script>

<style lang="scss">
.card {
  background: rgb(102, 0, 63);
  color: white;
  max-width: 100px;
  padding: 8px;
  border-radius: 4px;
  text-align: center;
}
</style>