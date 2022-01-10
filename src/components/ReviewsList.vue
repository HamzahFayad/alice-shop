<template>
  <div id="reviews-list">
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        {{ reviews[index].inputName }} /// {{ reviews[index].inputReview }} ///
        {{ reviews[index].inputStars }} stars
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReviewsList",
  props: ["reviews"],
};
</script>

<style lang="scss">
</style>