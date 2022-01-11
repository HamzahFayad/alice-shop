<template>
  <div id="card">
    <div class="card">
      <p>
        Card: <strong>{{ productNumber }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["productNumber"],
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