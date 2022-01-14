<template>
  <div id="order">
    order
    <div class="back">
      <a class="btn product--link" @click="back">Back</a>
    </div>
    {{ order }}
    <img style="max-width: 300px" :src="productItem.image" />
  </div>
</template>

<script>
export default {
  name: "Order",
  props: ["productId", "productItem", "order"],

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
</style>