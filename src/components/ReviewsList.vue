<template>
  <div id="reviews-list">
    <ul>
      <li v-for="(review, index) in reviewObj" :key="index">
        {{ reviewObj }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReviewsList",
  props: ["reviewObj"],
};
</script>

<style lang="scss">
</style>